import Image from "next/image";

interface ResponsiveImageProps {
  webpSrc: string;
  pngSrc: string;
  alt: string;
  className?: string;
  handleClick?: () => void;
}

const ResponsiveImage = ({
  webpSrc,
  pngSrc,
  alt,
  className,
  handleClick,
}: ResponsiveImageProps) => {
  return (
    <picture className="absolute inset-0">
      <source srcSet={webpSrc} type="image/webp" />
      <Image
        src={pngSrc}
        alt={alt}
        layout="fill"
        objectFit="contain"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
        className={className}
        onClick={handleClick}
        loading="lazy"
      />
    </picture>
  );
};

export default ResponsiveImage;
