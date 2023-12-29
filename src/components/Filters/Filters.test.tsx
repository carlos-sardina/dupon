import { render, screen } from '@test-utils';
import { Filters } from './Filters';
import { useSettings } from '../../hooks';
import { TODO_STATUS_MAP } from '../../maps';

jest.mock('../../hooks', () => ({
  useSettings: jest.fn(() => ({ filter: 'done', changeFilter: jest.fn() })),
}));

describe('Filters component', () => {
  it('should render the Filters component with the correct text and buttons', () => {
    const { filter } = useSettings();

    render(<Filters />);

    const filterTextElement = screen.getByText(filter ? TODO_STATUS_MAP[filter].text : 'All');
    expect(filterTextElement).toBeInTheDocument();

    const buttonList = screen.getAllByRole('button')[0];
    const buttonClock = screen.getAllByRole('button')[1];
    const buttonCheck = screen.getAllByRole('button')[2];

    expect(buttonList).toBeInTheDocument();
    expect(buttonClock).toBeInTheDocument();
    expect(buttonCheck).toBeInTheDocument();
  });
});
