import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

interface CheckboxProps {}

const Checkbox = () => {
  return (
    <RadixCheckbox.Root
      className={clsx(
        'h-6 w-6 p-1.5 flex justify-center items-center bg-gray-600 rounded-md',
        'radix-state-checked:bg-blue-500',
        'focus:outline-none focus-visible:outline focus-visible:outline-blue-200 focus-visible:ring-opacity-75'
      )}
    >
      <RadixCheckbox.Indicator>
        <CheckIcon width={18} height={18} />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

export default Checkbox;
