import React, { useReducer, useState } from 'react';
import { useImmer } from 'use-immer';
import { Mentor } from './model/Mentor';
import { Person } from './model/Person';
import { personReducer } from './reducer/person-reducer';

const AppMentor = (): JSX.Element => {
  // const [person, dispatch] = useReducer(personReducer, initialPerson);
  const [person, updatePerson] = useImmer(initialPerson);

  const handleChangeClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const type = e.currentTarget.name;
    const prev = prompt(`What is your mentor's ${type}?`);
    const current = prompt('what is name that you want to change?');
    // dispatch({ type: 'updated', prev, current });
    updatePerson((person: Person) => {
      const mentor = person.mentors.find(mentor => mentor.name === prev);
      if (mentor !== undefined) {
        mentor.name = current;
      }
    });
  };

  const handleInsert = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetName = prompt(`type your mentor's name`);
    const targetTitle = prompt(`type your mentor's title`);
    updatePerson((person: Person) => person.mentors.push({ name: targetName, title: targetTitle }));
    // dispatch({ type: 'added', targetName, targetTitle });
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const type = e.currentTarget.name;
    const target = prompt(`What is your mentor's ${type}?`);
    updatePerson((person: Person) => {
      const index = person.mentors.findIndex((mentor: Mentor) => mentor.name === type);
      person.mentors.splice(index, 1);
    })
    // dispatch({ type: 'deleted', target });
  }

  return (
    <div>
      <h1>
        {person.name}이는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는
      </p>
      <ul>
        {person.mentors.map((mentor: Mentor, index: number) => (
          <li key={index}>
            {mentor.name} {mentor.title}
          </li>
        ))}
      </ul>
      <button name='name' onClick={handleChangeClick}>
        멘토 이름 바꾸기
      </button>
      <button name='title' onClick={handleChangeClick}>
        멘토 타이틀 바꾸기
      </button>
      <button onClick={handleInsert}>
        멘토 추가
      </button>
      <button name='name' onClick={handleDelete}>
        멘토 삭제
      </button>
    </div>
  );
};

const initialPerson: Person = {
  name: 'seunghoon',
  title: 'junior developer',
  mentors: [
    {
      name: 'mentorA',
      title: 'senior developer',
    },
    {
      name: 'mentorB',
      title: 'senior developer',
    },
  ]
}

export default AppMentor;