import "./App.css";
import Header from "./components/GeneralUtilities/Header";
import TodoPage from "./components/Todo/TodoPage";
import Footer from "./components/GeneralUtilities/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    }
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme} >
        <CssBaseline />
        <div>
          <Header />
          <TodoPage />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;