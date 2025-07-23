
import LogoFooter from '../../assets/logo-footer.png'
import BgShadow from "../../assets/bg-shadow.png";
const Footer = () => {
    return (
        <footer className='bg-black mt-50'>
            <div className='max-w-[1200px] mx-auto p-5 relative bottom-40 border border-white bg-black/[0.04] backdrop-blur-2xl rounded-2xl'>
                <div className='bg-cover rounded flex flex-col gap-3 justify-center py-[88px] bg-white' style={{
                    backgroundImage:`url(${BgShadow})`
                }}>
                    <h2 className='text-[32px]   text-center  sora font-bold'>Subscribe to our Newsletter</h2>
                    <p className='font-medium opacity-[0.7] text-center'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex justify-center items-center gap-3'>
                        <input placeholder='Enter your email' className='sora py-[5px] border border-black/[0.3] rounded' type="text" />
                        <button className='py-2 px-5 sora font-semibold bg-gradient-to-r from-pink-500 from-2% to-orange-300   rounded inset-shadow-sm'>Submit</button>
                    </div>

                </div>
            </div>
            <div className='flex justify-center '>
                <img className='h-30 w-30' src={LogoFooter} alt="" />
            </div>
            <div className='lg:grid grid-cols-3 mt-20 gap-4 px-5'>
                <div>
                    <h2 className='text-white sora text-[18px] font-semibold my-3'>About Us</h2>
                    <p className='sora text-white opacity-[0.7]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h2 className='text-white sora text-[18px] font-semibold'>Quick Links</h2>
                    <ul className='sora text-white opacity-[0.7] my-3'>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About </li>
                        <li>Contact </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white sora text-[18px] font-semibold'>Subscribe</h2>
                    <p className='sora text-white opacity-[0.7] my-3'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='flex'>
                        <input placeholder='Type email' className='bg-white rounded text-black sora  py-2' type="text" />
                        <button className='py-3 px-5 sora font-semibold bg-gradient-to-r from-[#fce5e5] from-2% via-orange-300  to-pink-500  rounded-r-sm inset-shadow-sm'>Submit</button>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;