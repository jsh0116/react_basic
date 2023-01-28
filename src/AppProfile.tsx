import './App.css';
import Profile from './components/Profile';

const AppProfile = (): JSX.Element => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    alert('클릭');
    console.log(e);
  }

  return (
    <>
      <button onClick={handleClick}>button</button>
      <Profile
        image="mypic.jpeg"
        name="SeungHoon Jeong"
        title="FullStack Developer"
        newTag={true}
      />
    </>
  );
}

export default AppProfile;
