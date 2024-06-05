import AnecdoteForm from './components/AnecdoteForm.jsx'
import AnecdoteList from './components/AnecdoteList.jsx'
import Filter from './components/Filter.jsx'
import { useSelector } from 'react-redux';
import Notification from './components/Notification.jsx';

const App = () => {
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
