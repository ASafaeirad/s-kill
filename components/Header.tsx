import { NavLink } from './NavLink';

const links = [
  { href: '/', title: '/asafaeirad' },
  { href: '/skillpod', title: '/skillpod' },
  { href: '/skillart', title: '/skillart' },
  { href: '/fullstacksjs', title: '/fullstacksjs' },
  { href: '/fem', title: '/fem' },
];

export const Header = () => {
  return (
    <header className="flex justify-between">
      {links.map(link => (
        <NavLink
          className="flex h-32 flex-1 items-center justify-center text-4xl"
          href={link.href}
          key={link.href}
        >
          {link.title}
        </NavLink>
      ))}
    </header>
  );
};
