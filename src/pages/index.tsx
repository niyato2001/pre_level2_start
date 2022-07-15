import { Pattern1 } from '@/component/Pattern1';
import { Pattern2 } from '@/component/Pattern2';
import { Pattern3 } from '@/component/Pattern3';
import { Pattern4 } from '@/component/Pattern4';
import { useCount } from '@/hook/useCount';

const Home: React.FC = () => {
  const { count, countObj, countList, countUp, objCountUp, listCountUp } = useCount();

  return (
    <main className='mx-auto max-w-6xl py-6 text-primary-800'>
      <h1 className='text-2xl font-extrabold '>Rendering Optimization of React</h1>
      <div className='test-lg my-6 flex flex-col gap-4'>
        <Pattern1 count={count} />
        <Pattern2 countObj={countObj} />
        <Pattern3 countList={countList} />
      </div>
      <Pattern4 countUp={countUp} objCountUp={objCountUp} listCountUp={listCountUp} />
    </main>
  );
};
export default Home;
