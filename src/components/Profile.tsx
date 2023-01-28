import React from 'react';

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
      <img className="photo" src={image} alt='avatar' />
      {newTag === true && <span className="new">New</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

export default Profile;
