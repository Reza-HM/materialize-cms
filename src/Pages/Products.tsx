import { FC } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ProductsSidebar from "../Components/ProductsSidebar";

const Products: FC = () => {
  return (
    <div>
      <BreadCrumb title="صفحه محصولات تجارت الکترونیکی" />
      <div className="mt-4 flex gap-8 p-8">
        <ProductsSidebar />
        <div className="flex-[3]">w</div>
      </div>
    </div>
  );
};

export default Products;
