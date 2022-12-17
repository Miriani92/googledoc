export const setActiveHeader = (state, action) => {
  const { header, pos } = action.payload;
  state.active = true;
  state.activeHeader = header;
  state.elementPosition = pos;
};

export const closeModal = (state) => {
  state.active = false;
};

export const setTitle = (state, action) => {
  state.title = action.payload;
};
