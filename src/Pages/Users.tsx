import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Users = () => {
  const [isUserFirstFilterMenuOpened, setIsUserFirstFilterMenuOpened] =
    useState(false);
  const [isUserSecondFilterMenuOpened, setIsUserSecondFilterMenuOpened] =
    useState(false);
  const [isUserThirdFilterMenuOpened, setIsUserThirdFilterMenuOpened] =
    useState(false);

  return (
    <div className="mt-12 p-8">
      <div className="bg-white shadow-lg flex items-center gap-8 rounded-lg p-16">
        <div
          className="flex-1 cursor-pointer relative"
          onClick={() => {
            setIsUserFirstFilterMenuOpened(!isUserFirstFilterMenuOpened);
            setIsUserSecondFilterMenuOpened(false);
            setIsUserThirdFilterMenuOpened(false);
          }}
        >
          <p className="text-xl text-slate-400">تایید شده</p>
          <div className="flex items-center justify-between border-b-2 pb-4 text-slate-500 mt-4">
            <p className="text-2xl font-bold">هر چیزی</p>
            <FaAngleDown className="text-3xl" />
          </div>
          {isUserFirstFilterMenuOpened && (
            <ul className="text-blue-400 bg-gray-100 rounded-md shadow-lg p-8 w-[280px] text-2xl absolute left-0 top-2 flex flex-col gap-8">
              <li
                onClick={() => setIsUserFirstFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                هر چیزی{" "}
              </li>
              <li
                onClick={() => setIsUserFirstFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                بله{" "}
              </li>
              <li
                onClick={() => setIsUserFirstFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                خیر{" "}
              </li>
            </ul>
          )}
        </div>
        <div
          className="flex-1 cursor-pointer relative"
          onClick={() => {
            setIsUserSecondFilterMenuOpened(!isUserSecondFilterMenuOpened);
            setIsUserFirstFilterMenuOpened(false);
            setIsUserThirdFilterMenuOpened(false);
          }}
        >
          <p className="text-xl text-slate-400">نقش</p>
          <div className="flex items-center justify-between border-b-2 pb-4 text-slate-500 mt-4">
            <p className="text-2xl font-bold">هر چیزی</p>
            <FaAngleDown className="text-3xl" />
          </div>
          {isUserSecondFilterMenuOpened && (
            <ul className="text-blue-400 rounded-md bg-gray-100 shadow-lg p-8 w-[280px] text-2xl absolute left-0 top-2 flex flex-col gap-8">
              <li
                onClick={() => setIsUserSecondFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                هر چیزی{" "}
              </li>
              <li
                onClick={() => setIsUserSecondFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                کاربر{" "}
              </li>
              <li
                onClick={() => setIsUserSecondFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                کارکن{" "}
              </li>
            </ul>
          )}
        </div>
        <div
          className="flex-1 cursor-pointer relative"
          onClick={() => {
            setIsUserThirdFilterMenuOpened(!isUserThirdFilterMenuOpened);
            setIsUserSecondFilterMenuOpened(false);
            setIsUserFirstFilterMenuOpened(false);
          }}
        >
          <p className="text-xl text-slate-400">Status</p>
          <div className="flex items-center justify-between border-b-2 pb-4 text-slate-500 mt-4">
            <p className="text-2xl font-bold">هر چیزی</p>
            <FaAngleDown className="text-3xl" />
          </div>
          {isUserThirdFilterMenuOpened && (
            <ul className="text-blue-400 rounded-md bg-gray-100 shadow-lg p-8 w-[280px] text-2xl absolute left-0 top-2 flex flex-col  gap-8">
              <li
                onClick={() => setIsUserThirdFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                هر چیزی{" "}
              </li>
              <li
                onClick={() => setIsUserThirdFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                فعال{" "}
              </li>
              <li
                onClick={() => setIsUserThirdFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                غیرفعال{" "}
              </li>
              <li
                onClick={() => setIsUserThirdFilterMenuOpened(false)}
                className="cursor-pointer text-start hover:text-2xl hover:font-bold transition-all duration-200 ease-linear"
              >
                مسدود{" "}
              </li>
            </ul>
          )}
        </div>
        <div className="flex-1 !bg-blue-800 text-center text-white py-2 px-8 rounded-lg shadow-lg wave-element">
          نمایش
        </div>
      </div>
    </div>
  );
};
export default Users;
