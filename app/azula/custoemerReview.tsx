export default function CustomerReview() {
  return (
    <div className="bg-green-700 py-8 mx-8 rounded-2xl">
      <div className="flex flex-col jusitfy-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="flex items-start justify-center w-4 h-7 rounded-t-full rounded-b-full border-[2px] border-yellow-500">
            <div className="w-[2px] h-3 mt-1 bg-yellow-500"></div>
          </div>
          <div className="flex items-center jusitfy-center flex-col gap-[2px]">
            <span className="w-[2px] h-1 bg-white"></span>
            <span className="w-[2px] h-1 bg-white"></span>
            <span className="w-[2px] h-1 bg-white"></span>
            <span className="w-[2px] h-1bg-white"></span>
            <span className="w-[2px] h-1 bg-white"></span>
            <span className="w-[2px] h-1 bg-white"></span>
            <span className="w-[2px] h-1 bbg-white"></span>
            <span className="w-2 h-2 bg-white rounded-full -mt-[1px]"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative mb-8 mt-6">
        <h2 className="relative inline-block text-white sm:text-xl md:text-2xl font-bold text-center border-b-[1px] border-b-white">
          <span className="px-4">What people Using Azula say about Azula</span>
          <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] left-0 bg-white"></div>
          <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] right-0 bg-white"></div>
        </h2>
      </div>
    </div>
  );
}
