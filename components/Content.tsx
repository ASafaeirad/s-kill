import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Props {
  ImageProps: StaticImageData;
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}

export const Content = ({
  ImageProps,
  description,
  title,
  children,
}: Props) => {
  return (
    <main className="flex flex-1 flex-col items-center gap-12 px-10 py-4 xl:flex-row">
      <Image
        className="aspect-auto w-[clamp(100px,600px,100%)] mix-blend-multiply"
        blurDataURL={ImageProps.blurDataURL}
        width={ImageProps.width}
        height={ImageProps.height}
        src={ImageProps.src}
        alt="Deer sketch"
      />
      <div className="flex flex-col gap-6">
        <h1 className="text-center font-title text-6xl sm:text-7xl md:text-8xl xl:text-start">
          {title}
        </h1>
        <p className="text-center text-3xl leading-snug xl:text-start xl:text-4xl">
          {description}
        </p>
        {children}
      </div>
    </main>
  );
};
