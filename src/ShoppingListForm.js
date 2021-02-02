import React from 'react';

const ShoppingListForm = (props) => {
  
  return(
    <div>
		<h2>Shopping List</h2>
        <form onSubmit={props.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={props.value}
            onChange={props.handleChange}
          />
          <button disabled={props.inputIsEmpty()}>Add</button>
        </form>

        <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
        Delete Last Item
        </button>
	</div>
	)
}
export default ShoppingListForm;