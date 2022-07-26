const createDisplayMembersSlice = (set) => ({
  members: [
    {
      Name: "Shashank Agarwal",
      Phone: "7778889965",
      EmailID: "Shashank@gmail.com",
      position: "CEO",
    },
  ],
  currentTeam: "CEO",
  setDisplayMembers: (payload) =>
    set((state) => ({
      ...state,
      members: [
        ...payload
          .map((memberId) => {
            return state.teamMembers.filter((item) => memberId === item.ID);
          })
          .flat(),
      ],
    })),
  setCurrentTeam: (payload) =>
    set((state) => ({ ...state, currentTeam: payload })),
});
export { createDisplayMembersSlice };
