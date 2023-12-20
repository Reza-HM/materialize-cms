import React, { useState } from "react";

const PriceRangeSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [sliderValue, setSliderValue] = useState<number[]>([0, 100]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderValue = Number(event.target.value);
    const midPoint = (minPrice + maxPrice) / 2;

    if (newSliderValue < midPoint) {
      setMinPrice(newSliderValue);
      setSliderValue([newSliderValue, maxPrice]);
    } else {
      setMaxPrice(newSliderValue);
      setSliderValue([minPrice, newSliderValue]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="flex justify-between">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
      <div className="relative mt-4">
        <input
          type="range"
          min={0}
          max={1000}
          step={1}
          value={sliderValue[0]}
          onChange={handleSliderChange}
          className="w-full h-3 bg-gray-300 rounded-full appearance-none outline-none"
        />
        <div
          className="absolute top-0 left-0 bg-blue-500 w-6 h-6 rounded-full shadow-md transform -translate-x-3 -translate-y-1/2"
          style={{ left: `${(sliderValue[0] / 1000) * 100}%` }}
        />
        <div
          className="absolute top-0 bg-blue-500 w-6 h-6 rounded-full shadow-md transform -translate-x-3 -translate-y-1/2"
          style={{ left: `${(sliderValue[1] / 1000) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
