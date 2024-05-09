import MainButton from "./MainButton";
import StatSummary from "./StatSummary";
import Form from "./Form";
import { useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { CenterBoxProps } from "../types";

export default function CenterBox({ dispatch, state }: CenterBoxProps) {
  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter(
        (actv) => actv.id === state.activeId
      )[0];
      const activityAction = selectedActivity.category;
      dispatch({
        type: "save-temporary-activity",
        payload: { tempActivity: selectedActivity },
      });
      handleDisplayForm(activityAction);
    }
  }, [state.activeId]);

  const caloriesConsumed = useMemo(
    () =>
      state.activities.reduce(
        (tot, act) =>
          act.category === "food" ? tot + Number(act.calories) : tot,
        0
      ),
    [state.activities]
  );

  const caloriesBurned = useMemo(
    () =>
      state.activities.reduce(
        (tot, act) =>
          act.category === "exercise" ? tot + Number(act.calories) : tot,
        0
      ),
    [state.activities]
  );

  const caloriesGap = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [state.activities]
  );

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;

    dispatch({
      type: "save-temporary-activity",
      payload: {
        tempActivity: {
          ...state.tempActivity,
          [id]: value,
        },
      },
    });
  }

  function handleDisplayForm(action: string) {
    dispatch({ type: "active-form", payload: { active: true } });

    dispatch({
      type: "select-activity",
      payload: { selectedActivity: action },
    });
  }

  function handleCloseForm() {
    dispatch({ type: "active-form", payload: { active: false } });
    dispatch({ type: "select-activity", payload: { selectedActivity: "" } });
    dispatch({ type: "set-activeId", payload: { id: "" } });
    dispatch({
      type: "save-temporary-activity",
      payload: {
        tempActivity: {
          foodOrExercise: "",
          calories: 0,
        },
      },
    });
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      type: "save-activity",
      payload: {
        newActivity: {
          ...state.tempActivity,
          category: state.selectedActivity,
          id: uuidv4(),
        },
      },
    });

    handleCloseForm();
  }

  return (
    <div className="w-full p-5 flex flex-col justify-between relative">
      <div className="w-full flex gap-5 relative">
        <MainButton type={"food"} handleDisplayForm={handleDisplayForm} />
        <MainButton type={"exercise"} handleDisplayForm={handleDisplayForm} />
      </div>

      <div id="stat-box" className=" relative w-full h-1/2 flex justify-around">
        <StatSummary
          value={caloriesConsumed}
          type={"intake"}
          color={"#06d6a0ff"}
          boxClasses={"border-my-green w-[150px] h-[150px]"}
          textClass={"text-my-green"}
        />
        <StatSummary
          value={caloriesBurned}
          type={"burned"}
          color={"#ef476fff"}
          boxClasses={"border-my-pink w-[150px] h-[150px]"}
          textClass={"text-my-pink"}
        />
        <StatSummary
          value={caloriesGap}
          type={"gap"}
          color={"#ffd166ff"}
          boxClasses={
            "border-my-yellow absolute bottom-0 right-1/2 translate-x-1/2 w-[140px] h-[140px]"
          }
          textClass={"text-my-yellow"}
        />
      </div>
      <Form
        state={state}
        handleCloseForm={handleCloseForm}
        handleOnChange={handleOnChange}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}
