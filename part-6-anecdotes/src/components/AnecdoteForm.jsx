import { addNew } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    dispatch(addNew(content));
    dispatch(setNotification('New anecdote created'));
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
