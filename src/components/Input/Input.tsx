type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => {
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
