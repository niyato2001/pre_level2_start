import { memo } from 'react';

interface Props {
  count: number;
}

const Pattern1: React.FC<Props> = ({ count }) => (
  <div>
    <h2>
      <span className='mr-4 text-base'>パターン1</span>
      <span>count:number</span>
    </h2>
    <div> Count:{count}</div>
  </div>
);

export const Pattern1Memo = memo(Pattern1);
