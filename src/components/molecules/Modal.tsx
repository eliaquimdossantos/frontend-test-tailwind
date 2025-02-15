import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const modalOverlay = tv({
  base: 'fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-200',
  variants: {
    open: {
      true: 'opacity-100 visible',
      false: 'opacity-0 invisible',
    },
  },
});

const modalBox = tv({
  base: 'relative p-4 m-2 w-full z-50 max-w-2xl bg-white rounded-lg transform transition-all duration-200 max-h-[90vh] overflow-hidden',
  variants: {
    open: {
      true: 'scale-100 opacity-100 translate-y-0',
      false: 'scale-95 opacity-0 translate-y-4',
    },
  },
});

export default function Modal({ open, onClose, title, children }: ModalProps) {
  return (
    <div className={modalOverlay({ open })} role="dialog">
      <div className={modalBox({ open })}>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <button onClick={onClose} className="text-gray-400 hover:bg-gray-200 rounded-full transition-colors p-2">
            <div className="flex items-center justify-center size-5"><i className="bi bi-x-lg" /></div>
          </button>
        </div>
        <div className="p-4 max-h-[75vh] overflow-y-auto">
          {open && children}
        </div>
      </div>
    </div>
  );
}
