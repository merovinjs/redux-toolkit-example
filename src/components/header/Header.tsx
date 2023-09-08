import { modalFunc } from "../../redux/modalSlice";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1>React Redux Toolkit Example App</h1>
      <div className={styles.searchContainer}>
        <div>
          <select name="" id="">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>

        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div onClick={() => dispatch(modalFunc())}>
          <b>X</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
