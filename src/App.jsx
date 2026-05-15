import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './body';
import { Login } from './Components/login';
import { Feed } from './Components/feed';
import { Profile } from './Components/profile';
import {Connection} from './Components/connection';

function App() {

  return (
   <BrowserRouter >
      <Routes>
        <Route path='/' element={<MainPage />} >
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Feed />} />
          <Route path='profile' element={<Profile />} />
          <Route path='connection' element={<Connection />} />
        </Route>
        
      </Routes>
   </BrowserRouter>
  )
}

export default App
