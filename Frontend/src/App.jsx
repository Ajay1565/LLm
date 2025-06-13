import { Route, BrowserRouter, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import SignUp from "./components/SignUp";
import ConfirmSignUp from "./components/ConfirmSignup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Result from "./components/Result";
import Questionnaire from "./components/Questionnaire";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              <div className="flex-1 overflow-auto bg-black text-white">
                <ChatArea />
              </div>
            </div>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirm" element={<ConfirmSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/result" element={<Result />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;