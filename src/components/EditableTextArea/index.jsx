import { useState, useEffect, useRef } from "react"
import TextareaAutosize from "react-textarea-autosize"
import _ from "lodash"
import './style.css'
export const EditableTextArea = (props) => {
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
        <TextareaAutosize spellCheck={false} ref={inputRef} className="editable_text_area" type="text" value={value} style={style} onChange={(e) => setValue(e.target.value)} />
    )
}