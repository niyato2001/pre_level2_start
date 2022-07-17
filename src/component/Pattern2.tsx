import { memo } from 'react';
import { useCount } from '@/hook/useCount';

const Pattern2: React.FC = () => {
  const { countObj } = useCount();
  return (
    <div>
      <h2>
        <span className='mr-4 text-base'>パターン2</span>
        <span>
          countObj: {'{'}count:number{'}'}
        </span>
      </h2>
      <div>Count: {countObj.count}</div>
    </div>
  );
};

export const Pattern2Memo = memo(Pattern2);
