const createCeoDataSlice=(set)=>({
  ceoData:{
    ceoDepartments: [
      {
        departmentCode: "SD",
        departmentName: "Head of Staff",
      },
      {
        departmentCode: "ED",
        departmentName: "Head of Engineering",
      },
      {
        departmentCode: "DD",
        departmentName: "Head of Design",
      },
    ],
  },
  setCeoData:(payload)=>set((state)=>({...state,ceoData:payload}))
})
export {createCeoDataSlice}