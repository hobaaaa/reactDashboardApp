type SidebarState = {
  isSidebarOpen: boolean;
};
type SidebarAction = { type: "TOGGLE_SIDEBAR" };

const sidebarReducer = (
  state: SidebarState,
  action: SidebarAction
): SidebarState => {
  if (action.type === "TOGGLE_SIDEBAR") {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  throw new Error(`No matching "${action.type}" action type`);
};

export default sidebarReducer;
