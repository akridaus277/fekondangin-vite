
import './App.css'
import LandingPage from './component/pages/landingpage/LandingPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>

      <Router>
        <Routes>

          <Route path='/' element={<LandingPage></LandingPage>}>
          </Route>

        </Routes>
      </Router>
      
    </>
  )
}

export default App
