import { useState,useEffect } from 'react'
import NavBar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import {Books, Login, Profile, Register, SingleBook} from './pages'
import './App.css'

function App() {
  const [user,setUser] = useState(null);
  console.log(user);
  return (
    <div>
      
      <NavBar user={user}/>
        <Routes>
          <Route path="/books" element= {<Books />} />
          <Route path="/singleBook" element={<SingleBook /> } />
          <Route path="/login" element={<Login user={user} setUser= {setUser}/>} />
          <Route path="/register" element={<Register user={user} setUser= {setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
    </div>
  )
}

export default App
