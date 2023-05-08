import { SettingsContext, SettingsContextValue } from "@web/@core/context/settingsContext";
import { useContext } from "react";

export const useSettings = (): SettingsContextValue => useContext(SettingsContext);
