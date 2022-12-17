const CHAR_ADDED = "charAdded";
const ZOOM_LEVEL_CHANGED = "zoomLevelChanged";
const CHANGED_FONT = "fontChanged";

export const undo = (state) => {
  const lastChar = state.textAreaInputs.charAt(state.textAreaInputs.length - 1);
  state.cached.push(lastChar);
  const item = state.barActions[state.barActions.length - 1];
  switch (item) {
    case CHAR_ADDED:
      state.textAreaInputs = state.textAreaInputs.slice(
        0,
        state.textAreaInputs.length - 1
      );
      break;
  }
  state.barActions.pop();
};

export const redo = (state) => {
  if (state.cached[state.cached.length - 1]?.length === 1) {
    const updateString = state.textAreaInputs.concat(
      state.cached[state.cached.length - 1]
    );
    state.textAreaInputs = updateString;
    state.cached.pop();
  }
};

export const getInputs = (state, action) => {
  state.barActions.push(CHAR_ADDED);
  state.textAreaInputs = action.payload;
};

export const changeZoomLevel = (state, action) => {
  state.barActions.push(ZOOM_LEVEL_CHANGED);
  state.zoomLevel = action.payload;
};

export const changeFont = (state, action) => {
  state.barActions.push(CHANGED_FONT);
  state.font = action.payload;
};

export const handleClickAddFile = (state, action) => {
  state.textAreaInputs = state.textAreaInputs.concat(action.payload);
};
