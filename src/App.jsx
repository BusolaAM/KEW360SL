import Header from './components/header/header.component';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Footer from './components/footer/footer.componet';
import EnforcementPage from './pages/enforcementPage';
import LegalPage from './pages/legalPage';
import SMEPage from './pages/SMEPage';
import ScrollToHash from './components/scroll/scrollToHash.component';
import AppointmentScheduler from './pages/appointmentSechedulePage';

function App() {

  return (
    <>
        <div className="min-h-screen flex flex-col">
          <ScrollToHash />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/services/enforcement' element={<EnforcementPage />} />
              <Route path='/services/legal' element={<LegalPage />} />
              <Route path='/services/SME' element={<SMEPage />} />
              <Route path='/schedule-appointment' element={<AppointmentScheduler />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </>
  )
}

export default App






