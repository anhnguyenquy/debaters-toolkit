import { useState, useEffect } from "react"
import Select from 'react-select';
import { customTheme } from "../../helpers/data/customTheme"
import { isObject } from '../../helpers/isObject'
import './style.css'
export const EditableSelector = (props) => {
    const { defaultSelectValue, onUpdate, style, options, defaultValue, multi, components, styles, placeholder, isSearchable } = props;
    const [value, setValue] = useState(defaultValue)
    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])
    useEffect(() => {
        onUpdate(value);
    }, [value])
    const updateValue = (val) => {
        if (multi) {
            if (Array.isArray(defaultValue)) {
                if (val != undefined && val != null) {
                    if (val.length == 0) {
                        setValue([])
                    }
                    else {
                        let tempValue = []
                        val.forEach(item => {
                            tempValue.push(item.value)
                        })
                        setValue(tempValue)
                    }
                }
            }
            else if (isObject(defaultValue)) {
                if (val != undefined && val != null) {
                    if (val.length == 0) {
                        setValue({})
                    }
                    else {
                        let newValue = {}
                        val.forEach(item => {
                            Object.keys(item.value).forEach(key => {
                                newValue[`${key}`] = item.value[`${key}`]
                            })
                        })
                        setValue(newValue)
                    }
                }
            }
        }
        else {
            if (val == undefined || val == null) {
                setValue("")
            }
            else {
                setValue(val.value)
            }
        }
    }
    return (
        <>
            {
                multi ?
                    <Select className="editable_selector"
                        isMulti={true}
                        theme={customTheme}
                        style={style}
                        options={options}
                        defaultValue={defaultSelectValue}
                        onChange={updateValue}
                        components={components}
                        styles={styles}
                        isSearchable={isSearchable} //false
                        placeholder={placeholder}
                    />
                    :
                    <Select className="editable_selector"
                        isMulti={false}
                        theme={customTheme}
                        style={style}
                        options={options}
                        defaultValue={defaultSelectValue}
                        onChange={updateValue}
                        isClearable={true}
                        components={components}
                        styles={styles}
                        placeholder={placeholder}
                        isSearchable={isSearchable}
                    />
            }
        </>
    )
}