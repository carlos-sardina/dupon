type ButtonProps = {
  text?: string;
  backgroundColor: string;
  textColor: string;
  icon?: React.ReactNode;
  hoverBackgroundColor: string;
  isActive?: boolean;
  activeColor?: string;
  onClick?: () => void;
};

export const Button = ({
  text,
  icon,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  isActive = false,
  activeColor,
  onClick = () => null,
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-1 bg-${backgroundColor} text-${textColor} hover:bg-${hoverBackgroundColor} py-2 px-3 rounded-md`}
      style={{ border: isActive ? `2px solid ${activeColor}` : 'none' }}
      onClick={onClick}
    >
      {text} {icon}
    </button>
  );
};
