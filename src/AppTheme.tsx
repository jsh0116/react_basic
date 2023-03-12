import React, { useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
import './Theme.css';

const AppTheme = () => {
  return (
    <DarkModeProvider>
      <header className='header'>Header</header>
      <Main />
      <Profile />
    </DarkModeProvider>
  );
};

function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode: <span>{darkMode.toString()}</span>
      </p>
      <button onClick={toggleDarkMode}>Toggle</button>
    </div>
  )
}

export default AppTheme;