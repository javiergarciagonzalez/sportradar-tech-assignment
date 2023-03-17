interface Props {
  placeholder: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

const TextInput: React.FC<Props> = ({ placeholder, handleChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={handleChange}
      type="text"
      value={value}
    />
  );
};

export default TextInput;
