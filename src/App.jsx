import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PublicRoute from "./utils/routes/PublicRoute.js";
import PrivateRoute from "./utils/routes/PrivateRoute";
import SignupJobSeeker from "./pages/SignupJobSeeker";
import Landing from "./pages/Landing";

import SignupRecruiter from "./pages/SignupRecruiter";
import SigninRecruiter from "./pages/SigninRecruiter";
import SigninJobSeeker from "./pages/SigninJobSeeker";
import Hire from "./pages/Hire";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}></Route>
        <Route element={<PrivateRoute />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignupJobSeeker" element={<SignupJobSeeker />} />
        <Route path="/SignupRecruiter" element={<SignupRecruiter />} />
        <Route path="/SigninRecruiter" element={<SigninRecruiter />} />
        <Route path="/SigninJobSeeker" element={<SigninJobSeeker />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;