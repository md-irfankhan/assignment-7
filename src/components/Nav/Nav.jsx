import { TbCoin } from 'react-icons/tb';
import Logo from '../../assets/logo.png'
import Header from '../Header/Header';
const Nav = ({balance}) => {
    return (
        <div className='max-w-[1250px] mx-auto'>
            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <a className=" text-xl"><img className='h-[50px]' src={Logo} alt="" /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li className="sora opacity-[0.7]"><a>Home</a></li>
                        {/* <li className="sora opacity-[0.7]"><a>Fixture</a></li> */}
                        {/* <li className="sora opacity-[0.7]"><a>Teams</a></li> */}
                        {/* <li className="sora opacity-[0.7]"><a>Schedules</a></li> */}
                        <li className="sora opacity-[0.7] "><a className='flex gap-2 rounded-2xl border  border-black/[0.1] py-[10px] px-[20px] items-center'>

                            <span className='sora font-semibold'>{balance} Coin</span>
                            <TbCoin className='h-[24px] w-[24px]'></TbCoin>

                        </a></li>


                    </ul>
                </div>
            </div>
            {/* <Header></Header> */}
        </div>

        
    );
};

export default Nav;