import React, { InputHTMLAttributes } from 'react'
import { FiSearch } from 'react-icons/fi'

import { LoadIcon } from 'ui'

import * as S from './SearchInput.styled'

type Props = {
  isLoading: boolean
  onSearch: () => void
} & InputHTMLAttributes<HTMLInputElement>

export function SearchInput({
  onSearch,
  disabled = false,
  isLoading = false,
  ...props
}: Props) {
  return (
    <S.Container>
      <input
        placeholder='Search by nationality'
        disabled={disabled ?? isLoading}
        {...props}
      />
      <button onClick={onSearch}>
        {isLoading ? <LoadIcon /> : <FiSearch size={20} />}
      </button>
    </S.Container>
  )
}
