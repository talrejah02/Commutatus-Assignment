const createModalSlice = (set) => ({
  isModalOpen: false,
  isTeamModalOpen: false,
  modalType: "edit",
  setIsModal: (payload) => set((state) => ({ ...state, isModalOpen: payload })),
  setIsTeamModal: (payload) =>
    set((state) => ({ ...state, isTeamModalOpen: payload })),
  setModalType: (payload) => set((state) => ({ ...state, modalType: payload })),
});
export { createModalSlice };
