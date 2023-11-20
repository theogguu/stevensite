import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';


const Main = () => {
  return (
    <div className="main">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/edit/:id" element={<EditFormForUrl profile={profile} courses={data.courses} />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

// const queryClient = new QueryClient();

const App = () => (
  // <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main />
    </div>
  // </QueryClientProvider>
)

export default App;