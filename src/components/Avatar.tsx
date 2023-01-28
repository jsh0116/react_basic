import React from 'react'

interface Props {
  image: string | undefined;
  newTag?: boolean;
}

const Avatar = (props: Props): JSX.Element => {
  const { image, newTag } = props;
  return (
    <div className='avatar'>
      <img className="photo" src={image} alt='avatar' />
      {newTag === true && <span className="new">New</span>}
    </div>
  )
}

export default Avatar;