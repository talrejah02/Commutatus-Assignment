const createTeamsSlice=(set)=>({
  teams:{
    SD1: {
      teamName: "Staff sparrow",
      teamLead:"saurav ganguly",
      teamMembers: ["674","675"],
    },
    ED1: {
      teamName: "engneeringOne",
      teamLead:"raman sharma",
      teamMembers: ["676","677"],
    },
    DD1: {
      teamName: "Design sparrow",
      teamLead: "kapil sharma",
      teamMembers: ["678","679"],
    },
  },
  setTeams:(payload)=>set((state)=>({...state,teams:payload}))
})
export {createTeamsSlice}