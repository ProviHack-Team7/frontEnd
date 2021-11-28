import { Content } from "./style";
import { useState } from "react";

interface BoxProps {
  elem: any;
  index: number;
}

export const QuizBox = ({ elem, index }: BoxProps) => {
  const [select, setSelect] = useState<boolean>(false);

  const handleClick = (event: any) => {
    event.currentTarget.classList.add("choice");

    setSelect(true);
  };
  return (
    <Content>
      <div>
        <span>{index + 1}</span>
        <p>{elem["question"]}</p>
      </div>
      <div className="choices" onClick={handleClick}>
        <span>A</span>
        <p>{elem["alternatives"][0]}</p>
      </div>
      <div className="choices" onClick={handleClick}>
        <span>B</span>
        <p>{elem["alternatives"][1]}</p>
      </div>
      <div className="choices" onClick={handleClick}>
        <span>C</span>
        <p>{elem["alternatives"][1]}</p>
      </div>
      <div className="choices" onClick={handleClick}>
        <span>D</span>
        <p>{elem["alternatives"][1]}</p>
      </div>
    </Content>
  );
};
