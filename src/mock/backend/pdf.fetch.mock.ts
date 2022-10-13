export const fetchPdf = async (setPdfLink: Function) => {
  setPdfLink(process.env.REACT_APP_MOCK_PDF);
};
