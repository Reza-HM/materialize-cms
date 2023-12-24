import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { FaPen } from "react-icons/fa";

const Users = () => {
  const [isUserFirstFilterMenuOpened, setIsUserFirstFilterMenuOpened] =
    useState(false);
  const [isUserSecondFilterMenuOpened, setIsUserSecondFilterMenuOpened] =
    useState(false);
  const [isUserThirdFilterMenuOpened, setIsUserThirdFilterMenuOpened] =
    useState(false);

  return (
    <div className="mt-12 p-8">
      <div className="bg-white shadow-lg flex items-center gap-8 rounded-lg p-16 animate-fade-up">
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
      <div className="p-8 mt-8 bg-white shadow-lg rounded-lg animate-fade-up">
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center gap-4">
            <p className="text-slate-500">جستجو:</p>
            <input
              type="text"
              className="border-b-4 rounded-md border-slate-400 text-2xl pb-2 text-slate-400 focus:border-blue-400 transition-[border-color] duration-300 ease-linear"
              placeholder="جستجوی کاربر..."
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-slate-500">نمایش:</p>
            <select
              name=""
              id=""
              className="bg-slate-300 rounded-md border border-slate-500 cursor-pointer p-1 text-zinc-600"
            >
              <option value="10">10 </option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <FaAngleDown />
            </select>
          </div>
        </div>
        <table className=" w-full rounded-2xl overflow-hidden">
          <thead className="">
            <tr className="text-center text-slate-500">
              <th className="p-5">شناسه</th>
              <th className="p-8">نام کاربری</th>
              <th className="p-8">نام</th>
              <th className="p-8">آخرین فعالیت</th>
              <th className="p-8">تایید شده</th>
              <th className="p-8">نقش</th>
              <th className="p-8">وضعیت</th>
              <th className="p-8">ویرایش</th>
            </tr>
          </thead>
          <tbody className="text-slate-500">
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5 flex items-center justify-center gap-4">
                <FcPlus className="text-3xl" />
                331{" "}
              </td>
              <td className="p-5 text-blue-400"> madeson1907</td>
              <td className="p-5">Madeson Byers</td>
              <td className="p-5">19/07/2020</td>
              <td className="p-5">بله</td>
              <td className="">کاربر</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                فعال{" "}
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                <FaPen className="text-blue-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Users;
