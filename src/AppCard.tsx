import React from 'react';
import Card from './components/Card';

const AppCard = () => {
  return (
    <>
      <Card>
        <p>card1</p>
      </Card>
      <Card>
        <h1>card2</h1>
        <p>설명</p>
      </Card>
      <Card>
        <article></article>
      </Card>
    </>
  );
};

export default AppCard;