import "./App.css";

import Header from "./components/GeneralUtilities/Header";
import SideBar from './components/GeneralUtilities/SideBar';
import Todo from "./components/Todo/Todo";
import Footer from "./components/GeneralUtilities/Footer";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme} id="outer-container">
        <CssBaseline />
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div id="page-wrap">
          <Header />
          <Todo />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
