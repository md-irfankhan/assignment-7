import PropTypes from 'prop-types';
import Banner from '../../assets/banner-main.png'
import Shadow from '../../assets/bg-shadow.png'
import {  toast, Bounce } from 'react-toastify';
const Header = ({ setBalance, balance }) => {
    const handleCredit = () => {
        let newBalance = parseInt(balance) + 600000;
        setBalance(newBalance)

        toast.success(`Congratulation! You have credited ${600000} and balance ${newBalance}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    return (

        <div
            className="max-w-[1250px] mx-auto  flex items-center justify-center h-full   w-full relative rounded-2xl  "

        >
            <div className='absolute  inset-0 bg-black rounded-2xl  bg-cover  bg-center' ></div>
            <div className="absolute inset-0 blur-sm bg-cover bg-center" style={{
                backgroundImage: `url(${Shadow})`
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
                    <button className="border rounded-2xl p-[8px] border-[#E7FE29]"><button className='bg-[#E7FE29] py-[14px] sora font-bold rounded-2xl text-black px-[20px] inset-shadow-xs' onClick={handleCredit}>Claim Free Credit</button></button>
                </div>
            </div>

        
        </div>

    );
};
Header.propTypes={
    balance:PropTypes.string,
    setBalance:PropTypes.func
}

export default Header;