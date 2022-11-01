export const fetchPdf = async (
  setPdfLink: React.Dispatch<React.SetStateAction<string>>
) => {
  setPdfLink(process.env.REACT_APP_MOCK_PDF);
};
