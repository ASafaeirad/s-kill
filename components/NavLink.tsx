'use client';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from './cn';

type Props = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

export const NavLink = (props: Props) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(props.className, {
        'text-primary': props.href === pathname,
      })}
    />
  );
};
