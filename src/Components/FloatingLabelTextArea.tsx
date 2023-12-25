import React, { useState, ChangeEvent } from "react";

interface FloatingLabelInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const FloatingLabelTextarea: React.FC<FloatingLabelInputProps> = ({
  label,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="basis-full relative mt-4">
      <label
        className={`absolute right-2 text-slate-400 transition-all duration-300 ${
          isFocused || inputValue
            ? "text-xl !text-blue-500 -top-6 right-2"
            : "top-2 right-2"
        }`}
      >
        {label}
      </label>
      <textarea
        {...rest}
        className="w-full py-2 px-8 min-h-[100px] max-h-[200px] bg-slate-200 border-b-2 focus:border-blue-500 transition-[border-color] duration-300 ease-in-out shadow-md rounded-lg resize-y text-right"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default FloatingLabelTextarea;
