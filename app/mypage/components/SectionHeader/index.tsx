interface Props {
  title: string;
  children?: React.ReactNode;
  description?: string;
}

const SectionHeader = ({ title, children, description }: Props) => {
  return (
    <div className="flex flex-col gap-6 *:text-primary">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-bold">{title}</h1>
        {children}
        {description && <p className="text-lg text-secondary">{description}</p>}
      </div>
      <div className="border-stroke-primary border-b" />
    </div>
  );
};

export default SectionHeader;
