import { updateVote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { setNotificationWithTimeout } from '../reducers/notificationReducer';

// eslint-disable-next-line react/prop-types
const AddVote = ({ data }) => {
  const dispatch = useDispatch();

  const vote = (data) => {
    console.log("vote", data);
    dispatch(updateVote(data));
    dispatch(setNotificationWithTimeout('Anecdote voted', 1));
  };

  return <button onClick={() => vote(data)}>vote</button>;
};
export default AddVote;
