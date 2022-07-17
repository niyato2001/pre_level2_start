import { memo } from 'react';
import { useCount } from '@/hook/useCount';

const Pattern4: React.FC = () => {
  const { countUp, objCountUp, listCountUp } = useCount();
  return (
    <>
      <h2>
        <span className='mr-4 text-base'>パターン4</span>
        <span>countUp:{'() =>'} void etc...</span>
      </h2>
      <div className='flex gap-3'>
        <button type='button' className='btn' onClick={countUp}>
          countUp{'()'}
        </button>
        <button type='button' className='btn' onClick={objCountUp}>
          objCountUp{'()'}
        </button>
        <button type='button' className='btn' onClick={listCountUp}>
          listCountUp{'()'}
        </button>
      </div>
    </>
  );
};

export const Pattern4Memo = memo(Pattern4);
