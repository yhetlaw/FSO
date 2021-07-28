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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course course={courses} />;
};

export default App;
