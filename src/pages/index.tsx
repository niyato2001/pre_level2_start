import { Pattern1Memo } from '@/component/Pattern1';
import { Pattern2Memo } from '@/component/Pattern2';
import { Pattern3Memo } from '@/component/Pattern3';
import { Pattern4Memo } from '@/component/Pattern4';
import { useCount } from '@/hook/useCount';

const Home: React.FC = () => {
  const { count, countObj, countList, countUp, objCountUp, listCountUp } = useCount();

  return (
    <main className='mx-auto max-w-6xl py-6 text-primary-800'>
      <h1 className='text-2xl font-extrabold '>Rendering Optimization of React</h1>
      <div className='test-lg my-6 flex flex-col gap-4'>
        <Pattern1Memo count={count} />
        <Pattern2Memo countObj={countObj} />
        <Pattern3Memo countList={countList} />
      </div>
      <Pattern4Memo countUp={countUp} objCountUp={objCountUp} listCountUp={listCountUp} />
    </main>
  );
};
export default Home;
