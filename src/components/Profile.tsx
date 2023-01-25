import React from 'react';

interface Props {
  image: string | undefined;
  name: string;
  title: string;
}

const Profile = (props: Props): JSX.Element => {
  const { image, name, title } = props;
  return (
    <div className='profile'>
      <img className="photo" src={image} alt='avatar' />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

export default Profile;
