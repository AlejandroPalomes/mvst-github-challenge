import './App.css'
import AppProviders from './contexts/AppProviders.tsx';
import { Router } from './router/Router.tsx'

function App() {

  return (
    <AppProviders>
      <Router/>
    </AppProviders>
  );
}

export default App
