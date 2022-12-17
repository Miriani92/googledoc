import React from "react";
import styles from "./DropDown.module.css";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { allDropDownHeaders } from "../../constants/navigations";
import {
  getActiveMenuDropDown,
  handleClickOpenFile,
} from "../../utils/getActiveMenuDropDown";
import { onCloseModal } from "../../utils/closeModal";
import { iconsObj } from "../../constants/navigations";
import Modal from "../../UI/Portal";
import nav from "../../logic/reducers/navigations";
import { saveFile } from "../../utils/saveFile";
import { handleFile } from "../../logic/actions/actionCreator";

const DropDown = () => {
  const { navAction } = nav;
  const dispatch = useDispatch();
  const {
    activeHeader,
    elementPosition,
    active,
    title: t,
  } = useSelector((state) => state.navReducer);
  const { textAreaInputs } = useSelector((state) => state.optionReducer);

  const activeDropDown = getActiveMenuDropDown(
    activeHeader,
    allDropDownHeaders
  );
  return (
    <Modal
      onClose={() => onCloseModal(dispatch, navAction.closeModal)}
      modalStyle={elementPosition}
    >
      <div className={styles.dropDownWrapper} style={{ opacity: active && 1 }}>
        {activeDropDown?.map((title, ind) => {
          let Icon = iconsObj[title];
          let handleClick = () => {
            if (title === "Open")
              handleClickOpenFile(window, handleFile, dispatch);
            if (title === "Download") saveFile(textAreaInputs, t);
          };
          return (
            <div key={ind} className={styles.dropDownButton}>
              {Icon && <Icon />}
              <button
                className={styles.button}
                onClick={() => {
                  handleClick && handleClick();
                  return;
                }}
              >
                {title}
              </button>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default DropDown;
