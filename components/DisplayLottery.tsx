"use client";

import React, { useEffect } from "react";
import { useResultContext } from "@/context/store";

const DisplayLottery = () => {
  const { result, setResult } = useResultContext();

  useEffect(() => {
    const storedResult = localStorage.getItem("Diversition-Lottery-Result");

    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  });

  const handleRandomResult = () => {
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

    const newResult = {
      firstPrize: [randomNumberString],
      nearFirstPrize,
      secondPrize,
      lastTwoDigitsPrize,
    };

    localStorage.setItem(
      "Diversition-Lottery-Result",
      JSON.stringify(newResult)
    );

    setResult(newResult);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <button
          className="my-3 px-6 py-6 rounded-lg bg-[#F4D160] text-white text-xl text-center hover:bg-[#FBEEAC] transition-all duration-300 cursor-pointer shadow-sm shadow-gray-200"
          onClick={handleRandomResult}
        >
          ดำเนินการสุ่มรางวัล
        </button>
      </div>
      <div>
        <div>
          <div className="px-3 py-3 rounded-t-lg bg-[#27005D] text-white text-4xl text-center font-bold">
            รางวัลที่ 1
          </div>
          <div className="my-3 w-full flex flex-row justify-around rounded-b-lg shadow-sm shadow-gray-200">
            {result.firstPrize.map((num) => (
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
          <div className="my-3 w-full flex flex-row justify-around rounded-b-lg shadow-sm shadow-gray-200">
            {result.nearFirstPrize.map((num) => (
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
          <div className="my-3 w-full flex flex-row justify-around rounded-b-lg shadow-sm shadow-gray-200">
            {result.secondPrize.map((num) => (
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
          <div className="my-3 w-full flex flex-row justify-around rounded-b-lg shadow-sm shadow-gray-200">
            {result.lastTwoDigitsPrize.map((num) => (
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

export default DisplayLottery;
