import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import DarkVeil from './components/DarkVeil'
import Ddd from './components/Homepage'
import Navvbar from './components/Navvbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookandExplore from './Pages/BookandExplore'
import Homepage from './components/Homepage'
import BookTicket from './Pages/BookTicket'
import MyTickets from './Pages/MyTickets'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import ProtectedRouter from './Pages/ProtectedRouter'
import ProtectedRoute from './Pages/ProtectedRouter'
import Profile from './Pages/Profile'
import Footer from './components/Footer'



function App() {
  
  return (
   
      <>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Ddd />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/bookandexplore/:id" element={<BookandExplore />} />

        {/* Protected Pages */}
        <Route
          path="/mytickets"
          element={
            <ProtectedRoute>
              <MyTickets />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookticket/:categoryId/:eventId"
          element={
            <ProtectedRoute>
              <BookTicket />
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    
     </>
    
          
 

    
  )
}

export default App
