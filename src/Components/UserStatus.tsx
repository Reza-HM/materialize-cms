import { FC, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const UserStatus: FC = () => {
  const [isFilterMenuOpened, setIsFilterMenuOpened] = useState(false);

  return (
    <div
      className="flex-1 cursor-pointer relative"
      onClick={() => setIsFilterMenuOpened(!isFilterMenuOpened)}
    >
      <p className="text-xl text-slate-400">تایید شده</p>
      <div className="flex items-center justify-between border-b-2 pb-4 text-slate-500 mt-4">
        <p className="text-2xl font-bold">هر چیزی</p>
        <FaAngleDown className="text-3xl" />
      </div>
      {isFilterMenuOpened && (
        <ul className="text-blue-400 bg-white rounded-md shadow-lg py-8 px-16 text-2xl absolute left-0 top-2 flex flex-col gap-8">
          <li
            onClick={() => setIsFilterMenuOpened(false)}
            className="cursor-pointer hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
          >
            پرداخت شده
          </li>
          <li
            onClick={() => setIsFilterMenuOpened(false)}
            className="cursor-pointer hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
          >
            پرداخت نشده
          </li>
          <li
            onClick={() => setIsFilterMenuOpened(false)}
            className="cursor-pointer hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
          >
            پرداخت جزئی
          </li>
        </ul>
      )}
    </div>
  );
};
export default UserStatus;
