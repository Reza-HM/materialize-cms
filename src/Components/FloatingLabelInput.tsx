import React, { useState, ChangeEvent, InputHTMLAttributes } from "react";

interface FloatingLabelInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  value,
  onChange,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="flex-grow w-full relative mt-4">
      <label
        className={`absolute right-2 text-slate-400 transition-all duration-300 ${
          isFocused || value
            ? "text-xl !text-blue-500 -top-6 right-2"
            : "top-2 right-2"
        }`}
      >
        {label}
      </label>
      <input
        {...rest}
        value={value}
        className="w-full py-2 px-8 bg-slate-200 border-b-2 focus:border-blue-500 transition-[border-color] duration-300 ease-in-out shadow-md rounded-lg text-right"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default FloatingLabelInput;
