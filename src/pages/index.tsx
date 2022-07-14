import { useState } from 'react';
import { Pattern1 } from '@/component/Pattern1';
import { Pattern2 } from '@/component/Pattern2';
import { Pattern3 } from '@/component/Pattern3';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [countObj, setCountObj] = useState({ count: 0 });
  const [countList, setCountList] = useState([0]);
  const countObjUp = () => {
    const newCountObj = { ...countObj };
    newCountObj.count++;
    setCountObj(newCountObj);
  };
  const countUp = () => setCount(count + 1);

  const countListUp = () => {
    const newCountList = [...countList];
    newCountList[0]++;
    setCountList(newCountList);
  };
  return (
    <main className='mx-auto max-w-6xl py-6 text-primary-800'>
      <h1 className='text-2xl font-extrabold '>Rendering Optimization of React</h1>
      <div className='test-lg my-6 flex flex-col gap-4'>
        <Pattern1 count={count} />
        <Pattern2 countObj={countObj} />
        <Pattern3 countList={countList} />
      </div>
      <>
        <h2>
          <span className='mr-4 text-base'>パターン4</span>
          <span>countUp:{'() =>'} void etc...</span>
        </h2>
        <div className='flex gap-3'>
          <button type='button' className='btn' onClick={countUp}>
            countUp{'()'}
          </button>
          <button type='button' className='btn' onClick={countObjUp}>
            objCountUp{'()'}
          </button>
          <button type='button' className='btn' onClick={countListUp}>
            listCountUp{'()'}
          </button>
        </div>
      </>
    </main>
  );
};
export default Home;
