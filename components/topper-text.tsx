const TopperText: React.FC<{ head: string; note: string; }> = ({ head, note }) => {
    return (
        <div className="mt-6">
            <div className="flex flex-col justify-center items-center relative mb-2">
                <h2 className="relative inline-block text-prmry1 text-[1.5rem] text-center border-b-[1px] border-b-prmry1">
                    <span className="px-2">{head}</span>
                    <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] left-0 bg-prmry1"></div>
                    <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] right-0 bg-prmry1"></div>
                </h2>
            </div>
            <p className="text-center">{note}</p>
        </div>
    );
};


export default TopperText;