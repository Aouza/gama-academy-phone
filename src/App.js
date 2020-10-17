import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";

import GlobalStyle from "./styles";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <GlobalStyle />
    </>
  );
};

export default App;
