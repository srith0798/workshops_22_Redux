import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { onAddItem, onRemoveItem } from "./Actions/actionCreator";
import "./App.css";

function App() {
  const stateItems = useSelector((zen) => zen.valueReducer);
  const actionDispatch = useDispatch();

  const [valueItem, changeValueItem] = useState("");

  function addItem() {
    if (valueItem !== "") actionDispatch(onAddItem(valueItem));
    changeValueItem("");
  }

  function removeItem(id) {
    actionDispatch(onRemoveItem(id));
  }

  return (
    <div className="list_box">
      <div className="box_card">
        <h1 className="text_head">TodoList</h1>
        <div className="form_box">
          <input
            onChange={(e) => changeValueItem(e.target.value)}
            type="text"
            placeholder="Enter your list"
            value={valueItem}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <ul className="items_todo">
          {stateItems.map((item) => (
            <li className="item_todo" key={item.id}>
              <span>{item.todoItem}</span>
              <span>
                <AiOutlineDelete
                  className="del_icon"
                  onClick={() => removeItem(item.id)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// import { v4 as uuid } from "uuid";
// const [valueItem, changeValueItem] = useState("");
// const [listItems, appendItem] = useState([]);
// function addItem() {
//   if (valueItem !== "")
//     appendItem([...listItems, { id: uuid(), todoItem: valueItem }]);
//     actionDispatch(onAddItem(valueItem));
// }

// function removeItem(id) {
//   const filterData = listItems.filter((each) => each.id !== id);
//   appendItem(filterData);
// }
