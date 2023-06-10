const Input = ({ item, setItem, addItem}) => {
    return (
      <div className="input-wrapper">
        <input
          type="text"
          name="item"
          placeholder="Введите задачу:"
          onChange={(e) => {setItem(e.target.value);}}
        />
        <button className="add-button" onClick={addItem}>Добавить</button>
      </div>
    );
  };
  
  export default Input;