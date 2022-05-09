import { useParams } from "react-router-dom";

export default function Account() {
  let { accountName } = useParams();
  return <h1>{accountName}</h1>;
}
