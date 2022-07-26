const createResetMembersSlice = (set) => ({
  currentMember: {},
  setCurrentMember: (payload) =>
    set((state) => ({ ...state, currentMember: payload })),

  UpdateMember: (
    payload // Updating member info in teamMembers array
  ) =>
    set((state) => {
      let elementIndex = state.teamMembers.findIndex(
        (obj) => obj.ID === payload.ID
      );
      state.teamMembers[elementIndex].Name = payload.Name;
      state.teamMembers[elementIndex].Phone = payload.Phone;
      state.teamMembers[elementIndex].EmailID = payload.EmailID;
      state.setDisplayMembers(state.teams[state.currentTeam].teamMembers);
      state.setCurrentMember({
        empty: true,
      });
    }),

  deleteMember: (
    payload // Deleting member from teamMembers and from the respective teams
  ) =>
    set((state) => {
      let elementIndex = state.teamMembers.findIndex(
        (obj) => obj.ID === payload
      );
      state.teamMembers.splice(elementIndex, 1);
      elementIndex = state.teams[state.currentTeam].teamMembers.findIndex(
        (item) => item === payload
      );
      state.teams[state.currentTeam].teamMembers.splice(elementIndex, 1);
      state.setDisplayMembers(state.teams[state.currentTeam].teamMembers);
      state.setCurrentMember({
        empty: true,
      });
    }),
});
export { createResetMembersSlice };
