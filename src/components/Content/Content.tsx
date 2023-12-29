import { useTodo } from '../../hooks';
import { Todo } from '../index';

export const Content = () => {
  const { todos, deleteTodo, toggleTodoStatus } = useTodo();

  if (todos.length === 0) {
    return <p className="flex justify-center text-white text-2xl mt-16">Your task list is empty</p>;
  }

  return (
    <ul className="justify-between gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onRemove={() => deleteTodo(todo.id)}
          onCheckClick={() => toggleTodoStatus(todo.id)}
        />
      ))}
    </ul>
  );
};
