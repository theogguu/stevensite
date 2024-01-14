import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ResumePage from './components/ResumePage/ResumePage';


const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
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