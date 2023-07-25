import { AppProvider } from '@/providers/app';
import Router from '@/routes';

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
