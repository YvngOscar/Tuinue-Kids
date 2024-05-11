import './App.css'
import {useEffect} from "react";
import Footer from "./components/navigation/Footer.tsx";
import NavBar from "./components/navigation/NavBar.tsx";
import Aos from "aos";
import "aos/dist/aos.css"
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";

function App() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <main className={"w-full h-max"}>
            <NavBar/>
            <Routes>
                <Route path={"/*"} element={<MainPage/>}/>
                <Route
                    path={"/gallery"}
                    element={<GalleryPage/>}
                />
            </Routes>
            <Footer/>
        </main>
    )
}

export default App
