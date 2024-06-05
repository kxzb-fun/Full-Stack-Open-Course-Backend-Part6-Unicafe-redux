import AddVote from "./AddVote.jsx";
import { useSelector } from "react-redux";

const AnecdoteList = () => {
  // NB AnecdoteList.jsx:5 Uncaught TypeError: Cannot assign to read only property '0' of object '[object Array]' at Array.sort
  const anecdotes = [...useSelector((state) => state.anecdotes)].sort(
    (a, b) => b.votes - a.votes
  );
  const filter = useSelector((state) => state.filter);

  const filteredAnecdotes = anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <AddVote id={anecdote.id} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnecdoteList;
