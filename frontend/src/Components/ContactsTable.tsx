import { FC } from "react";
import { FaRegStar, FaTrash } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";

const ContactsTable: FC = () => {
  return (
    <div className="max-w-[250px] md:max-w-none">
      <table className="w-full rounded-2xl overflow-hidden">
        <thead className="w-full">
          <tr className="text-center text-slate-500 w-full">
            <th className="p-5">
              <MdCheckBox className="text-3xl" />
            </th>
            <th className="p-8">کاربر</th>
            <th className="p-8">نام و نام خانوادگی</th>
            <th className="p-8">ایمیل</th>
            <th className="p-8">موبایل</th>
            <th className="p-8">علایق</th>
            <th className="p-8">حذف</th>
          </tr>
        </thead>
        <tbody className="text-slate-500 w-full">
          <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
            <td className="p-5">
              <MdCheckBox className="text-3xl text-slate-500" />
            </td>
            <td className="p-5">
              <img
                src="/img/2.jpg"
                className="w-16 h-16 rounded-[50%] mx-auto"
              />{" "}
            </td>
            <td className="p-5">رضا حمزه ای</td>
            <td className="p-5">RezaHM@gmail.com</td>
            <td className="p-5">09103928383</td>
            <td className="">
              <FaRegStar className="mx-auto" />
            </td>
            <td className="p-5 flex justify-center mt-4 text-2xl">
              {" "}
              <FaTrash />{" "}
            </td>
          </tr>
          <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
            <td className="p-5">
              <MdCheckBox className="text-3xl " />
            </td>
            <td className="p-5">
              <img
                src="/img/2.jpg"
                className="w-16 h-16 rounded-[50%] mx-auto"
              />{" "}
            </td>
            <td className="p-5">رضا حمزه ای</td>
            <td className="p-5">RezaHM@gmail.com</td>
            <td className="p-5">09103928383</td>
            <td className="p-5">
              <FaRegStar className="mx-auto" />
            </td>
            <td className="p-5">
              {" "}
              <FaTrash className="mx-auto" />{" "}
            </td>
          </tr>
          <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
            <td className="p-5">
              <MdCheckBox className="text-3xl" />
            </td>
            <td className="p-5">
              <img
                src="/img/2.jpg"
                className="w-16 h-16 rounded-[50%] mx-auto"
              />{" "}
            </td>
            <td className="p-5">رضا حمزه ای</td>
            <td className="p-5">RezaHM@gmail.com</td>
            <td className="p-5">09103928383</td>
            <td className="p-5">
              <FaRegStar className="mx-auto" />
            </td>
            <td className="p-5 flex justify-center mt-4 text-2xl">
              {" "}
              <FaTrash />{" "}
            </td>
          </tr>
          <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
            <td className="p-5">
              <MdCheckBox className="text-3xl" />
            </td>
            <td className="p-5">
              <img
                src="/img/2.jpg"
                className="w-16 h-16 rounded-[50%] mx-auto"
              />{" "}
            </td>
            <td className="p-5">رضا حمزه ای</td>
            <td className="p-5">RezaHM@gmail.com</td>
            <td className="p-5">09103928383</td>
            <td className="p-5">
              <FaRegStar className="mx-auto" />
            </td>
            <td className="p-5 flex justify-center mt-4 text-2xl">
              {" "}
              <FaTrash />{" "}
            </td>
          </tr>
          <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
            <td className="p-5">
              <MdCheckBox className="text-3xl " />
            </td>
            <td className="p-5">
              <img
                src="/img/2.jpg"
                className="w-16 h-16 rounded-[50%] mx-auto"
              />{" "}
            </td>
            <td className="p-5">رضا حمزه ای</td>
            <td className="p-5">RezaHM@gmail.com</td>
            <td className="p-5">09103928383</td>
            <td className="p-5">
              <FaRegStar className="mx-auto" />
            </td>
            <td className="p-5 flex justify-center mt-4 text-2xl">
              {" "}
              <FaTrash />{" "}
            </td>
          </tr>
          <tr className="text-center bg-gray-50 even:bg-white odd:bg-gray-100">
            <td className="p-5">
              <MdCheckBox className="text-3xl " />
            </td>
            <td className="p-5">
              <img
                src="/img/2.jpg"
                className="w-16 h-16 rounded-[50%] mx-auto"
              />{" "}
            </td>
            <td className="p-5">رضا حمزه ای</td>
            <td className="p-5">RezaHM@gmail.com</td>
            <td className="p-5">09103928383</td>
            <td className="p-5">
              <FaRegStar className="mx-auto" />
            </td>
            <td className="p-5">
              {" "}
              <FaTrash className="mx-auto" />{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ContactsTable;
