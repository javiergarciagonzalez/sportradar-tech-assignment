interface Props {
  placeholder: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}

const TextInput: React.FC<Props> = ({
  placeholder,
  handleChange,
  value,
  type = "text",
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      value={value}
    />
  );
};

export default TextInput;
