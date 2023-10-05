import RandomLottery from "@/components/RandomLottery";
import LotteryChecker from "@/components/LotteryChecker";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full items-center justify-center"></div>
      <RandomLottery />
      {/* <LotteryChecker /> */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        @ 2023
      </div>
    </main>
  );
}
