import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import SignUp from "./components/SignUp"
import Register from "./components/Register";
import Admin from "./components/Admin";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Register />} /> 
            <Route path="/viewing" element={<SignUp />} />





         
        </Routes>
      </BrowserRouter>
    </>
  );
}