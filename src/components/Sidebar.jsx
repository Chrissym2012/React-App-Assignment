import { useState, useCallback } from "react"

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("")

  // TODO 2: Maintain menu items as array state
  let [menuItems, setMenuItems] = useState([])

  let [filter, setFilter] = useState("")

  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    if (!newMenuItem.trim()) return

    // TODO 3: Add new item to menuItems
    setMenuItems([newMenuItem, ...menuItems])
    setNewMenuItem("")
  }, [newMenuItem, menuItems])

  // TODO 4: Filter menu items by the filter term
  let filteredItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {/* Input for new menu item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />

      {/* Add Item button */}
      <button onClick={addMenuItem}>Add Item</button>
      <br />

      {/* Filter input */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />

      {/* TODO 1: Render unordered list of menu items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
