import { twMerge } from 'tailwind-merge';

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  now: number;
}

function calculateProgress(now: number): number {
  return Math.min(100, Math.max(0, now));
}

export default function ProgressBar({ now, className, ...props }: ProgressBarProps) {
  return (
    <div
      className={twMerge('relative flex-1 h-5 rounded-full bg-cyan-200 overflow-hidden', className)}
      {...props}
    >
      <div
        className="bg-cyan-400 h-full transition-all duration-300"
        style={{ width: `${calculateProgress(now)}%` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-sm text-black">
        {calculateProgress(now).toFixed(0)}%
      </span>
    </div>
  );
}
