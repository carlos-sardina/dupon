import { Header, Todo } from './components';

function App() {
  return (
    <main className="h-screen bg-purple p-6">
      <Header />
      <ul className="flex flex-wrap gap-x-4 gap-y-8 mt-8 justify-between">
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
