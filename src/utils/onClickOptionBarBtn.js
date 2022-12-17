export const onClickUndo = (dispatch, optionAction) => {
  return dispatch(optionAction.undo());
};
export const onClickRedo = (dispatch, optionAction) => {
  return dispatch(optionAction.redo());
};

export const onSelectPercentage = (dispatch, optionAction, e) => {
  return dispatch(optionAction.changeZoomLevel(e.target.value));
};

export const onSelectFont = (dispatch, optionAction, e) => {
  return dispatch(optionAction.changeFont(e.target.value));
};
