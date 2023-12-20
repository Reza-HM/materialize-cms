import { useState, useRef, useEffect } from "react";

const PriceRangeSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth);
    }
  }, []);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = parseInt(event.target.value);
    if (newMinPrice < 1001) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(event.target.value);
    if (newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
      if (minPrice > newMaxPrice) {
        setMinPrice(newMaxPrice);
      }
    } else {
      setMaxPrice(minPrice);
    }
  };

  const handleSliderMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleSliderMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragging && sliderRef.current) {
      const offsetX =
        event.pageX - sliderRef.current.getBoundingClientRect().left;
      let newMinPrice = Math.floor((offsetX / sliderWidth) * 1000);

      if (newMinPrice < 0) {
        newMinPrice = 0;
      } else if (newMinPrice > maxPrice) {
        newMinPrice = maxPrice;
      }

      setMinPrice(newMinPrice);
    }
  };

  const handleSliderMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="flex items-center mb-4">
        <label htmlFor="minPrice" className="mr-2">
          Min Price:
        </label>
        <input
          type="number"
          id="minPrice"
          className="border rounded-md py-1 px-2 w-40 mr-4 bg-slate-100 shadow-md"
          value={minPrice}
          onChange={handleMinChange}
        />
      </div>
      <div
        className="relative h-6 bg-gray-200 rounded-md cursor-pointer"
        ref={sliderRef}
        onMouseDown={handleSliderMouseDown}
        onMouseMove={handleSliderMouseMove}
        onMouseUp={handleSliderMouseUp}
        onMouseLeave={handleSliderMouseUp}
      >
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-md"
          style={{ width: `${(minPrice / 1000) * 100}%` }}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          className="absolute h-full opacity-0 w-full"
          style={{ zIndex: 2, cursor: "pointer" }}
          onChange={handleMinChange}
        />
      </div>
      <div className="flex items-center mt-4 mb-4">
        <label htmlFor="maxPrice" className="mr-2">
          Max Price:
        </label>
        <input
          type="number"
          id="maxPrice"
          className="border rounded-md py-1 px-2 w-40 mr-4 bg-slate-100 shadow-md"
          value={maxPrice}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
