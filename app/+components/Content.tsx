import type { ImageProps } from 'next/image';
import Image from 'next/image';

interface Props {
  ImageProps: Omit<ImageProps, 'alt'>;
  title: string;
  description: string;
}

export const Content = ({ ImageProps, description, title }: Props) => {
  return (
    <main className="flex flex-1 flex-row items-center gap-12">
      <Image
        className="size-[600px] mix-blend-multiply"
        {...ImageProps}
        alt="Deer sketch"
      />
      <div className="flex flex-col gap-6">
        <h1 className="font-title text-8xl">{title}</h1>
        <p className="text-5xl text-secondary">{description}</p>
      </div>
    </main>
  );
};
