export const getActiveMenuDropDown = (activeHeader, headersObj) => {
  return headersObj[activeHeader];
};

export const handleClickOpenFile = async (window, action, dispatch) => {
  const getReference = async () => {
    let [fileHandler] = await window.showOpenFilePicker();
    const ref = await fileHandler.getFile();
    const fr = new FileReader();

    fr.readAsText(ref);

    return fr.addEventListener("load", () => {
      return dispatch(action(fr.result));
    });
  };
  getReference();
};
