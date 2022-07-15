interface Props {
  countUp: () => void;
  objCountUp: () => void;
  listCountUp: () => void;
}

export const Pattern4: React.FC<Props> = ({ countUp, objCountUp, listCountUp }) => (
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
