"use client";
import React, { useState } from "react";
import { useResultContext } from "@/context/store";

const LotteryChecker = () => {
  const { result } = useResultContext();
  const [userNumber, setUserNumber] = useState<string>("");
  const [matchedPrizes, setMatchedPrizes] = useState<string[]>([""]);
  const [isCheck, setIsCheck] = useState<Boolean>(false);

  const handleUserInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUserNumber(e.target.value);
  };

  const checkUserNumber = () => {
    if (!userNumber || userNumber.length < 2) {
      setIsCheck(false);
      alert("กรุณากรอกเลขล็อตเตอรี่ หรือกรอก 2 หลักขึ้นไป");

      return;
    }

    const userNumberString = userNumber.padStart(3, "0");
    const matches = [];

    if (result.firstPrize.includes(userNumberString)) {
      matches.push("รางวัลที่ 1");
    }

    if (result.nearFirstPrize.includes(userNumberString)) {
      matches.push("รางวัลเลขข้างเคียงรางวัลที่ 1");
    }

    if (result.secondPrize.includes(userNumberString)) {
      matches.push("รางวัลที่ 2");
    }

    if (result.lastTwoDigitsPrize.includes(userNumberString.slice(-2))) {
      matches.push("รางวัลเลขท้าย 2 ตัว");
    }

    setIsCheck(true);
    return setMatchedPrizes(matches);
  };

  return (
    <div className="w-full">
      <div className="w-fit px-3 py-3 rounded-t-lg bg-[#9400FF] text-white text-4xl font-bold">
        ตรวจรางวัลล็อตเตอรี่ Diversition
      </div>
      <div className="px-3 py-3 flex flex-col justify-center items-center shadow-sm shadow-gray-200">
        <form className="flex items-center">
          <input
            className="px-3 py-[13px] border"
            type="text"
            value={userNumber}
            onChange={handleUserInput}
            placeholder="กรอกเลขล็อตเตอรี่"
            maxLength={3}
          />
          <button
            className="my-3 px-3 py-3 rounded-r-lg bg-[#F4D160] text-white text-xl text-center hover:bg-[#FBEEAC] transition-all duration-300 cursor-pointer"
            type="button"
            onClick={checkUserNumber}
          >
            ตรวจสอบ
          </button>
        </form>
        {isCheck && (
          <div className="text-center">
            {matchedPrizes.length > 0 ? (
              <div>
                <h3 className="text-[#9400FF] text-3xl font-bold">
                  ยินดีด้วยคุณถูกรางวัล!
                </h3>
                <ul className="my-2 text-[#8250FF] text-2xl font-bold">
                  {matchedPrizes.map((prize: string) => (
                    <li key={prize}>{prize}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="text-red-500 text-3xl font-bold">ถูกกินจ้า!</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LotteryChecker;
