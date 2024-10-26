import {useState} from "react";

/**
 * @param {boolean} initialValue
 */
export function useToggle(initialValue = false) {
    const [state, setState] = useState(initialValue);
    const toggle = () => setState((value) => !value);

    return [
        state,
        toggle
    ]
}