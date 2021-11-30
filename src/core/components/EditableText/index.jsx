import { useState, useEffect, useRef } from "react"
import _ from "lodash"
import './style.css'
export const EditableText = (props) => {
    const { defaultValue, onUpdate, style } = props;
    const [value, setValue] = useState(defaultValue)
    const onUpdateWithDebounce = _.debounce(onUpdate, 500)
    const inputRef = useRef(null)
    const unfocusInput = (e) => {
        if (e.keyCode == 13) inputRef.current.blur();
    }
    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])
    useEffect(() => {
        onUpdateWithDebounce(value);
    }, [value])
    useEffect(() => {
        inputRef && inputRef.current &&
            inputRef.current.addEventListener('keyup', unfocusInput);
    }, [inputRef])
    return (
        <input ref={inputRef} className="editable_text" type="text" spellCheck={false} value={value} style={style} onChange={(e) => setValue(e.target.value)} />
    )
}