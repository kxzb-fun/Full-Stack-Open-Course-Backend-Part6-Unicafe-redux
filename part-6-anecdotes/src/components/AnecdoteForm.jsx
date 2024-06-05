import { addNew } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { setNotification } from '../reducers/notificationReducer';
import anecdoteServer from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = ''
    const newData = await anecdoteServer.createNew(content)
    console.log(newData);
    dispatch(addNew(newData));
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
