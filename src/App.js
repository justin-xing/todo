import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/todo/Todo";
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
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Todo />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
