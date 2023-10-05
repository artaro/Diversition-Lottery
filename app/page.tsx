"use client";
import LotteryChecker from "@/components/LotteryChecker";
import DisplayLottery from "@/components/DisplayLottery";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LotteryChecker />
      <DisplayLottery />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <span className="text-sm font-normal">
          @ 2023 Diversition Lottery, artaro
        </span>
      </div>
    </main>
  );
}
