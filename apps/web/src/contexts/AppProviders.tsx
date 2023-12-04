import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';

// const theme = DashboardLightTheme;
// const queryClient = new QueryClient();

//TODO Remove any
const AppProviders: FC<{ children: any }> = ({ children }) => {

  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        {children}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
};

export default AppProviders;
