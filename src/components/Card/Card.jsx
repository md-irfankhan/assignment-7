
import PropTypes from 'prop-types';
import { FaFlag } from 'react-icons/fa';
import {  toast, Bounce } from 'react-toastify';
const Card = ({ player, selected, setSelected, balance, setBalance }) => {
    const { player_image, player_name, player_country, player_status, rating, which_handed, price } = player;
    const handleChoose = (player) => {
        if (!selected.includes(player) && balance >= player.price) {
            setSelected([player, ...selected])
            let newBalance = parseInt(balance) - (player.price);
            setBalance(newBalance);
            toast('You Seleected Player')
        }
        if (balance <= player.price && !selected.includes(player)) {
            toast.error('Insufficient Balance!', {
                position: "top-center",
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
        if (selected.includes(player)) {
            toast.info('You already selected this player!', {
                position: "top-center",
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
    }
    return (
        

            <div className="card bg-base-100 w-full lg:w-96 shadow-sm">
                <figure className="px-5 pt-5">
                    <img
                        src={player_image}
                        alt="Shoes"
                        className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title sora">{player_name}</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1 items-center sora'>
                            <FaFlag></FaFlag>
                            <span>{player_country}</span>
                        </div>
                        <div className=''>
                            <button className='bg-black/[0.05] sora py-1 rounded px-3'>{player_status}</button>
                        </div>
                    </div>
                    <hr className='my-2 opacity-5' />
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='sora font-bold'>Rating</p>

                        </div>
                        <div>
                            <p className='sora'>{rating}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='sora font-bold'>Handed</p>

                        </div>
                        <div>
                            <p className='sora'>{which_handed}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='sora font-bold'>Price: <span className='sora font-normal'>{price} BDT</span></p>

                        </div>
                        <div>
                            <button className='hover:bg-blue-300 sora py-2 px-3 border rounded border-black/[0.1]' onClick={() => handleChoose(player)}>Choose Player</button>
                        </div>
                    </div>
                </div>
                
            </div>
        
    );
};
Card.propTypes={
    player:PropTypes.object,
    selected:PropTypes.array,
    setSelected:PropTypes.func,
    balance:PropTypes.string,
    setBalance:PropTypes.func
}

export default Card;