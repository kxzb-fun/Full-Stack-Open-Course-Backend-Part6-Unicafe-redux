import AddVote from "./AddVote.jsx";
import { useSelector } from "react-redux";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state).sort(
    (a, b) => b.votes - a.votes
  );

  return (
    <div>
      {anecdotes.map((anecdote) => (
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
