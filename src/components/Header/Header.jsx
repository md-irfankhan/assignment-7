import Banner from '../../assets/banner-main.png'
import Shadow from '../../assets/bg-shadow.png'

const Header = () => {
    
    return (
      
            <div
                className="max-w-[1250px] mx-auto  flex items-center justify-center h-full   w-full relative rounded-2xl  "
               
            >
                <div className='absolute  inset-0 bg-black rounded-2xl  bg-cover  bg-center' ></div>
                <div className="absolute inset-0 blur-sm bg-cover bg-center" style={{
                    backgroundImage:`url(${Shadow})`
                }} ></div>


                <div className="hero-content relative py-[60px] flex-col  text-neutral-content text-center">
                    <div>
                        <img src={Banner} alt="" />
                    </div>
                    <div className="md:max-w-[900px] items-center">
                        
                        <h1 className="mb-5 sora text-[40px] font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 sora opacity-[0.7]">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="border rounded-2xl p-[8px] border-[#E7FE29]"><button className='bg-[#E7FE29] py-[14px] sora font-bold rounded-2xl text-black px-[20px] inset-shadow-xs'>Claim Free Credit</button></button>
                    </div>
                </div>
            </div>
     
    );
};

export default Header;