import { memo } from 'react';
import { useCount } from '@/hook/useCount';

const Pattern1: React.FC = () => {
  const { count } = useCount();

  return (
    <div>
      <h2>
        <span className='mr-4 text-base'>パターン1</span>
        <span>count:number</span>
      </h2>
      <div> Count:{count}</div>
    </div>
  );
};

export const Pattern1Memo = memo(Pattern1);
