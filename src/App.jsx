import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./components/Error/Error";
import Accommodation from "./pages/Accommodation/Accommodation";

function App() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/accommodation/:id" element={<Accommodation />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
