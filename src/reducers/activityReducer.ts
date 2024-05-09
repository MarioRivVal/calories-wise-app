import { Activity, ActivityActions, ActivityState } from "../types";

const localStorageActivities = (): Activity[] => {
  const activities = localStorage.getItem("activities");
  return activities ? JSON.parse(activities) : [];
};

export const initialState: ActivityState = {
  isIntakeListActived: false,
  isBurnedListActived: false,
  isFormActived: false,
  selectedActivity: "",
  tempActivity: {
    foodOrExercise: "",
    calories: 0,
  },
  activities: localStorageActivities(),
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "active-intake-list") {
    return {
      ...state,
      isIntakeListActived: action.payload.active,
    };
  }

  if (action.type === "active-burned-list") {
    return {
      ...state,
      isBurnedListActived: action.payload.active,
    };
  }

  if (action.type === "active-form") {
    return {
      ...state,
      isFormActived: action.payload.active,
    };
  }

  if (action.type === "select-activity") {
    return {
      ...state,
      selectedActivity: action.payload.selectedActivity,
    };
  }

  if (action.type === "save-temporary-activity") {
    return {
      ...state,
      tempActivity: action.payload.tempActivity,
    };
  }

  if (action.type === "save-activity") {
    let updatedActivity: Activity[] = [];

    if (state.activeId) {
      updatedActivity = state.activities.map((act) =>
        act.id === state.activeId ? action.payload.newActivity : act
      );
    } else {
      updatedActivity = [...state.activities, action.payload.newActivity];
    }

    return {
      ...state,
      activities: updatedActivity,
    };
  }

  if (action.type === "set-activeId") {
    return {
      ...state,
      activeId: action.payload.id,
      isBurnedListActived: false,
      isIntakeListActived: false,
    };
  }

  if (action.type === "delete-activity") {
    const updatedActivities = state.activities.filter(
      (act) => act.id !== action.payload.id
    );

    return {
      ...state,
      activities: updatedActivities,
    };
  }

  return state;
};
