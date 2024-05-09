import Icon from "./Icons";
import { FormProps } from "../types";

export default function Form({
  state,
  handleCloseForm,
  handleOnChange,
  handleSubmitForm,
}: FormProps) {
  const translate = state.isFormActived ? "left-0" : " left-full";

  function isValidInput() {
    const { foodOrExercise, calories } = state.tempActivity;
    return foodOrExercise.trim() !== "" && calories > 0;
  }

  return (
    <form
      className={` absolute top-[2%]  w-full p-5 bg-my-white flex flex-col items-center gap-5 rounded-3xl opacity-100 transition-all ${translate}`}
      onSubmit={handleSubmitForm}
    >
      <label className="flex flex-col text-center gap-2 w-full text-xl text-my-black">
        {state.selectedActivity === "food"
          ? "What have you eaten?"
          : "What exercise have you done?"}
        <input
          id="foodOrExercise"
          className=" text-xl py-1 px-4 rounded-full border-my-blue border-2"
          type="text"
          value={state.tempActivity.foodOrExercise}
          onChange={handleOnChange}
        />
      </label>
      <label className="flex flex-col text-center gap-2 w-full text-xl text-my-black">
        {state.selectedActivity === "food"
          ? "How many calories have you consumed?"
          : "How many calories have you burned?"}
        <input
          id="calories"
          className=" text-xl py-1 px-4 rounded-full border-my-blue border-2"
          type="number"
          value={
            state.tempActivity.calories === 0 ? "" : state.tempActivity.calories
          }
          onChange={handleOnChange}
        />
      </label>
      <input
        className=" py-2 px-7 bg-my-blue rounded-full text-my-white text-lg border-none cursor-pointer disabled:opacity-20"
        type="submit"
        value={state.activeId ? "Edit" : "Submit"}
        disabled={!isValidInput()}
      />
      <button
        className="absolute top-0 right-0 border-none bg-none p-3 rounded-full cursor-pointer"
        type="button"
        onClick={handleCloseForm}
      >
        <Icon type="close" color="#564e58ff" size={24} />
      </button>
    </form>
  );
}
