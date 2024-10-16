import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Timetable from './components/Timetable'
import Coogleform from './components/Googleform'
import Info from './components/info'
import Footer from './components/Footer'
import Carding from './components/Carding'





function App() {


  return (

    <div className='App'>
      <Header/>
      <div class="absolute top-0 -z-10 h-full w-full bg-white">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(141,244,109,0.5)] opacity-50 blur-[80px]">
            </div></div>
          <div className='innerBox'>
       <Banner/> 
       <div class="absolute top-2000 left-0 -z-10 h-full w-full bg-white  md:block sm:hidden" >
        <div class="absolute bottom-auto left-auto left-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(141,244,109,0.5)] opacity-10 blur-[80px]">
            </div></div>

          <Carding/>
       
       <div className='ttable'>
       <div class="absolute top-2000 right-0 -z-10 h-full w-full bg-white  md:block sm:hidden" >
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(141,244,109,0.5)] opacity-10 blur-[80px]">
            </div></div>
       <Timetable/>
       <Info/>
       
       </div>
       </div> 
       <div className='box'>
      <div className='bg-image lg:block sm:hidden'>
        <img src='https://techworld.speedgabia.com/seminar/ESG/img/Promotioanal%20Banner.png'></img>
      </div>
      </div>
      <Coogleform/>
   
      <Footer/>
    </div>
    

  );
}

export default App;
