export default function PosterBottom() {
  return (
    <div className="bg-[#EFF2F9] flex items-center justify-center">
      <div className="max-w-7xl w-full px-3 md:px-0 flex flex-col items-center  justify-center py-14 md:py-24">
        <h1 className="text-[#6F6888] text-3xl md:text-5xl text-center font-bold mb-5">
          <span className="text-light-green">SAM,</span> Your AI Assistant Coach
        </h1>
        <p className="text-[#504B63] text-lg md:text-2xl text-center">
          Supporting You On GameDay– become the coach you’ve always wanted to
          be.
        </p>
        <button className="bg-[#1F5E06] text-[#E9EAEC] md:px-5 px-3 md:py-3 py-1.5 rounded-full text-base md:text-lg mt-5 hover:cursor-pointer">
          Get Started Now
        </button>
      </div>
    </div>
  );
}
