import { useContext } from "react";
import { ContextProvider } from "../../context";

function useProvider() {
    const context = useContext(ContextProvider);
    return context;
}

export default useProvider;
