import { addVote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const AddVote = ({ id }) => {
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(addVote(id));
  };

  return <button onClick={() => vote(id)}>vote</button>;
};
export default AddVote;
