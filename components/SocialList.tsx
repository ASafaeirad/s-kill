type Props = React.ComponentProps<'div'>;

export const SocialList = (props: Props) => {
  return (
    <div
      className="flex flex-row justify-center gap-6 xl:justify-start"
      {...props}
    />
  );
};
