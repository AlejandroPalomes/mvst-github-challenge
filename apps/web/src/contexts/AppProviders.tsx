import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

//TODO Remove any
const AppProviders: FC<{ children: any }> = ({ children }) => {

  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default AppProviders;
