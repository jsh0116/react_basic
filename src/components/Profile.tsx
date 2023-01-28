import React from 'react';
import Avatar from './Avatar';

interface Props {
  image: string | undefined;
  name: string;
  title: string;
  newTag?: boolean;
}

const Profile = (props: Props): JSX.Element => {
  const { image, name, title, newTag } = props;
  return (
    <div className='profile'>
      <Avatar image={image} newTag={newTag} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

export default Profile;
