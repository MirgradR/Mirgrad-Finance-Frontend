import React, { useState, useEffect } from 'react'

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    const lengthOfString = value.split('').length
    useEffect(
        () => {
            const handler = setTimeout(() => {
                if (lengthOfString >= 2 || lengthOfString === 0) {
                    setDebouncedValue(value)
                }   
            }, delay)
            return () => {
                clearTimeout(handler)
            }
        },
        [value]
    )
    return debouncedValue
}

export default useDebounce
