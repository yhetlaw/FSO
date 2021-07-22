import React, { useState } from 'react';

const Title = (props) => <h1>{props.text}</h1>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const MostVotes = (props) => {
  let mostVotes = 0;
  let i = 0;
  while (i < props.voteList.length) {
    if (props.voteList[i] > props.voteList[mostVotes]) {
      mostVotes = i;
    }
    i++;
  }
  return (
    <div>
      <p>{props.anecdotesList[mostVotes]}</p>
      <p>Has {props.numberVotes[mostVotes]} votes</p>
    </div>
  );
};

const AnecdoteGroup = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>Has {props.numberVotes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(7).fill(0));

  const handleClick = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  return (
    <div>
      <Title text='Anecdote of the day' />
      <AnecdoteGroup text={anecdotes[selected]} numberVotes={votes[selected]} />
      <Button onClick={handleVote} text='Vote' />
      <Button onClick={handleClick} text='Random anecdote' />
      <Title text='Anecdote with the most votes' />
      <MostVotes voteList={votes} anecdotesList={anecdotes} numberVotes={votes} />
    </div>
  );
};

export default App;
