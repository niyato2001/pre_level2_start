interface Props {
  countObj: { count: number };
}

export const Pattern2: React.FC<Props> = ({ countObj }) => (
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
