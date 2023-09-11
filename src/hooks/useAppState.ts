import { useContext } from "react";
import { AppStateContext } from "../state/AppStateContext";

export const useAppState = () => useContext(AppStateContext);

export default useAppState;
