interface Props {
  title?: string;
  placeholder?: string;
  value?: string;
}

export const EditInfoBar = ({ title, placeholder, value }: Props) => {
  return (
    <div className="flex min-w-[392px] flex-col gap-2">
      <h3>{title}</h3>
      <input
        type="text"
        className="w-full rounded-md border border-gray-200 bg-gray-100/50 p-2"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
