import { useState, useCallback } from 'react';

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

export const useCount = (): UseCountReturnType => {
  const initCountObj: CountObj = { count: 0 };

  const [count, setCount] = useState<number>(0);
  const [countObj, setCountObj] = useState<CountObj>(initCountObj);
  const [countList, setCountList] = useState<number[]>([0]);

  const countUp = useCallback((): void => {
    setCount((count) => (count += 1));
  }, []);
  const objCountUp = useCallback((): void => {
    setCountObj((countObj) => {
      const newCountObj = { ...countObj };
      // newCountObj = countObjではレンダリングされないのはなぜ？？
      // {...countObj}にすることで浅いコピーになる！
      newCountObj.count++;
      return newCountObj;
    });
  }, []);
  const listCountUp = useCallback((): void => {
    setCountList((countList) => {
      const newCountList = [...countList];
      newCountList[0]++;
      return newCountList;
    });
  }, []);
  return { count, countObj, countList, countUp, objCountUp, listCountUp };
};
