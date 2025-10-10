import Amenities from './component/Amenities';
import Contact from './component/Contact';
import Features from './component/Features';
import Header from './component/Header';
// import Home from './component/Home';
import Overview from './component/Overview';
import Location from './component/Location';
import EnquiryButton from './component/EnquiryButton';
import WhatsappButton from './component/WhatsappIcon';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {/* <Home/> */}
      <Overview/>
      <Features/>
      <Amenities/>
      <Location/>
      <Contact/>

      <EnquiryButton/>
      <WhatsappButton/>
      


    

      
      

      

     

     

     

    

     
    </div>
  );
}

export default App;
