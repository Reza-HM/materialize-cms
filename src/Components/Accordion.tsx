import { FC, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

const Accordion: FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="">
      <div
        className="bg-white rounded-lg shadow-lg text-slate-500 text-2xl cursor-pointer flex items-center justify-between p-8"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p>سوال: آیا عضویت شامل فایل های اصلی PSD می شود؟</p>
        <FaAngleLeft
          className={`text-3xl transition-transform duration-300 ease-out ${
            isExpanded ? "-rotate-90" : ""
          }`}
        />
      </div>
      <div
        className={`bg-gray-100 text-gray-400 p-4 overflow-hidden transition-opacity transition-height duration-300 ease-in-out ${
          isExpanded ? "opacity-100 h-auto" : "opacity-0 h-0"
        }`}
        style={{ maxHeight: isExpanded ? "1000px" : "0" }}
      >
        اگر می‌خواهید از قسمتی از Lorem Ipsum استفاده کنید، باید مطمئن شوید که
        هیچ چیز شرم‌آوری در وسط متن پنهان نشده باشد. همه ژنراتورهای Lorem Ipsum
        در اینترنت تمایل دارند تا قطعات از پیش تعریف شده را در صورت لزوم تکرار
        کنند، و این اولین مولد واقعی در اینترنت است.
      </div>
    </div>
  );
};
export default Accordion;
