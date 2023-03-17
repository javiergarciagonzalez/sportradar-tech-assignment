import { FC } from "react";

interface Props {
  children: string;
}

const Title: FC<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Title;
