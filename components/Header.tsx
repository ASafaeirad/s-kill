import { NavLink } from './NavLink';

const links = [
  { href: '/', title: '/asafaeirad' },
  { href: '/fullstacksjs', title: '/fullstacksjs' },
  { href: '/skillart', title: '/skillart' },
];

export const Header = () => {
  return (
    <header className="flex justify-between">
      {links.map(link => (
        <NavLink
          className="flex h-20 flex-1 items-center justify-center text-3xl xl:h-32 xl:text-4xl"
          href={link.href}
          key={link.href}
        >
          {link.title}
        </NavLink>
      ))}
    </header>
  );
};
