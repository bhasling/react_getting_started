import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    currentCityId: null,
});
export { useGlobalState, setGlobalState };
