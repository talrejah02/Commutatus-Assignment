import create from "zustand";
import { createCeoDataSlice, createDepartmentsSlice, createDisplayMembersSlice, createModalSlice, createResetMembersSlice, createTeamMembersSlice, createTeamsSlice } from "../slice";

const useStore=create((set)=>({
  ...createModalSlice(set),
  ...createTeamsSlice(set),
  ...createCeoDataSlice(set),
  ...createDepartmentsSlice(set),
  ...createTeamMembersSlice(set),
  ...createDisplayMembersSlice(set),
  ...createResetMembersSlice(set)
}))

export default useStore