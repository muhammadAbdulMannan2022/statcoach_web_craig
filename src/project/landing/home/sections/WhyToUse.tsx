//@ts-nocheck
"use client";

import { useEffect, useRef } from "react";

export default function WhyUseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Intersection Observer for lazy loading (fallback for older browsers)
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    // If native lazy loading is supported, skip
    if ("loading" in HTMLIFrameElement.prototype) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.load(); // Trigger load when in viewport
            observer.unobserve(video);
          }
        });
      },
      { rootMargin: "200px" } // Load 200px before viewport
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4 sm:py-20 bg-gradient-to-t from-[#F4F6FB] via-white to-[#F4F6FB]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
          {/* Left: Text Content (Mobile: Top) */}
          <div className="lg:w-1/2 flex flex-col  text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm font-semibold text-dark-gray/70 mb-2 sm:mb-3 uppercase tracking-wider">
                Trusted by Coaches
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-gray mb-4 sm:mb-6 leading-tight">
                Why Use <span className="text-light-green">StatCoachLive</span>?
                <br className="hidden sm:block lg:hidden" />
                <span className="text-dark-gray"> – hear from the experts</span>
              </h1>
              <p className="text-base sm:text-lg text-dark-gray/80 leading-relaxed">
                StatCoachLive was built to support Coaches at all levels and
                this is why you should subscribe
              </p>
            </div>
          </div>

          {/* Right: Video (Mobile: Bottom) */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="w-full max-w-2xl mx-auto">
              <video
                ref={videoRef}
                className="w-full rounded-xl shadow-xl aspect-video"
                controls
                preload="none"
                loading="lazy"
                poster="/video-poster.png" // Optional: add a thumbnail
                playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
                <track
                  src="/captions.vtt"
                  kind="captions"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
