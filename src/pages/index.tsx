import { Pattern1 } from '@/component/Pattern1';
import { Pattern2 } from '@/component/Pattern2';
import { Pattern3 } from '@/component/Pattern3';
import { Pattern4 } from '@/component/Pattern4';

const Home: React.FC = () => (
  <main className='mx-auto max-w-6xl py-6 text-primary-800'>
    <h1 className='text-2xl font-extrabold '>Rendering Optimization of React</h1>
    <div className='test-lg my-6 flex flex-col gap-4'>
      <Pattern1 />
      <Pattern2 />
      <Pattern3 />
    </div>
    <Pattern4 />
  </main>
);
export default Home;
