import option from "../reducers/optionsBar";
const { optionAction } = option;

export const handleFile = (text) => {
  return async (dispatch) => {
    dispatch(optionAction.handleClickAddFile(text));
  };
};
