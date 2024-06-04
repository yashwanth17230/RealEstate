
// eslint-disable-next-line no-unused-vars
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Profile" element={<Profile/>} />

    </Routes>
    </BrowserRouter>
  )
}
