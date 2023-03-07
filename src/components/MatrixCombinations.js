import { useState } from "react";
import combineAllMatrixElements from "../services/combinations";

const MatrixCombinations = () => {
  const [firstContent, setFirstContent] = useState("a\nb\nc");
  const [secondContent, setSecondContent] = useState("1\n2\n3");
  const [thirdContent, setThirdContent] = useState("x\ny\nz");
  const [resultCombination, setResultCombination] = useState("");

  const combineAll = () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = combineAllMatrixElements(matrix);
    console.log(result);
  };

  const combineTextArea = () => {
    const matric = [
      firstContent.split("\n"),
      secondContent.split("\n"),
      thirdContent.split("\n"),
    ];
    const x = combineAllMatrixElements(matric);
    const y = x.map((item) => item.join(" ")).join('\n');
    setResultCombination(y);
    console.log(y);
  };

  const copyResultContent = (content) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <>
      <h1>Matrix combinations</h1>
      <div>
        <textarea
          cols={30}
          rows={10}
          onChange={(event) => setFirstContent(event.target.value)}
          value={firstContent}
        ></textarea>
      </div>
      <div>
        <textarea
          cols={30}
          rows={10}
          onChange={(event) => setSecondContent(event.target.value)}
          value={secondContent}
        ></textarea>
      </div>
      <div>
        <textarea
          cols={30}
          rows={10}
          onChange={(event) => setThirdContent(event.target.value)}
          value={thirdContent}
        ></textarea>
      </div>
      <div>
        <button onClick={combineAll}>Combine it all!</button>
        <button onClick={combineTextArea}>combine textarea</button>
      </div>
      <div>
        <h1>Result combination</h1>
        <textarea
          cols={30}
          rows={10}
          value={resultCombination}
          readOnly
        ></textarea>
        <button onClick={() => copyResultContent(resultCombination)}>Copy content</button>
      </div>
    </>
  );
};

export default MatrixCombinations;
