import React from 'react';

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Part = ({ course }) => {
  //Mapping all parts
  const automaticParts = course.parts.map((part) => (
    <p>
      {part.name} {part.exercises}
    </p>
  ));
  return <p>{automaticParts}</p>;
};

const Content = ({ course }) => {
  return (
    <div>
      <Part course={course} />
    </div>
  );
};

const Total = ({ course }) => {
  //Map all exercises and add them with reduce
  const sum = course.parts.map((part) => part.exercises).reduce((sum, current) => sum + current, 0);
  return (
    <p>
      <b>Number of exercises {sum}</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={course[0]} />
      <Content course={course[0]} />
      <Total course={course[0]} />
      <Header course={course[1]} />
      <Content course={course[1]} />
      <Total course={course[1]} />
    </div>
  );
};

export default Course;
