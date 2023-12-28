import { Header, Todo } from './components';

function App() {
  return (
    <main className="h-screen bg-purple p-6">
      <Header />
      <ul className="mt-8 justify-between gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </main>
  );
}

export default App;
