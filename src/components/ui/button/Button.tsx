import { FC } from "react";

interface Props {
  [prop: string]: any;
}

const Button: FC<Props> = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
