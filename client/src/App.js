import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/toDoList" element={<ToDoList />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
