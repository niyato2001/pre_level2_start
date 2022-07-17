import { useRecoilValue } from 'recoil';
import { countObjAtom } from '@/hook/useCount';

export const Pattern2: React.FC = () => {
  const countObj = useRecoilValue(countObjAtom);
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
