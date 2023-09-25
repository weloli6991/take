import React from "react";
import Routes from "routes";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
