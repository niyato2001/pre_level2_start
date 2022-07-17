import { useRecoilValue } from 'recoil';
import { countAtom } from '@/hook/useCount';

export const Pattern1: React.FC = () => {
  const count = useRecoilValue(countAtom);

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
