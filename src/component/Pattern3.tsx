import { useRecoilValue } from 'recoil';
import { countListAtom } from '@/hook/useCount';

export const Pattern3: React.FC = () => {
  const countList = useRecoilValue(countListAtom);
  return (
    <div>
      <h2>
        <span className='mr-4 text-base'>パターン3</span>
        <span>countList: number[ ]</span>
      </h2>
      <div>Count:{countList[0]}</div>
    </div>
  );
};
