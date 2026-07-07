import { Loader } from './components/Loader';
import { MouseFollower } from './components/MouseFollower';
import { usePageLoader } from './hooks/usePageLoader';
import { AppRouter } from './router/AppRouter';

function App() {
  const loading = usePageLoader(2400);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <MouseFollower />
          <AppRouter />
        </>
      )}
    </>
  );
}

export default App;
