import { homeCategories } from "@/constants";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <div className="mt-5 w-full max-w-[800px] mx-auto">
      <h2 className="font-bold flex justify-start text-[18px] sm:text-[25px]">
        전체 카테고리
      </h2>
      <div className="flex justify-center gap-4 mt-4">
        {homeCategories.map((category) => (
          <CategoryItem
            key={category.href}
            href={category.href}
            label={category.label}
            pngImgSrc={category.pngImgSrc}
            webpImgSrc={category.webpImgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
