import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import CookingBlog from './components/CookingBlog/CookingBlog';
import { useState, useEffect} from 'react';
import { PALETTES } from './palettes';
import PaletteSwitcher from './components/PaletteSwitcher';

const Main = () => {
  const [active, setActive] = useState('violet');

  // Sync palette vars onto :root so body {} CSS can read them
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(PALETTES[active].vars).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });
  }, [active]);

  return (
    // Moving background style is moved here from .css
    <div style={PALETTES[active].vars}>
      <PaletteSwitcher active={active} onSwitch={setActive} variant="dots" />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cooking" element={<CookingBlog/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

// const queryClient = new QueryClient();
const App = () => (
// <QueryClientProvider client={queryClient}>
  <Main />
// </QueryClientProvider>
)
export default App;
// const Main = () => {
//   // const [active, setActive] = useState('violet');

//   return (
//     // 
//     // <div>
      
//       <BrowserRouter>
//         <Routes>
          // {/*  */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/cooking" element={<CookingBlog />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </BrowserRouter>
//     // </div>
//   );
// }

// const App = () => {
//   // const queryClient = new QueryClient();
//   // <QueryClientProvider client={queryClient}>
//     <Main />
//   // </QueryClientProvider>
// };

// export default App;