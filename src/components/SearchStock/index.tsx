import React, { useEffect, useState } from 'react'
import { PAGINATION_CONSTANT } from '../../constants/constants'
import useDebounce from '../../hooks/useDebounce'
import { SearchInput } from '../../templates'
import './style.css'

interface Props {
    setValue: (argo: string) => void,
    setOffset: (argo: number) => void
}

const SearchStock: React.FC<Props> = ({ setValue, setOffset }) => {
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchTerm = useDebounce(searchValue, 1000)

    useEffect(
        () => {
            setValue(debouncedSearchTerm)
            setOffset(PAGINATION_CONSTANT.OFFSET)
        },
        [debouncedSearchTerm]
    )

    return (
        <div className='main-stocks__search'>
            <SearchInput onChange={(e: any) => setSearchValue(e.target.value)} placeholder={'Search stocks'} />
        </div>
    )
}

export default SearchStock
