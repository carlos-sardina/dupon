import { render, fireEvent, screen } from '@test-utils';
import { Check } from './Check';

describe('Check component', () => {
  it('should render the Check component when isChecked is true', () => {
    const onChangeMock = jest.fn();

    render(<Check isChecked={true} onChange={onChangeMock} />);

    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toHaveAttribute('checked');

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render the Check component when isChecked is false', () => {
    const onChangeMock = jest.fn();

    render(<Check isChecked={false} onChange={onChangeMock} />);

    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).not.toHaveAttribute('checked');
  });

  it('should call the onChange callback when the Check component is clicked', () => {
    const onChangeMock = jest.fn();

    render(<Check isChecked={false} onChange={onChangeMock} />);

    const checkElement = screen.getByRole('button');
    fireEvent.click(checkElement);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
