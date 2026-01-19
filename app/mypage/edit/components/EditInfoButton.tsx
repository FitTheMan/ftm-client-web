import Button from "@/components/ui/Button";

interface Props {
  category: string;
  isSelected: Record<string, boolean>;
  onSelect: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export const EditInfoButton = ({ category, isSelected, onSelect }: Props) => {
  const handleSelect = () => {
    onSelect((prev) => {
      const newSelected = { ...prev, [category]: !prev[category] };
      return newSelected;
    });
  };

  return (
    <div className="flex min-w-[392px] flex-col gap-2">
      <div className="relative flex items-center gap-2">
        <Button
          variant="input"
          size="md"
          className="text-left"
          onClick={handleSelect}
        >
          {category}
        </Button>
        <div
          className={`absolute right-3 size-4 rounded-full ${
            isSelected[category] ? "bg-blue-500" : "bg-gray-200"
          }`}
        />
      </div>
    </div>
  );
};
