export const saveFile = (text, title) => {
  const link = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = `${title}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
};
