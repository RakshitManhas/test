import React from 'react';
import Header  from './component/Header/Header';
// import NavigationBar from './component/NavigationBar/NavigationBar';
import Accelerator from './component/Accelerator/Accelerator';
import Footer from './component/Footer/Footer';
import Services from './component/Services/Services';
import Integrations from './component/Integration/Integrations';
import './App.css'

const App: React.FC = () => {
    return (
    <>
    <div className="landing-page">
      {/* <NavigationBar /> */}
      <Header />
      <Services/>
      <Accelerator />
      <Integrations />
      <Footer/> 
      </div>
    </>
  )
}

export default App
