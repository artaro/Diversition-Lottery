"use client";

import { ILotteryResults } from "@/types/lottery";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ResultContextProps {
  result: ILotteryResults;
  setResult: Dispatch<SetStateAction<ILotteryResults>>;
}

const defaultResultValue = {
  firstPrize: [],
  nearFirstPrize: [],
  secondPrize: [],
  lastTwoDigitsPrize: [],
};

const ResultContext = createContext<ResultContextProps>({
  result: defaultResultValue,
  setResult: (): ILotteryResults => defaultResultValue,
});

export const ResultContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [result, setResult] = useState<ILotteryResults>(defaultResultValue);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
