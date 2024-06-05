import { addVote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { setNotification } from '../reducers/notificationReducer';

// eslint-disable-next-line react/prop-types
const AddVote = ({ id }) => {
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(addVote(id));
    dispatch(setNotification('Anecdote voted'));
  };

  return <button onClick={() => vote(id)}>vote</button>;
};
export default AddVote;
