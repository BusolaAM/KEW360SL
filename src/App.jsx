import Header from './components/header/header.component';
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Footer from './components/footer/footer.componet';

function App() {
    useState()
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App






