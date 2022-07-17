import { atom, useSetRecoilState, useRecoilCallback } from 'recoil';

export interface CountObj {
  count: number;
}

interface UseCountReturnType {
  countUp: () => void;
  objCountUp: () => void;
  listCountUp: () => void;
}

export const countAtom = atom<number>({
  key: 'countAtom',
  default: 0,
});
export const countObjAtom = atom<CountObj>({
  key: 'countObjAtom',
  default: { count: 0 },
});
export const countListAtom = atom<number[]>({
  key: 'countListAtom',
  default: [0],
});

export const useCount = (): UseCountReturnType => {
  const setCountObj = useSetRecoilState<CountObj>(countObjAtom);
  const setCountList = useSetRecoilState<number[]>(countListAtom);
  const setCount = useSetRecoilState<number>(countAtom);
  const countUp = useRecoilCallback(
    ({}) =>
      (): void => {
        setCount((count) => (count += 1));
      },
    [],
  );
  const objCountUp = (): void => {
    setCountObj((countObj) => {
      const newCountObj = { ...countObj };
      // newCountObj = countObjではレンダリングされないのはなぜ？？
      // {...countObj}にすることで浅いコピーになる！
      newCountObj.count++;
      return newCountObj;
    });
  };

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
  return { countUp, objCountUp, listCountUp };
};
