import { FC, useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ProductsSidebar from "../Components/ProductsSidebar";
import ProductBox from "../Components/ProductBox";
import { FaRegHeart } from "react-icons/fa";

interface ProductRating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products`);
        const productsData: Product[] = await res.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <BreadCrumb title="صفحه محصولات تجارت الکترونیکی" />
      <div className="mt-4 flex gap-8 p-8">
        <ProductsSidebar />
        <div className="flex-[3]">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductBox {...product} key={product.id} />
            ))}
          </div>
          <div className="relative flex flex-wrap gap-8 bg-white text-slate-400 p-8 rounded-lg shadow-lg overflow-hidden mt-12 animate-fade-up">
            <div
              className="absolute top-4 left-[-10rem] text-white text-xl flex justify-center items-center text-center w-[25rem] h-[2em] -rotate-45"
              style={{
                background: "linear-gradient(-45deg, #8e24aa 0%, #ff6e40 100%)",
              }}
            >
              موجود
            </div>
            <div className="xs:flex-1">
              <img src="/img/remote.png" alt="" />
            </div>
            <div className="xs:flex-1">
              <div className="flex flex-col gap-6 p-4">
                <p>پاوربانک</p>
                <h2 className="text-black text-4xl">دسته بازی</h2>
                <div className="flex gap-4 items-center">
                  <div className="bg-blue-500 py-1 px-2 rounded-md text-white text-lg">
                    4.2 امتیاز
                  </div>
                  <p>
                    دسترسی: <span className="text-green-500">موجود</span>
                  </p>
                </div>
                <span className="block h-px w-full bg-slate-300"></span>
                <div className="flex items-center gap-4">
                  <FaRegHeart className="text-3xl font-bold" />
                  <p>لیست علاقه مندی</p>
                </div>
                <ul className="list-disc mr-8">
                  <li>لیست علاقه مندی</li>
                  <li>سازگار با تمام تلفن های هوشمند</li>
                  <li>طراحی قابل حمل و وزن سبک</li>
                  <li>نوع باتری : یون لیتیوم</li>
                </ul>
                <div className="flex items-center gap-4">
                  <p className="text-red-500 text-4xl font-bold">
                    ۷۹۰۰۰ تومان{" "}
                  </p>
                  <p className="text-4xl font-bold">۱۹۹۰۰۰ تومان</p>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="bg-blue-600 py-2 px-4 w-72 rounded-lg text-white shadow-xl shadow-zinc-500 hover:shadow-sm transition-all duration-300">
                    اضافه به سبد خرید{" "}
                  </button>
                  <button
                    className="py-2 px-4 w-80 rounded-lg text-white shadow-xl shadow-zinc-500 hover:shadow-sm transition-all duration-300"
                    style={{
                      background: "linear-gradient(-45deg, #8e24aa, #ff6e40)",
                    }}
                  >
                    هم اکنون خریداری کنید{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
