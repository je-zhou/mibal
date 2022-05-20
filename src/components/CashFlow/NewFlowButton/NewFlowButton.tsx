import { mockFlow } from "../../../mock_data/mock_data";

interface NewFlowButtonProps {
  handleClick: Function;
}

export default function NewFlowButton({ handleClick }: NewFlowButtonProps) {
  return (
    <div>
      <button onClick={() => handleClick()}>New Flow</button>
    </div>
  );
}
