import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer"

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/Kasa" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App;