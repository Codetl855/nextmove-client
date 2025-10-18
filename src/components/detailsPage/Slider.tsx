import React, { useState, useMemo } from "react";
import Image from "@/components/ui/Images/Image";

interface SliderProps {
  property?: any; // define more specific type if available
}

const Slider: React.FC<SliderProps> = ({ property }) => {
  if (!property) {
    return <div>Loading property details...</div>;
  }

  // ✅ Safely map media URLs from property
  const IMAGES = useMemo(
    () => (property?.media ? property.media.map((img: any) => img.media_url) : []),
    [property]
  );

  const [index, setIndex] = useState(0);
  const total = IMAGES.length;

  // ✅ Protect against empty arrays
  if (!total) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  const prev = () => setIndex((s) => (s - 1 + total) % total);
  const next = () => setIndex((s) => (s + 1) % total);

  return (
    <div className="overflow-hidden">
      <div className="relative">
        {/* Main image */}
        <div className="relative w-full h-96 sm:h-[520px] bg-gray-100">
          <img
            src={IMAGES[index]}
            alt={`slide-${index}`}
            className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          />

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm p-3 flex items-center justify-center rounded-full shadow-md hover:scale-105 transition-transform"
          >
            <span className="icon-[ep--arrow-left-bold] text-white text-xl"></span>
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="next"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 flex items-center justify-center backdrop-blur-sm p-3 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            <span className="icon-[ep--arrow-right-bold] text-white text-xl"></span>
          </button>

          {/* Slide counter */}
          <div className="absolute right-4 top-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow">
            {index + 1}/{total}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="py-4">
          <div className="grid grid-cols-6 gap-3">
            {IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-lg overflow-hidden border-none p-0 ${
                  i === index ? "ring-2 ring-aztec" : "ring-0"
                } focus:outline-none`}
              >
                <Image
                  src={src}
                  alt={`thumb-${i}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
