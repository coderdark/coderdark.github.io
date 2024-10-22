import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home.jsx';
import Nav from './components/nav.jsx';
import Footer from './components/footer.jsx';
import Thoughts from './pages/thoughts.jsx';
import Experiments from './pages/experiments.jsx';

export default function App() {
    return <BrowserRouter>
        <main className={'flex flex-col relative w-screen min-h-screen'}>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/thoughts" element={<Thoughts/>}/>
                <Route path="/experiments" element={<Experiments/>}/>
            </Routes>
            <Footer/>
        </main>
    </BrowserRouter>
        ;
}
