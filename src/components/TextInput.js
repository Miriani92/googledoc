import React from "react";
import { useDispatch } from "react-redux/es/exports";
import styles from "./TextInput.module.css";
import options from "../logic/reducers/optionsBar";
import { useSelector } from "react-redux";

export const TextInput = () => {
  const dispatch = useDispatch();
  const { optionAction } = options;
  const { textAreaInputs, zoomLevel, font } = useSelector(
    (state) => state.optionReducer
  );
  const zoomStyle = {
    width: zoomLevel,
    height: zoomLevel,
    fontFamily: font,
  };
  const getValueFromInput = (e) => {
    dispatch(optionAction.getInputs(e.target.value));
  };

  return (
    <div className={styles.inputWrapper}>
      <textarea
        style={zoomStyle}
        value={textAreaInputs}
        className={styles.input}
        placeholder="Type @ to insert"
        onChange={getValueFromInput}
      />
    </div>
  );
};
