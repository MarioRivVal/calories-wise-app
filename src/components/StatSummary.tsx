import Icon from "./Icons";
import { StatSummaryProps } from "../types";

export default function StatSummary({
  value,
  type,
  color,
  boxClasses,
  textClass,
}: StatSummaryProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-my-white border-4 ${boxClasses} p-7 rounded-full`}
    >
      <p className=" text-my-black text-3xl font-bold">
        {value}
        <span className=" text-lg font-normal">Kcal</span>
      </p>
      <p className={` text-2xl flex flex-col items-center ${textClass}`}>
        {type}
        <span>
          <Icon type={type} color={color} size={34} />
        </span>
      </p>
    </div>
  );
}
