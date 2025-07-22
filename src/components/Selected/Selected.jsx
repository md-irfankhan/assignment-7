
import { MdDeleteForever } from 'react-icons/md';
const Selected = ({ selected }) => {
    const {player_image,player_name,which_handed}=selected
    return (

        <li className="list-row border border-black/[0.1] mt-5 rounded items-center">

            <div><img className="size-10 h-[80px] w-[80px] rounded-box" src={player_image} /></div>
            <div className="list-col-grow ">
                <div className='sora font-semibold text-[24px]'>{player_name}</div>
                <div className=" sora font-semibold opacity-60">{which_handed}</div>
            </div>
            <button className="btn btn-square btn-ghost">
                <MdDeleteForever className='h-90 w-90 text-red-400'></MdDeleteForever>
            </button>
        </li>



    );
};

export default Selected;