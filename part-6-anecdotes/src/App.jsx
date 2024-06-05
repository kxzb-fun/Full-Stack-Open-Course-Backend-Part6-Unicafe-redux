import AnecdoteForm from './components/AnecdoteForm.jsx'
import AnecdoteList from './components/AnecdoteList.jsx'
import Filter from './components/Filter.jsx'
import { useSelector } from 'react-redux';
import Notification from './components/Notification.jsx';
import { setAnecdote } from "./reducers/anecdoteReducer";
import anecdoteServer from "./services/anecdotes";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    anecdoteServer.getAll().then(res=>{
      dispatch(setAnecdote(res))
    }, [])
  })
  const notification = useSelector(state => state.notification);
  console.log(notification);
  return (
    <div>
      {notification && <Notification />}
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
