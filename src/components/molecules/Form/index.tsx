import { HTMLAttributes, ReactNode } from 'react';
import { FormButton } from './FormButton';
import { FormField } from './FormField';

interface FormRootProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode  
}


function Form({ children, onSubmit, ...props }: FormRootProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" {...props}>
      {children}
    </form>
  );
}

Form.Field = FormField;
Form.Button = FormButton;

export default Form;