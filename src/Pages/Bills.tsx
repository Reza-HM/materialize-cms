import { FC, useState } from "react";
import { BiCheckbox } from "react-icons/bi";
import { FaAngleDown, FaEye, FaPen, FaPlus } from "react-icons/fa";
import { MdOutlinePictureAsPdf } from "react-icons/md";

const Bills: FC = () => {
  const [isFilterMenuOpened, setIsFilterMenuOpened] = useState<boolean>(false);

  return (
    <div className="m-12 p-8">
      <div className="flex items-center gap-4 animate-fade-up">
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
        <div className="flex-1 !rounded-full shadow-lg bg-blue-500 !flex justify-center items-center gap-4 p-4 text-white wave-element text-2xl">
          خروجی به PDF <MdOutlinePictureAsPdf />
        </div>
        <div className="flex-1 !rounded-full shadow-lg bg-blue-500 !flex justify-center items-center gap-4 p-4 text-white wave-element text-2xl">
          ایجاد صورتحساب <FaPlus />
        </div>
      </div>
      <div className="mt-8 p-8 bg-white animate-fade-up">
        <table className=" w-full rounded-2xl overflow-hidden">
          <thead className="">
            <tr className="text-center text-slate-500">
              <th className="p-5">
                <BiCheckbox className="text-4xl" />
              </th>
              <th className="p-8">صورتحساب#</th>
              <th className="p-8">میزان</th>
              <th className="p-8">تاریخ</th>
              <th className="p-8">مشتری</th>
              <th className="p-8">برچسب‌ها</th>
              <th className="p-8">وضعیت</th>
              <th className="p-8">عمل</th>
            </tr>
          </thead>
          <tbody className="text-slate-500">
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className="p-5"> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
            <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
              <td className="p-5">
                <BiCheckbox className="text-4xl" />
              </td>
              <td className="p-5 text-blue-400">INV-00123</td>
              <td className="p-5">$15,900</td>
              <td className="p-5">23-07-19</td>
              <td className="p-5">09103928383</td>
              <td className=""> Toyota Motor</td>
              <td className="p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                پرداخت شده
              </td>
              <td className="p-5 flex justify-center items-center mt-2 gap-4">
                {" "}
                <FaEye className="text-3xl font-bold" />{" "}
                <FaPen className="text-3xl font-bold" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Bills;
