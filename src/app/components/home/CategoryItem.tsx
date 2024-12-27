import Link from "next/link";
import { ResponsiveImage } from "../img";

interface CategoryItemProps {
  href: string;
  label: string;
  pngImgSrc: string;
  webpImgSrc: string;
}

const CategoryItem = ({
  href,
  label,
  pngImgSrc,
  webpImgSrc,
}: CategoryItemProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] 
        bg-[#DECEFF] font-normal rounded-lg shadow-md hover:bg-purple-200 transition cursor-pointer"
    >
      <div className="relative w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]">
        <ResponsiveImage webpSrc={webpImgSrc} pngSrc={pngImgSrc} alt={label} />
      </div>
      <span className="sm:mt-1 text-[15px] sm:text-[20px] text-black font-normal">
        {label}
      </span>
    </Link>
  );
};

export default CategoryItem;
