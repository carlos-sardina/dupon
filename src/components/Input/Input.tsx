type InputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      className="w-full p-2 rounded-md focus:outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
