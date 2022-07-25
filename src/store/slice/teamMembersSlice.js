const createTeamMembersSlice = (set) => ({
  teamMembers: [
    {
      ID: "674",
      Name: "hitesh talreja",
      Phone: "7778889965",
      EmailID: "talrejah78@gmail.com",
    },
    {
      ID: "675",
      Name: "Ishan jirety",
      Phone: "8754151635",
      EmailID: "jirety78@gmail.com",
    },
    {
      ID: "676",
      Name: "piyush solakhiya",
      Phone: "1661616165",
      EmailID: "solakhiya76@gmail.com",
    },
    {
      ID: "677",
      Name: "rohit sharma",
      Phone: "7778889961",
      EmailID: "sharma@gmail.com",
    },
    {
      ID: "678",
      Name: " pankaj wadhwani",
      Phone: "7778889962",
      EmailID: "wadwani56@gmail.com",
    },
    {
      ID: "679",
      Name: "yash jain",
      Phone: "7778889963",
      EmailID: "jain767@gmail.com",
    },
  ],
  setTeamMembers: (payload) =>
    set((state) => ({ ...state, teamMembers: payload })),
});
export { createTeamMembersSlice };
