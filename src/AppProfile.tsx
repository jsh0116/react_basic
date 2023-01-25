import './App.css';
import Profile from './components/Profile';

const AppProfile = (): JSX.Element => {
  return (
    <>
      <Profile
        image="mypic.jpeg"
        name="SeungHoon Jeong"
        title="FullStack Developer"
      />
    </>
  );
}

export default AppProfile;
