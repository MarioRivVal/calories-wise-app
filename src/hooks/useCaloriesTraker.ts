import { useReducer } from "react";
import { activityReducer, initialState } from "../reducers/activityReducer";

export default function useCaloriesTraker() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  function displayIntakeList() {
    dispatch({ type: "active-intake-list", payload: { active: true } });
    dispatch({ type: "active-burned-list", payload: { active: false } });
  }
  function displayBurnedList() {
    dispatch({ type: "active-burned-list", payload: { active: true } });
    dispatch({ type: "active-intake-list", payload: { active: false } });
  }
  function backToHome() {
    dispatch({ type: "active-burned-list", payload: { active: false } });
    dispatch({ type: "active-intake-list", payload: { active: false } });
  }

  return {
    state,
    dispatch,
    displayIntakeList,
    displayBurnedList,
    backToHome,
  };
}
