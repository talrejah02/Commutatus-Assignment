import create from "zustand";
import { createCeoDataSlice, createDepartmentsSlice, createModalSlice, createTeamMembersSlice, createTeamsSlice } from "../slice";

const useStore=create((set)=>({
  ...createModalSlice(set),
  ...createTeamsSlice(set),
  ...createCeoDataSlice(set),
  ...createDepartmentsSlice(set),
  ...createTeamMembersSlice(set),
}))

export default useStore