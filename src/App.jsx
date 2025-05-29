import Header from "./components/header/header.component";
import HomePage from "./pages/home";
import Footer from './components/footer/footer.componet';
import ServicesPage from "./pages/Services";
import AboutUsPage from "./pages/AboutUs";
import ResourcesPage from "./pages/Resources";
import ContactUsPage from "./pages/Contact";
import './App.css'
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
        <div className="min-h-screen flex flex-col font-inter">
          {/* <ScrollToHash /> */}
          <Header /> 
          <main className="flex-grow pt-0 md:pt-[7rem]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </>
  )
}

export default App






