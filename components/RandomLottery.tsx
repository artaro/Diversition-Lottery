"use client";

import React, { useState, useEffect } from "react";

interface ILotteryResults {
  firstPrize: string[];
  nearFirstPrize: string[];
  secondPrize: string[];
  lastTwoDigitsPrize: string[];
}

const RandomLottery = () => {
  const [lotteryResults, setLotteryResults] = useState<ILotteryResults>({
    firstPrize: [],
    nearFirstPrize: [],
    secondPrize: [],
    lastTwoDigitsPrize: [],
  });

  const generateRandomLotteryResults = () => {
    const randomNumber = Math.floor(Math.random() * 1000);

    const randomNumberString = randomNumber.toString().padStart(3, "0");

    const secondPrize: string[] = [];
    while (secondPrize.length < 3) {
      const secondPrizeItem = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0");
      if (
        secondPrizeItem !== randomNumberString &&
        !secondPrize.includes(secondPrizeItem)
      ) {
        secondPrize.push(secondPrizeItem);
      }
    }

    const nearFirstPrize = [
      (randomNumber - 1).toString().padStart(3, "0"),
      (randomNumber + 1).toString().padStart(3, "0"),
    ];

    const lastTwoDigitsPrize = [randomNumberString.slice(-2)];

    return setLotteryResults({
      firstPrize: [randomNumberString],
      nearFirstPrize,
      secondPrize,
      lastTwoDigitsPrize,
    });
  };

  useEffect(() => {
    generateRandomLotteryResults();
  }, []);

  return (
    <div className="w-full">
      <h2>ผลการออกรางวัลล็อตเตอรี่ Diversition</h2>
      <button
        className="my-3 px-3 py-3 rounded-xl bg-[#9400FF] text-white text-xl text-center hover:bg-[#8250FF] transition-all duration-300 cursor-pointer shadow-sm shadow-black"
        onClick={generateRandomLotteryResults}
      >
        ดำเนินการสุ่มรางวัล
      </button>
      <div>
        <div>
          <div className="px-3 py-3 rounded-t-lg bg-[#27005D] text-white text-4xl text-center font-bold">
            รางวัลที่ 1
          </div>
          <div className="w-full flex flex-row justify-around rounded-b-lg bg-[#E4F1FF]">
            {lotteryResults.firstPrize.map((num) => (
              <p className="mx-2 my-2 px-9 py-9 rounded bg-[#9400FF] text-white text-7xl font-bold">
                {num}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="px-3 py-3 rounded-t-lg bg-[#27005D] text-white text-4xl text-center font-bold">
            รางวัลเลขข้างเคียงรางวัลที่ 1
          </div>
          <div className="w-full flex flex-row justify-around rounded-b-lg bg-[#E4F1FF]">
            {lotteryResults.nearFirstPrize.map((num) => (
              <p className="mx-2 my-2 px-9 py-9 rounded bg-[#9400FF] text-white text-7xl font-bold">
                {num}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="px-3 py-3 rounded-t-lg bg-[#27005D] text-white text-4xl text-center font-bold">
            รางวัลที่ 2
          </div>
          <div className="w-full flex flex-row justify-around rounded-b-lg bg-[#E4F1FF]">
            {lotteryResults.secondPrize.map((num) => (
              <p className="mx-2 my-2 px-9 py-9 rounded bg-[#9400FF] text-white text-7xl font-bold">
                {num}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="px-3 py-3 rounded-t-lg bg-[#27005D] text-white text-4xl text-center font-bold">
            รางวัลเลขท้าย 2 ตัว
          </div>
          <div className="w-full flex flex-row justify-around rounded-b-lg bg-[#E4F1FF]">
            {lotteryResults.lastTwoDigitsPrize.map((num) => (
              <p className="mx-2 my-2 px-9 py-9 rounded bg-[#9400FF] text-white text-7xl font-bold">
                {num}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomLottery;
