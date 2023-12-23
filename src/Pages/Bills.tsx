import { FC, useState } from "react";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import { MdOutlinePictureAsPdf } from "react-icons/md";

const Bills: FC = () => {
  const [isFilterMenuOpened, setIsFilterMenuOpened] = useState<boolean>(false);

  return (
    <div className="m-12 p-8">
      <div className="flex items-center gap-4">
        <div className="flex-[4] !rounded-full relative shadow-lg p-6 bg-white border border-zinc-700">
          <div
            className="!absolute !left-2 !top-2 !rounded-full !flex !items-center !gap-4 !p-4 !bg-purple-700 !text-white !cursor-pointer wave-element "
            onClick={() => setIsFilterMenuOpened(!isFilterMenuOpened)}
          >
            فیلتر صورتحساب
            <FaAngleDown />
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
          <input
            type="text"
            placeholder="Search Invoice"
            className="w-full bg-unset h-full text-slate-500"
          />
        </div>
        <div className="flex-1 !rounded-full shadow-lg bg-blue-500 !flex items-center gap-4 p-4 text-white wave-element text-2xl">
          خروجی به PDF <MdOutlinePictureAsPdf />
        </div>
        <div className="flex-1 !rounded-full shadow-lg bg-blue-500 !flex items-center gap-4 p-4 text-white wave-element text-2xl">
          ایجاد صورتحساب <FaPlus />
        </div>
      </div>
    </div>
  );
};
export default Bills;
