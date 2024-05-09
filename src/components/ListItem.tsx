import Icon from "./Icons";
import { ListItemProps } from "../types";

export default function ListItem({
  id,
  calories,
  name,
  borderColor,
  bgColor,
  dispatch,
}: ListItemProps) {
  return (
    <li
      className={` relative flex items-center justify-between ${borderColor} border-4 rounded-full p-3 mb-5 bg-my-white`}
    >
      <p
        className={`w-28 text-center text-sm font-light p-1 ${bgColor}  text-my-white rounded-full absolute top-0 left-6 -translate-y-1/2`}
      >
        {`${calories} Kcal`}
      </p>
      <p className=" text-xl text-my-black">{name}</p>
      <div className="flex gap-2">
        <div
          className="cursor-pointer"
          onClick={() => dispatch({ type: "delete-activity", payload: { id } })}
        >
          <Icon type="delete" color="#ef476fff" size={22} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => dispatch({ type: "set-activeId", payload: { id } })}
        >
          <Icon type="edit" color="#06d6a0ff" size={22} />
        </div>
      </div>
    </li>
  );
}
