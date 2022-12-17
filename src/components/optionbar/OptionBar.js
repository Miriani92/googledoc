import React from "react";
import styles from "./OptionBar.module.css";
import { useDispatch } from "react-redux";
import options from "../../logic/reducers/optionsBar";
import { optionHeaders } from "../../constants/optionBarConstants";
import { selectOptions } from "../../constants/optionBarConstants";

export const OptionBar = () => {
  const dispatch = useDispatch();
  const { optionAction } = options;

  return (
    <div className={styles.optionBarWrapper}>
      {optionHeaders.map((item, ind) => {
        const { name, Icon, clickHandler } = item;
        const onClikcIcon = () => clickHandler(dispatch, optionAction);
        return (
          <div key={ind}>
            <button className={styles.button} onClick={onClikcIcon}>
              <Icon />
            </button>
          </div>
        );
      })}
      {selectOptions.map((item, ind) => {
        const { name, select, clickHandler } = item;
        const onSelectOption = (e) => clickHandler(dispatch, optionAction, e);
        return (
          <select
            id={item.name}
            key={ind}
            className={styles.select}
            onChange={(e) => onSelectOption(e)}
          >
            {item.select.map((item, ind) => {
              return (
                <option key={ind} value={item} className={styles.option}>
                  {item}
                </option>
              );
            })}
          </select>
        );
      })}
    </div>
  );
};
