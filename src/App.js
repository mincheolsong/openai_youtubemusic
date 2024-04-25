import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Openai from "./pages/Openai";
import GoogleOAuth from "./pages/GoogleOAuth";
import YoutubeMusic from "./pages/YoutubeMusic";

function App() {
    const navigate = useNavigate();

    return (
        <>
            <Routes>
                <Route path="/googleOAuth" element={<GoogleOAuth />} />
                <Route path="/openai" element={<Openai />} />
                <Route path="/youtubeMusic" element={<YoutubeMusic />} />
            </Routes>
        </>
    );
}

export default App;
