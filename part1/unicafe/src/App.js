import React, { useState } from 'react';

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Title = (props) => <h1>{props.text}</h1>;

const Subtitle = (props) => <h2>{props.text}</h2>;

const Statistics = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);

const StatisticsGroup = (props) => {
  if (props.value === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <Statistics text='Good' value={props.good} />
      <Statistics text='Neutral' value={props.neutral} />
      <Statistics text='Bad' value={props.bad} />
      <Statistics text='All' value={props.all} />
      <Statistics text='Average' value={props.average} />
      <Statistics text='Positive' value={props.positive} />
    </div>
  );
};

const ButtonGroup = (props) => {
  return (
    <div>
      <Button onClick={props.setToGood(props.good + 1)} text='Good' />
      <Button onClick={props.setToNeutral(props.neutral + 1)} text='Neutral' />
      <Button onClick={props.setToBad(props.bad + 1)} text='Bad' />
    </div>
  );
};

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
      <StatisticsGroup
        value={good + neutral + bad}
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good - bad) / (good + neutral + bad)}
        positive={(good * 100) / (good + neutral + bad)}
      />
    </div>
  );
};

export default App;
