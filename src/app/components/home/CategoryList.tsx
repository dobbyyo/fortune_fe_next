import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categories = [
    {
      href: "/tarot",
      label: "타로",
      pngImgSrc: "/home/png/tarot.png",
      webpImgSrc: "/home/webp/tarot.webp",
    },
    {
      href: "/saju",
      label: "사주",
      pngImgSrc: "/home/png/saju.png",
      webpImgSrc: "/home/webp/saju.webp",
    },
    {
      href: "/dream",
      label: "해몽",
      pngImgSrc: "/home/png/dreaming.png",
      webpImgSrc: "/home/webp/dreaming.webp",
    },
    {
      href: "/naming",
      label: "작명",
      pngImgSrc: "/home/png/naming.png",
      webpImgSrc: "/home/webp/naming.webp",
    },
  ];

  return (
    <div className="mt-5 w-full max-w-[800px] mx-auto">
      <h2 className="font-bold flex justify-start text-[18px] sm:text-[25px]">
        전체 카테고리
      </h2>
      <div className="flex justify-center gap-4 mt-4">
        {categories.map((category) => (
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
