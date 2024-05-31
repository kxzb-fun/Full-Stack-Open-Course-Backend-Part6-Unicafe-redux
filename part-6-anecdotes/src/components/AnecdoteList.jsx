import AddVote from "./AddVote.jsx";
import { useSelector } from "react-redux";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes).sort(
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
