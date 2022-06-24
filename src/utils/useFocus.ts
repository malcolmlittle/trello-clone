import { useEffect, useRef } from "react";

// define the hook - useRef gives us access to the rendered input element
export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null)

    // when the component using this hook gets mounted
    // we will trigger the focus method on that element
    useEffect(() => {
        ref.current?.focus()
    }, [])

    return ref
}