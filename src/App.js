import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Openai from "./pages/Openai";
import GoogleOAuth from "./pages/GoogleOAuth";
import YoutubeMusic from "./pages/YoutubeMusic";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Openai />} />
                <Route path="/googleOAuth" element={<GoogleOAuth />} />
                <Route path="/youtubeMusic" element={<YoutubeMusic />} />
            </Routes>
        </div>
    );
}

export default App;
