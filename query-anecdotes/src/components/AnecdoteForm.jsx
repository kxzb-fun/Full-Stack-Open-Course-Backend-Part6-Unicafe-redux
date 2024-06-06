import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdotes } from '../request'
import { useNotification } from '../NotificationContext';

const AnecdoteForm = () => {
  const { dispatch } = useNotification();

  const queryClient = useQueryClient()
  const newAnecdotes = useMutation({
    mutationFn: createAnecdotes, onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  })
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value

    // 检查内容长度
    if (content.length < 5) {
      dispatch({ type: 'SET_NOTIFICATION', payload: 'Anecdote must be at least 5 characters long!' });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 5000);
      return;
    }
    
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecdotes.mutate({ content, votes: 0 })
    // 设置通知
    dispatch({ type: 'SET_NOTIFICATION', payload: `New anecdote ${content} created!` });
    // 清除通知
    setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION' });
    }, 5000);
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
