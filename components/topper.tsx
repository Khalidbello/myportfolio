const Topper = () => {
    return (
        <div className="flex flex-col jusitfy-center">
            <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="flex items-start justify-center w-4 h-7 rounded-t-full rounded-b-full border-[2px] border-prmry1">
                    <div className="w-[2px] h-3 mt-1 bg-prmry1"></div>
                </div>
                <div className="flex items-center jusitfy-center flex-col gap-[2px]">
                    <span className="w-[2px] h-1 bg-white"></span>
                    <span className="w-[2px] h-1 bg-white"></span>
                    <span className="w-[2px] h-1 bg-white"></span>
                    <span className="w-[2px] h-1 bg-white"></span>
                    <span className="w-[2px] h-1 bg-white"></span>
                    <span className="w-[2px] h-1 bg-white"></span>
                    <span className="w-[2px] h-1 bg-white"></span>
                    <span className="w-2 h-2 bg-white rounded-full -mt-[1px]"></span>
                </div>
            </div>
        </div>
    );
};


export default Topper;