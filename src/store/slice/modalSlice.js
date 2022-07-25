const createModalSlice=(set)=>({
  isModalOpen:false,
  setIsModal:(payload)=>set((state)=>({...state,isModalOpen:payload}))
})
export {createModalSlice}