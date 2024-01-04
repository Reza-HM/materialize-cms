import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { FaPen } from "react-icons/fa";

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  __v: number;
}

const Users = () => {
  const [isUserFirstFilterMenuOpened, setIsUserFirstFilterMenuOpened] =
    useState<boolean>(false);
  const [isUserSecondFilterMenuOpened, setIsUserSecondFilterMenuOpened] =
    useState<boolean>(false);
  const [isUserThirdFilterMenuOpened, setIsUserThirdFilterMenuOpened] =
    useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/users`);
        const productsData: User[] = await res.json();
        setUsers(productsData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="mt-12 p-8">
      <div className="bg-white shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 md:gap-8 rounded-lg p-8 animate-fade-up">
        <div
          className="!text-lg sm:!text-xl md:!text-2xl cursor-pointer relative"
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
          className="!text-lg sm:!text-xl md:!text-2xl cursor-pointer relative"
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
          className="!text-lg sm:!text-xl md:!text-2xl cursor-pointer relative"
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
        <div className=" !bg-blue-800 !text-lg sm:!text-xl md:!text-2xl text-center text-white py-2 px-8 rounded-lg shadow-lg wave-element">
          نمایش
        </div>
      </div>
      <div className="p-4 mt-4 md:mt-8 bg-white shadow-lg rounded-lg animate-fade-up overflow-x-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between my-4 md:my-8">
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-slate-500">جستجو:</p>
            <input
              type="text"
              className="border-b-2 md:border-b-4 rounded-md border-slate-400 text-lg md:text-2xl pb-2 md:pb-3 text-slate-400 focus:border-blue-400 transition-[border-color] duration-300 ease-linear"
              placeholder="جستجوی کاربر..."
            />
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-slate-500">نمایش:</p>
            <select
              name=""
              id=""
              className="bg-slate-300 rounded-md border border-slate-500 cursor-pointer p-1 text-zinc-600 text-base md:text-lg"
            >
              <option value="10">10 </option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <FaAngleDown />
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full !min-w-[300px] rounded-2xl overflow-hidden">
            <thead className="text-lg sm:text-xl md:text-2xl">
              <tr className="text-center text-slate-500">
                <th className="p-4 md:p-5">شناسه</th>
                <th className="p-4 md:p-8">نام کاربری</th>
                <th className="p-4 md:p-8">نام</th>
                <th className="p-4 md:p-8">تلفن</th>
                <th className="p-4 md:p-8">محل زندگی</th>
                <th className="p-4 md:p-8">نقش</th>
                <th className="p-4 md:p-8">وضعیت</th>
                <th className="p-4 md:p-8">ویرایش</th>
              </tr>
            </thead>
            <tbody className="text-slate-500 text-lg sm:text-xl md:text-2xl">
              {users.map((user) => (
                <tr
                  className="text-center bg-gray-50 even:bg-white odd:bg-gray-100"
                  key={user.id}
                >
                  <td className="p-4 md:p-5 flex items-center justify-center gap-2 md:gap-4">
                    <FcPlus className="text-2xl md:text-3xl" />
                    331{" "}
                  </td>
                  <td className="p-4 md:p-5 text-blue-400"> {user.username}</td>
                  <td className="p-4 md:p-5">
                    {user.name.firstname} {user.name.lastname}
                  </td>
                  <td className="p-4 md:p-5">{user.phone}</td>
                  <td className="p-4 md:p-5">{user.address.city}</td>
                  <td className="p-4 md:p-5">کاربر</td>
                  <td className="p-4 md:p-5 bg-green-500/20 text-green-500 font-bold rounded-lg">
                    فعال{" "}
                  </td>
                  <td className="p-4 md:p-5 flex justify-center items-center mt-2 gap-2 md:gap-4">
                    <FaPen className="text-blue-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Users;
