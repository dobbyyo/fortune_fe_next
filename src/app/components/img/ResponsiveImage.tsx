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
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <Image
        src={pngSrc}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className={className}
        onClick={handleClick}
        loading="lazy"
      />
    </picture>
  );
};

export default ResponsiveImage;
