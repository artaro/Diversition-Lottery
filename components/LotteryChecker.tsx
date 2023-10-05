"use client";

import { create, useStore } from "zustand";
import React, { useState, useEffect } from "react";

interface ILotteryResults {
  firstPrize: string[];
  nearFirstPrize: string[];
  secondPrize: string[];
  lastTwoDigitsPrize: string[];
}

const lotteryStore = create((set) => ({
  lotteryResults: {
    firstPrize: [],
    nearFirstPrize: [],
    secondPrize: [],
    lastTwoDigitsPrize: [],
  },
}));

const LotteryChecker = () => {
  const [lotteryNumber, setLotteryNumber] = useState("");
  const [isWinner, setIsWinner] = useState(false);

  // Create a useStore hook that returns the lotteryStore Zustand store.
  const { lotteryResults } = useStore(lotteryStore);

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;

    // Validate the input value to ensure that it is a number between 000 and 999.
    if (/^[0-9]{3}$/.test(inputValue)) {
      setLotteryNumber(inputValue);
    }
  };

  const checkLotteryNumber = () => {
    const results =
      lotteryResults?.firstPrize.includes(lotteryNumber) ||
      lotteryResults?.nearFirstPrize.includes(lotteryNumber) ||
      lotteryResults?.secondPrize.includes(lotteryNumber);

    setIsWinner(results);
  };

  return (
    <div>
      <h2>ตรวจรางวัลล็อตเตอรี่ Diversition</h2>
      <div>
        <span>เลขล็อตเตอรี่:</span>
        <input
          type="text"
          value={lotteryNumber}
          onChange={handleInputChange}
          placeholder="ระบุเลขล็อตเตอรี่ 3 หลัก"
        />
      </div>
      <button onClick={checkLotteryNumber}>ตรวจรางวัล</button>
      {lotteryResults && isWinner && (
        <div>
          <p>ยินดีด้วย! คุณถูกรางวัล</p>
          <p>รางวัลที่คุณถูกคือ:</p>
          <ul>
            {lotteryResults?.firstPrize.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      )}
      {lotteryResults && !isWinner && (
        <div>
          <p>เสียใจด้วย! คุณไม่ถูกรางวัล</p>
          <p>รางวัลที่ออกคือ:</p>
          <ul>
            {lotteryResults?.firstPrize.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LotteryChecker;
