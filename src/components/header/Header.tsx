import { searchDataFunc, sortDataFunc } from "../../redux/dataSlice";
import { modalFunc } from "../../redux/modalSlice";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1>React Redux Toolkit Example App</h1>
      <div className={styles.searchContainer}>
        <div>
          <select
            onChange={(e) => dispatch(sortDataFunc(e.target.value))}
            name=""
            id=""
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>

        <div>
          <input
            onChange={(e) =>
              dispatch(searchDataFunc(e.target.value.toLowerCase().trim()))
            }
            type="text"
            placeholder="Search"
          />
        </div>
        <div onClick={() => dispatch(modalFunc())}>
          <b>X</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
