import { Dispatch } from "react";

export type IconProps = {
  type: string;
  color: string;
  size: number;
  iconClass?: string;
};

export type TempActivity = {
  foodOrExercise: string;
  calories: number;
};

export type Activity = TempActivity & {
  category: string;
  id: string;
};

export type CenterBoxProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
};

export type StatSummaryProps = {
  value: number;
  type: string;
  color: string;
  boxClasses: string;
  textClass: string;
};

export type ListContainerProps = {
  active: boolean;
  data: Activity[];
  titleClass: string;
  type: string;
  color: string;
  dispatch: Dispatch<ActivityActions>;
};

export type FormProps = {
  state: ActivityState;
  handleCloseForm: () => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ListItemProps = {
  id: string;
  calories: number;
  name: string;
  borderColor: string;
  bgColor: string;
  dispatch: Dispatch<ActivityActions>;
};

// activityReducer Types

export type ActivityActions =
  | {
      type: "active-intake-list";
      payload: { active: boolean };
    }
  | {
      type: "active-burned-list";
      payload: { active: boolean };
    }
  | {
      type: "active-form";
      payload: { active: boolean };
    }
  | {
      type: "select-activity";
      payload: { selectedActivity: string };
    }
  | {
      type: "save-temporary-activity";
      payload: { tempActivity: TempActivity };
    }
  | {
      type: "save-activity";
      payload: { newActivity: Activity };
    }
  | {
      type: "set-activeId";
      payload: { id: Activity["id"] };
    }
  | {
      type: "delete-activity";
      payload: { id: Activity["id"] };
    };

export type ActivityState = {
  isIntakeListActived: boolean;
  isBurnedListActived: boolean;
  isFormActived: boolean;
  selectedActivity: string;
  tempActivity: TempActivity;
  activities: Activity[];
  activeId: Activity["id"];
};
