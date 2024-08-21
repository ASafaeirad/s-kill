interface Props {
  children: string;
  href: string;
}

export const Social = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className="group m-0 flex items-center pb-4 text-2xl font-bold uppercase transition-all"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        viewBox="0 0 25 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-0 transition-all group-hover:size-8"
      >
        <path d="M7.17731 17.0854L17.1773 7.08545" />
        <path d="M7.17731 7.08545H17.1773V17.0854" />
      </svg>

      <span>{children}</span>
    </a>
  );
};
