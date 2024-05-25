import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Login from "./Component/Login/Login";

import Signup from "./Component/Sighup/Sighnup";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";
import Welcome from "./Component/welcomelogin/Welcome";

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user);
      }
    });
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col  bg-gray-100">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home name={userName} />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
