import React from "react";

interface Props {
  onClick: () => void;
  btnText: string;
}
const Button = ({ onClick, btnText }: Props) => {
  return <button onClick={onClick}>{btnText}</button>;
};

export default Button;
