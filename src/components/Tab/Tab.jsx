import PropTypes from 'prop-types';
const Tab = ({tab,setTab,slength,plength}) => {
    const AreaLabel=`Selected(${slength})`
    const Label =`Selected Player(${plength}/${slength})`
    return (
        
        <div className="flex items-center justify-between max-w-[1250px] mx-auto my-4">
            <div>
                <h2 className="lg:text-[28px]  sora font-bold">{tab?"Available Player":Label     }</h2>
            </div>
            <div className="join text-black sora">
                <input onClick={()=>setTab(true)}  className={tab?"join-item btn bg-amber-200 text-black":"join-item btn"} type="radio" name="options" aria-label="Available" />
                <input onClick={()=>setTab(false)} className={!tab?"join-item btn bg-amber-200 text-black":"join-item btn"} type="radio" name="options" aria-label={AreaLabel} />
              
            </div>
        </div>
    );
};
Tab.propTypes={
    tab:PropTypes.bool,
    setTab:PropTypes.func,
    slength:PropTypes.string ,
    plength:PropTypes.string
}
export default Tab;