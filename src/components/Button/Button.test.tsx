import { render, fireEvent, screen } from '@test-utils';
import { Button } from './Button';

describe('Button component', () => {
  it('should render the button with the correct styles, text, and optional icon', () => {
    const buttonText = 'Click me';
    const onClick = jest.fn();
    const iconTestId = 'test-icon';
    const iconElement = <div data-testid={iconTestId}>Icon</div>;

    render(<Button text={buttonText} icon={iconElement} onClick={onClick} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(`${buttonText} Icon`);

    const icon = screen.getByTestId(iconTestId);
    expect(icon).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render an inactive button with correct styles', () => {
    const buttonText = 'Inactive Button';
    const onClick = jest.fn();

    render(<Button text={buttonText} isInactive={true} onClick={onClick} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('opacity-60');
  });

  it('should render a button with a different type attribute', () => {
    const buttonText = 'Submit';
    const onClick = jest.fn();

    render(<Button text={buttonText} type="submit" onClick={onClick} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
