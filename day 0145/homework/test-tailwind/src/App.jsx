
import './index.css'
import image from './assets/image-header-desktop.jpg';
import { useState, useEffect } from 'react';




function App() {
  const [responsive, setResponsive] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 910) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <main className='  bg-black w-screen h-screen flex justify-center max-[910px]:h-[870px] items-center max-[910px]:items-start'>
      {responsive ? (
        <div className='overflow-hidden bg-black w-[320px] h-[350px] mt-[30px] flex items-center  rounded-xl flex-col items-center max-[910px]:h-[770px]'>

          <section className=' w-[100%]  h-[30%] relative overflow-hidden'>
            <div className=' absolute h-[100%] w-[100%] bg-purple-800/50'>
            </div>
            <img src={image} alt="header" style={{ width: "100%", height: "100%" }} />


          </section>
          <section className='flex-col flex items-center bg-[rgb(28,25,56)] w-[100%] text-center h-[70%]'>
            <div className='w-[290px] h-[260]  mt-[30px]'>
              <h1 className='text-white font-sans font-semibold text-3xl'>Get <span className="text-purple-500">insights</span> that help your business grow. </h1>
              <p className=' text-[rgb(145,143,165)] mt-[30px] font-normal font-sans text-[16px]'> Discover the benefits of data <br></br> analytics and make better decisions <br></br> regarding revenue, customer <br></br> experience, and overall efficiency.</p>
            </div>

            <section className='text-center h-[230px] w-[100px] mt-[30px]   grid grid-rows-3 '>
              <div>
                <p className='text-white font-sans font-semibold text-[25px]'>10k+</p>
                <span className='text-[15px] text-[rgb(145,143,165)] '>compantes</span>

              </div>
              <div>
                <p className='text-white font-sans font-semibold text-[25px]'>314 </p>
                <span className='text-[15px] text-[rgb(145,143,165)]'>temolates</span>

              </div>
              <div>
                <p className='text-white font-sans font-semibold text-[25px]'>12m+ </p>
                <span className='text-[15px] text-[rgb(145,143,165)] '>quertes</span>

              </div>

            </section>



          </section>


        </div>


      ) : (
        <div className='overflow-hidden bg-black w-[900px] h-[350px] flex items-center rounded-sm justify-center  
      max-[910px]:flex-col max-[910px]:h-[600px]' >






          <section className='bg-[rgb(28,25,56)] w-[50%]  h-[100%]'>
            <div className='w-[300px] h-[200px] ml-[40px] mt-[50px]'>
              <h1 className='text-white font-sans font-semibold text-3xl'>Get <span className="text-purple-500">insights</span> that help your business grow. </h1>
              <p className='mr-[30px] text-[rgb(145,143,165)] mt-[30px] font-normal font-sans text-xs'> Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            </div>

            <section className=' h-[50px] w-[350px]  ml-[40px]  grid grid-cols-3 '>
              <div>
                <p className='text-white font-sans font-semibold'>10k+</p>
                <span className='text-[13px] text-[rgb(145,143,165)] '>compantes</span>

              </div>
              <div>
                <p className='text-white font-sans font-semibold'>314 </p>
                <span className='text-[13px] text-[rgb(145,143,165)] '>temolates</span>

              </div>
              <div>
                <p className='text-white font-sans font-semibold'>12m+ </p>
                <span className='text-[13px] text-[rgb(145,143,165)] '>quertes</span>

              </div>

            </section>



          </section>

          <section className=' w-[50%]  h-[100%] relative overflow-hidden'>
            <div className=' absolute h-[100%] w-[100%] bg-purple-800/50'>
            </div>
            <img src={image} alt="header" style={{ width: "100%", height: "100%" }} />


          </section>

        </div>
      )
      };
    </main >
  )
}

export default App
