import "./App.css";

const Menu = ({list, setItem, remove}) => {
    return (
        <nav className="Menu">
            <h1>МЕНЮ</h1>
            <button onClick={() => {setItem(list.sort())}}>Отсортировать</button>
            <button onClick={() => {
                for (let entry of list) {
                remove(entry);
                }}}>Удалить последнюю запись</button>
        </nav>
    );
}

export default Menu;