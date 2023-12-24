// import './App.css'
import MemberArea from './component/pages/memberArea/MemberArea.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>

      <Router>
        <Routes>

          <Route path='/member-area' element={<MemberArea></MemberArea>}>
          </Route>

        </Routes>
      </Router>
      
    </>
  )
}

export default App
