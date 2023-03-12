import React from 'react';

const Navbar = ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <header style={{ backgroundColor: 'yellow' }}>{children}</header>
  );
};

export default Navbar;