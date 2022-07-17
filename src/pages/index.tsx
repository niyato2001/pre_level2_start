import { Pattern1Memo } from '@/component/Pattern1';
import { Pattern2Memo } from '@/component/Pattern2';
import { Pattern3Memo } from '@/component/Pattern3';
import { Pattern4Memo } from '@/component/Pattern4';

const Home: React.FC = () => (
  <main className='mx-auto max-w-6xl py-6 text-primary-800'>
    <h1 className='text-2xl font-extrabold '>Rendering Optimization of React</h1>
    <div className='test-lg my-6 flex flex-col gap-4'>
      <Pattern1Memo />
      <Pattern2Memo />
      <Pattern3Memo />
    </div>
    <Pattern4Memo />
  </main>
);
export default Home;
