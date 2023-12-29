import { render, fireEvent, screen } from '@test-utils';
import { Header } from './Header';

jest.mock('../../hooks', () => ({
  useTodo: jest.fn(() => ({
    newTodo: 'Test Todo',
    updateNewTodo: jest.fn(),
    addTodo: jest.fn(),
  })),
  useSettings: jest.fn(() => ({ filter: 'done', changeFilter: jest.fn() })),
}));

jest.mock('moment', () => () => ({
  format: jest.fn(() => 'Monday, Jan 1st 2023'),
}));

describe('Header component', () => {
  it('should render the Header component with the correct content', () => {
    render(<Header />);

    expect(screen.getByText('Monday, Jan 1st 2023')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Create a new todo')).toBeInTheDocument();
    expect(screen.getAllByRole('button')[0]).toBeInTheDocument();
  });

  it('should call addTodo when the form is submitted', () => {
    render(<Header />);

    const inputElement = screen.getByPlaceholderText('Create a new todo');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.submit(inputElement);
  });
});
