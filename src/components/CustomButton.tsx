interface Props {
  onClickCustom: () => void;
  buttonText: string;
}

export const CustomButton = ({ onClickCustom, buttonText }: Props) => {
  return (
    <button
      onClick={onClickCustom}
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-gray-900 text-gray-50 px-4 py-2 rounded-md"
    >
      {buttonText}
    </button>
  );
};
