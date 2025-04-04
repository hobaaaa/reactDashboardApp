import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import PropTypes from "prop-types";

type SidebarContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const initialState = {
  isSidebarOpen: false,
  toggleSidebar: () => {},
};
export const SidebarContext = createContext<SidebarContextType>(initialState);
export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  };

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.proptypes = {
  children: PropTypes.node,
};
