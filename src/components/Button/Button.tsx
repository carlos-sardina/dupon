type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  isInactive?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ text, icon, isInactive = false, onClick = () => null, type = 'button' }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-1 bg-purpleStrong text-white hover:bg-purpleStronger py-2 px-3 rounded-md ${
        isInactive ? 'opacity-60' : ''
      }`}
      onClick={onClick}
      type={type}
    >
      {text} {icon}
    </button>
  );
};
