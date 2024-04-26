import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Openai from "./pages/Openai";
import GoogleOAuth from "./pages/GoogleOAuth";
import YoutubeMusic from "./pages/YoutubeMusic";
import Main from './pages/Main';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/openai" element={<Openai />} />
                <Route path="/googleOAuth" element={<GoogleOAuth />} />
                {/* <Route path="/youtubeMusic" element={<YoutubeMusic />} /> */}
            </Routes>
        </div>
    );
}

export default App;
