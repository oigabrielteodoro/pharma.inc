import React from 'react'
import { FiUser } from 'react-icons/fi'

import * as S from './Header.styled'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <S.Logo aria-label='pharma inc'>
          Pharma <span>Inc</span>
        </S.Logo>
        <S.User>
          <div className='userInfo'>
            <strong>Gabriel Teodoro</strong>
            <small>Front-End</small>
          </div>
          <S.Avatar aria-label='user avatar'>
            <FiUser size={24} />
          </S.Avatar>
        </S.User>
      </S.Content>
    </S.Container>
  )
}
