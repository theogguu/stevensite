import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import CookingBlog from './components/CookingBlog/CookingBlog';
import BackgroundAnimator from './components/BackgroundAnimator';


const Main = () => {
  return (
    <BrowserRouter>
      <BackgroundAnimator />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/cookingblog" element={<CookingBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

// const queryClient = new QueryClient();

const App = () => (
  // <QueryClientProvider client={queryClient}>
      <Main />
  // </QueryClientProvider>
)

export default App;