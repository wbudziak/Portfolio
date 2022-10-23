import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
  isOnFocus: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isOnFocus: true, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, isOnFocus: false, value: state.value };
  }
  if (action.type === "FOCUS") {
    return {
      isOnFocus: true,
      isTouched: state.isTouched,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return { isTouched: false, isOnFocus: false, value: "" };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputFocusHandler = (event) => {
    dispatch({ type: "FOCUS" });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    inputState,
    valueChangeHandler,
    inputBlurHandler,
    inputFocusHandler,
    reset,
  };
};

export default useInput;
