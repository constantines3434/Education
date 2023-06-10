import { useState } from "react";
import ItemInput from "./Input";
import ItemList from "./ItemList";
import Menu from "./Menu"
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (item !== "") {
      setItems([...items, item]);
      setItem("");
    }
  };

  const deleteItem = (text) => {
    const newItems = items.filter((item) => {
      return item !== text;
    });
    setItems(newItems);
  };

  return (
    <div>
    <header><h1>Список дел</h1></header>
    <div class="container_menu">
      <Menu list={items} setItem={setItem} remove={deleteItem}/>
      <div className="App">
        <ItemInput item={item} setItem={setItem} addItem={addItem} />
        <ItemList list={items} remove={deleteItem} />
      </div>
      </div>
      </div>
  );
};

export default App;