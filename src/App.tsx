import './App.css';

const App = (): JSX.Element => {
  const name = 'seunghoon';
  const list = ['milk', 'strawberry', 'banana', 'yogurt'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://images.unsplash.com/photo-1674505613923-98085d3712fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        alt='nature'
      />
    </>
  );
}

export default App;
