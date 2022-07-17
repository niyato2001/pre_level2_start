import { atom, useRecoilState, useRecoilCallback } from 'recoil';

interface CountObj {
  count: number;
}

interface UseCountReturnType {
  count: number;
  countObj: CountObj;
  countList: number[];
  countUp: () => void;
  objCountUp: () => void;
  listCountUp: () => void;
}
const countAtom = atom<number>({
  key: 'countAtom',
  default: 0,
});
const countObjAtom = atom<CountObj>({
  key: 'countObjAtom',
  default: { count: 0 },
});
const countListAtom = atom<number[]>({
  key: 'countListAtom',
  default: [0],
});

export const useCount = (): UseCountReturnType => {
  const [countObj, setCountObj] = useRecoilState<CountObj>(countObjAtom);
  const [countList, setCountList] = useRecoilState<number[]>(countListAtom);
  const [count, setCount] = useRecoilState<number>(countAtom);
  const countUp = useRecoilCallback(
    ({}) =>
      (): void => {
        setCount((count) => (count += 1));
      },
    [],
  );
  const objCountUp = useRecoilCallback(
    ({}) =>
      (): void => {
        setCountObj((countObj) => {
          const newCountObj = { ...countObj };
          // newCountObj = countObjではレンダリングされないのはなぜ？？
          // {...countObj}にすることで浅いコピーになる！
          newCountObj.count++;
          return newCountObj;
        });
      },
    [],
  );
  const listCountUp = useRecoilCallback(
    ({}) =>
      (): void => {
        setCountList((countList) => {
          const newCountList = [...countList];
          newCountList[0]++;
          return newCountList;
        });
      },
    [],
  );
  return { count, countObj, countList, countUp, objCountUp, listCountUp };
};
