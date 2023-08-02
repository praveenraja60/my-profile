import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

interface ThemeState {
  darkMode: boolean;
}

interface ThemeAction {
  type: string;
}

interface ThemeContextProps {
  state: ThemeState;
  dispatch: Dispatch<ThemeAction>;
}

const initialState: ThemeState = { darkMode: false };

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const themeContext = createContext<ThemeContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};
