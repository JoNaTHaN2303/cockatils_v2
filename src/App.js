import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import { Navbar } from './components/Components'
import { Home, Overzicht, Create, Cocktail } from './pages/Pages'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className='min-w-full min-h-screen bg-[#373A36] text-gray-200 text-lg font-mono font-semibold'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/overzicht" element={<Overzicht/>}/>
          <Route path="/cocktail/:id" element={<Cocktail/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//[#373A36] - dark gray 1
//[#E6E2DD] - white gray 2
//[#D48166] - orange 3
