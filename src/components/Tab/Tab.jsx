const Tab = () => {
    return (
        <div className="flex justify-between max-w-[1250px] mx-auto my-4">
            <div>
                <h2 className="text-[28px] sora font-bold">Available Players</h2>
            </div>
            <div className="join">
                <input className="join-item btn" type="radio" name="options" aria-label="Available" />
                <input className="join-item btn" type="radio" name="options" aria-label="Selected (0)" />
              
            </div>
        </div>
    );
};

export default Tab;