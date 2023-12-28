import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import FloatingLabelTextarea from "../Components/FloatingLabelTextArea";

const ContactUs = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center bg-gray-200 p-20 pb-0 animate-fade-up">
        <div className="flex-1 hidden lg:block pb-4">
          <div className="text-4xl flex items-center gap-4 text-zinc-700">
            <MdOutlineEmail />
            <h3>تماس با ما</h3>
          </div>
          <p className="mt-12 text-slate-500 text-2xl">
            به دنبال شریک طراحی هستید؟
          </p>
          <div className="flex items-center gap-8 text-slate-500 text-4xl mt-8">
            <FaBehance />
            <FaDribbble />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
        <div className="flex-1 w-full lg:flex-[2] bg-slate-300 flex items-center gap-8 p-20 text-zinc-700 rounded-t-2xl">
          <MdOutlineEmail className="text-7xl" />
          <h3 className="text-3xl">
            چند جمله در مورد پروژه خود برای ما بنویسید.
          </h3>
        </div>
      </div>

      <div className="p-20 pt-0 flex">
        <div className="flex-1 pt-8 hidden lg:block animate-fade-left">
          <h1 className="text-4xl text-zinc-800">قدم بعدی چه خواهد بود؟</h1>
          <h4 className="mt-8 text-zinc-600 text-3xl max-w-lg">
            شما یک قدم به ساخت محصول عالی خود نزدیکتر هستید
          </h4>
          <span className="block h-px max-w-lg bg-slate-300 mt-12"></span>
          <ul className="flex flex-col gap-12 mt-12">
            <li className="flex items-center gap-12 text-2xl text-slate-500">
              <FaLocationDot className="text-3xl" />
              <div className="flex flex-col gap-2">
                <p>ایران - تهران</p>
                <p>خیابان ولیعصر - کوچه 23 - پلاک 23</p>
              </div>
            </li>
            <li className="flex items-center gap-12 text-2xl text-slate-500">
              <FaPhone className="text-3xl" />
              <p>(+98) 991-564-0050</p>
            </li>
            <li className="flex items-center gap-12 text-2xl text-slate-500">
              <MdOutlineEmail className="text-3xl" />
              <p>info@domain.com</p>
            </li>
          </ul>
        </div>
        <div className="lg:flex-[2] flex-1 animate-fade-right bg-white p-20 rounded-b-2xl shadow-lg text-slate-500 ">
          <form action="" className="flex flex-wrap items-center gap-8">
            <FloatingLabelInput label="نام شما" type="text" />
            <FloatingLabelInput label="ایمیل شما" type="text" />
            <FloatingLabelInput label="شرکت" type="text" />
            <FloatingLabelInput label="بودجه برنامه" type="text" />
            <FloatingLabelTextarea label="توضیحات" />
            <button className="!bg-blue-500 !hover:bg-blue-600 text-white px-8 py-2 wave-element w-full rounded-md">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
