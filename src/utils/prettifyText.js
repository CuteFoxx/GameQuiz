const prettifyText = (text) => {
  return text.replace(/[:]+/g, "").replace(/[-]+/g, " ").toLowerCase().trim();
};

export default prettifyText;
