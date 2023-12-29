import { render, fireEvent, screen } from '@test-utils';
import { Todo } from './Todo';
import { TODO_STATUS_MAP } from '../../maps';

jest.mock('moment', () => {
  return {
    unix: jest.fn((timestamp) => ({ fromNow: () => `Mocked ${timestamp}` })),
  };
});

const mockTodo = {
  id: '1',
  text: 'Test Todo',
  timestamp: 1643673600,
  status: TODO_STATUS_MAP.pending.key as keyof typeof TODO_STATUS_MAP,
};

describe('Todo component', () => {
  it('should render the Todo component with the correct text and timestamp', () => {
    const onRemoveMock = jest.fn();
    const onCheckClickMock = jest.fn();

    render(<Todo todo={mockTodo} onRemove={onRemoveMock} onCheckClick={onCheckClickMock} />);

    const todoElement = screen.getByRole('listitem');
    expect(todoElement).toBeInTheDocument();

    const checkElement = screen.getByRole('checkbox');
    expect(checkElement).toBeInTheDocument();

    const textElement = screen.getByText(mockTodo.text);
    const timestampElement = screen.getByText(`Mocked ${mockTodo.timestamp}`);
    expect(textElement).toBeInTheDocument();
    expect(timestampElement).toBeInTheDocument();

    const iconTrashButton = screen.getByTestId('remove-button');
    expect(iconTrashButton).toBeInTheDocument();
    expect(iconTrashButton).toContainHTML('<svg');
  });

  it('should call the onCheckClick callback when the Check component is clicked', () => {
    const onRemoveMock = jest.fn();
    const onCheckClickMock = jest.fn();

    render(<Todo todo={mockTodo} onRemove={onRemoveMock} onCheckClick={onCheckClickMock} />);

    const checkElement = screen.getByRole('checkbox');
    fireEvent.click(checkElement);
    expect(onCheckClickMock).toHaveBeenCalledTimes(1);
  });

  it('should call the onRemove callback when the IconTrash button is clicked', () => {
    const onRemoveMock = jest.fn();
    const onCheckClickMock = jest.fn();

    render(<Todo todo={mockTodo} onRemove={onRemoveMock} onCheckClick={onCheckClickMock} />);

    const iconTrashButton = screen.getByTestId('remove-button');
    fireEvent.click(iconTrashButton);
    expect(onRemoveMock).toHaveBeenCalledTimes(1);
  });
});
