import React from "react";
import googleDoc from "../../sources/googledoc.png";
import styles from "./Navigations.module.css";
import { useDispatch } from "react-redux/es/exports";
import { navigationsHeader } from "../../constants/navigations";
import { useSelector } from "react-redux/es/hooks/useSelector";
import nav from "../../logic/reducers/navigations";
import DropDown from "./DropDown";

const Navigations = () => {
  const { navAction } = nav;
  const dispatch = useDispatch();
  const { active: isDropdownActive } = useSelector((state) => state.navReducer);

  const clickOnMenuItem = (event, header) => {
    const buttonPosition = event.target.getBoundingClientRect();
    const { top, left, right, bottom } = buttonPosition;
    const pos = {
      top: top,
      left: left,
      right: right,
      bottom: bottom,
    };
    dispatch(navAction.setActiveHeader({ header, pos }));
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  return (
    <nav className={styles.navWrapper}>
      <div>
        <img src={googleDoc}></img>
      </div>
      <div className={styles.menuWrapper}>
        <input
          onChange={(e) => dispatch(navAction.setTitle(e.target.value))}
          className={styles.title}
          placeholder="Untitled Document"
          onKeyPress={handleKeypress}
        />
        <ul className={styles.nav}>
          {navigationsHeader.map((header, index) => {
            return (
              <button
                key={index}
                className={styles.navMenuItem}
                onClick={(event) => clickOnMenuItem(event, header)}
              >
                {header}
              </button>
            );
          })}
        </ul>
      </div>
      {isDropdownActive && <DropDown />}
    </nav>
  );
};

export default Navigations;
