import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="h-[calc(100vh-70px)] md:min-h-[800px] pb-16 md:pb-0 md:h-[calc(95vh)] bg-gradient-to-b from-white to-[#E4EAF6] bg-[url('/heroImg.svg')] bg-no-repeat bg-bottom-right md:bg-[length:53%] bg-[length:100%] 
"
    >
      <div className="h-[calc(100vh-70px)] md:min-h-[800px] pb-16 md:pb-0 md:h-[calc(95vh)] bg-white/20 md:bg-transparent backdrop-blur-[0.5px]">
        <div className="mx-auto px-4 h-full max-w-7xl">
          <div className="h-full flex items-center">
            {/* Left text */}
            <div className="w-full md:w-1/2 space-y-5">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl lg:text-5xl xl:text-[3.4rem] font-bold text-[#504B63] leading-tight md:max-w-full max-w-[320px]">
                  A personal{" "}
                  <span className="text-light-green">AI Assistant Coach</span>{" "}
                  providing in-game stats and advice.
                </h1>
                {/* Imagine having a personal AI Assistant Coach providing in-game stats and advice. Welcome to StatCoachLive. */}
                <h2 className="text-base sm:text-lg lg:text-xl text-dark-gray font-medium">
                  <span className="font-bold">Welcome to StatCoachLive.</span>{" "}
                  Enhance Team Coordination with Tactical Analysis
                </h2>
                <button className="bg-light-green hover:bg-green-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold flex items-center gap-3 sm:gap-5 transition-colors duration-200 justify-between md:w-fit w-auto">
                  <span>Get Started Now</span>
                  <span className="bg-dark-green p-1 rounded-full">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </div>
              {/* <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl lg:text-5xl xl:text-[3.4rem] font-bold text-[#504B63] leading-tight md:max-w-full max-w-[320px]">
                Unlock <span className="text-light-green">Team Potential</span>{" "}
                Through Strategic Analysis
              </h1>
              <h2 className="text-base sm:text-lg lg:text-xl text-dark-gray font-medium">
                Enhance Team Coordination with Tactical Analysis
              </h2>
              <button className="bg-light-green hover:bg-green-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold flex items-center gap-3 sm:gap-5 transition-colors duration-200 justify-between md:w-fit w-auto">
                <span>Get Started Now</span>
                <span className="bg-dark-green p-1 rounded-full">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div> */}
              <div className="space-y-4">
                <p className="text-dark-gray text-sm sm:text-base">
                  Click To{" "}
                  <span className="text-green-600 font-semibold">Download</span>{" "}
                  Now
                </p>
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <button className="bg-black max-w-[250px] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-4 hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto">
                    <img
                      src="/pl.png"
                      alt="Play"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <div className="text-left">
                      <p className="text-xs sm:text-sm text-mid-gray">
                        GET IT ON
                      </p>
                      <h1 className="text-sm sm:text-base font-semibold">
                        Google Play
                      </h1>
                    </div>
                  </button>
                  <button className="bg-black max-w-[250px] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-4 hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto">
                    <img
                      src="/ap.png"
                      alt="App Store"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <div className="text-left">
                      <p className="text-xs sm:text-sm text-mid-gray">
                        Download on
                      </p>
                      <h1 className="text-sm sm:text-base font-semibold">
                        App Store
                      </h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right image section */}
            {/* <div className="flex-1 lg:w-1/2 h-full relative flex justify-center items-center overflow-hidden">
            <img
              src="/heroImg.svg"
              alt="Football player running with ball"
              className="relative z-10 w-full max-h-[50vh] sm:max-h-[60vh] lg:max-h-full object-contain"
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
