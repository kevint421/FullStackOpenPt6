import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote, sortByVotes } from '../reducers/anecdoteReducer';

const anecdoteList = () => {
  const anecdotes = useSelector(sortByVotes);
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(vote(id));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default anecdoteList;



