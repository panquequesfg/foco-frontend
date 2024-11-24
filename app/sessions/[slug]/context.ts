import type {SessionShow} from "@/lib/api/sessions/types";
import {createContext} from "react";

interface SessionContextType {
  session: SessionShow | undefined;
}
export default createContext<SessionContextType>({ session: undefined });
