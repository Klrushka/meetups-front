export const showModalHandler = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return () => {
    setShowModal(true);
  };
};
