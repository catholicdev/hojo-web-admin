import { AuthContext } from "@web/context/AuthContext";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
