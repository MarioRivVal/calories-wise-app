import { ListContainerProps } from "../types";
import Icon from "./Icons";
import ListItem from "./ListItem";

export default function ListContainer({
  data,
  titleClass,
  type,
  color,
  active,
  dispatch,
}: ListContainerProps) {
  const borderColor =
    color === "#06d6a0ff" ? "border-my-green" : "border-my-pink";
  const bgColor = color === "#06d6a0ff" ? "bg-my-green" : "bg-my-pink";

  const translate =
    type === "intake" ? "translate-x-full" : "-translate-x-full";

  return (
    <div
      className={`w-full p-5 flex flex-col items-center z-50 bg-my-black transition-all ${
        active && translate
      }`}
    >
      <div className="flex items-center gap-1 mb-7">
        <h3 className={` text-2xl ${titleClass} font-medium`}>{type}</h3>
        <Icon type={type} color={color} size={30} />
      </div>
      <ul id="list" className="w-full overflow-y-scroll pt-5">
        {data.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            calories={item.calories}
            name={item.foodOrExercise}
            borderColor={borderColor}
            bgColor={bgColor}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
}
