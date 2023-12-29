import { IconCheck } from '@tabler/icons-react';

type CheckProps = {
  isChecked: boolean;
  onChange: () => void;
};

export const Check = ({ isChecked, onChange }: CheckProps) => {
  return (
    <div>
      <input type="checkbox" checked={isChecked} className="hidden" onChange={onChange} />
      <button
        onClick={onChange}
        className={`w-[25px] h-[25px] rounded-full flex items-center justify-center border ${
          isChecked
            ? 'bg-purple border-purple hover:bg-purpleStrong hover:border-purpleStrong'
            : 'hover:bg-grayLight border-grayStrong'
        }`}
      >
        {isChecked ? <IconCheck width="16px" height="15px" stroke="5px" color="white" /> : null}
      </button>
    </div>
  );
};
