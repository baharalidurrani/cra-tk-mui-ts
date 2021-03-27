import React, { useEffect, useMemo, useState } from "react";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
// import "./App.css";
import { Test } from "./features/test/Test";

function App() {
  const [prefersDarkState, setprefersDarkState] = useState<
    null | "light" | "dark"
  >(null);
  const prefersDarkQuery = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    setprefersDarkState(null);
  }, [prefersDarkQuery]);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type:
            prefersDarkState !== null
              ? prefersDarkState
              : prefersDarkQuery
              ? "dark"
              : "light",
        },
      }),
    [prefersDarkQuery, prefersDarkState]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Test setprefersDarkState={setprefersDarkState} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
