import React, { useState } from 'react';

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Title = (props) => <h1>{props.text}</h1>;

const Subtitle = (props) => <h2>{props.text}</h2>;

const Statistics = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>
    </div>
  );
};

const StatisticsResult = (props) => {
  if (props.value === 0) {
    return <div>No feedback given</div>;
  }
};

const Average = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => () => {
    setGood(newValue);
  };

  const setToNeutral = (newValue) => () => {
    setNeutral(newValue);
  };

  const setToBad = (newValue) => () => {
    setBad(newValue);
  };

  return (
    <div>
      <Title text='Give feedback' />
      <Button onClick={setToGood(good + 1)} text='Good' />
      <Button onClick={setToNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={setToBad(bad + 1)} text='Bad' />
      <Subtitle text='Statistics' />
      <Statistics text='Good' value={good} />
      <Statistics text='Neutral' value={neutral} />
      <Statistics text='Bad' value={bad} />
      <Statistics text='All' value={good + neutral + bad} />
      <Average text='Average' value={(good - bad) / (good + neutral + bad)} />
    </div>
  );
};

export default App;
