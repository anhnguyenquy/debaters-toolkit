import { useState, useEffect } from "react"
export const Result = (props) => {
    const { result } = props
    return (
        <>
            {
                result &&
                <div className="resultCase">
                    <div>
                        {
                            Object.keys(result.breakCount).map(key => {
                                return (
                                    <div>{result.breakCount[key]} out of {result.totalCount[key]} teams on score {key}</div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}