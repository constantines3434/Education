const ItemList = ({ list, remove }) => {
  return (
    <div>
      <ul className="item-list">
        {list.map((entry, index) => (
          <div className="item">
            <li key={index}> {entry}</li>
            <select>
              <option>Личное</option>
              <option>Работа</option>
              <option>Учёба</option>
              <option>Отдых</option>
            </select>
            <button className="delete-button" onClick={() => { remove(entry); }}>Удалить</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;