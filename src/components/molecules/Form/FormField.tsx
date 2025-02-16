import { twMerge } from 'tailwind-merge';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
}

export function FormField({ label, className, error, ...props }: FormFieldProps) {
  return (
    <div className="h-15">
      {label && <label className="block text-md font-medium text-gray-700 mb-2">{label}</label>}
      <input
        {...props}
        className={twMerge(
          'p-2 w-full border rounded-md focus:ring-1 transition-all duration-200 focus:outline-none',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400',
          className
        )}
      />
      {error && <p className="mt-0 text-sm relative text-red-500">{error}</p>}
    </div>
  );
}
