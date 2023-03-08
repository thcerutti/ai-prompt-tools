import { useState } from "react";
import combineAllMatrixElements from "../services/combinations";
import { Button } from "react-bootstrap";

const MatrixCombinations = () => {
  const [firstContent, setFirstContent] = useState("a\nb\nc");
  const [secondContent, setSecondContent] = useState("1\n2\n3");
  const [thirdContent, setThirdContent] = useState("x\ny\nz");
  const [resultCombination, setResultCombination] = useState("");

  const combineTextArea = () => {
    const matric = [
      firstContent.split("\n"),
      secondContent.split("\n"),
      thirdContent.split("\n"),
    ];
    const combinedElements = combineAllMatrixElements(matric);
    const formattedOutput = combinedElements
      .map((item) => item.join(" "))
      .join("\n");
    setResultCombination(formattedOutput);
  };

  const copyResultContent = (content) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="container">
      <h1>Matrix combinations</h1>
      <div className="row">
        <div className="col">
          <textarea
            className="form-control"
            cols={30}
            rows={10}
            onChange={(event) => setFirstContent(event.target.value)}
            value={firstContent}
          ></textarea>
        </div>
        <div className="col">
          <textarea
            className="form-control"
            cols={30}
            rows={10}
            onChange={(event) => setSecondContent(event.target.value)}
            value={secondContent}
          ></textarea>
        </div>
        <div className="col">
          <textarea
            className="form-control"
            cols={30}
            rows={10}
            onChange={(event) => setThirdContent(event.target.value)}
            value={thirdContent}
          ></textarea>
        </div>
      </div>

      <div className="row">
        <Button onClick={combineTextArea}>Combine inputs</Button>
      </div>

      <div className="row">
        <h1>Result combination</h1>
        <textarea
          cols={30}
          rows={10}
          value={resultCombination}
          readOnly
        ></textarea>
        <Button onClick={() => copyResultContent(resultCombination)}>
          Copy content
        </Button>
      </div>
    </div>
  );
};

export default MatrixCombinations;
