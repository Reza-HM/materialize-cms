import React, { useState, ChangeEvent, TextareaHTMLAttributes } from "react";

interface FloatingLabelTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FloatingLabelTextarea: React.FC<FloatingLabelTextareaProps> = ({
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
    <div className="basis-full relative mt-4">
      <label
        className={`absolute right-2 text-slate-400 transition-all duration-300 ${
          isFocused || value
            ? "text-xl !text-blue-500 -top-6 right-2"
            : "top-2 right-2"
        }`}
      >
        {label}
      </label>
      <textarea
        {...rest}
        value={value}
        className="w-full py-2 px-8 min-h-[100px] max-h-[200px] bg-slate-200 border-b-2 focus:border-blue-500 transition-[border-color] duration-300 ease-in-out shadow-md rounded-lg resize-y text-right"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default FloatingLabelTextarea;
