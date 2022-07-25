const createDepartmentsSlice=(set)=>({
  departments:{
    SD: {
      name: "Jagdish bhagat",
      teams: ["SD1"],
    },
    ED: {
      name: "bhagat singh",
      teams: ["ED1"],
    },
    DD: {
      name: "maya bhagat",
      teams: ["DD1"],
    },
  },
  setDepartments:(payload)=>set((state)=>({...state,departments:payload}))
})
export {createDepartmentsSlice}