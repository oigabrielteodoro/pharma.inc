/* eslint-disable react/display-name */
import React, { useMemo, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { Column, useTable } from 'react-table'
import { FiEye } from 'react-icons/fi'
import { format } from 'date-fns'

import { Header, Table, Card, Button, Spacing } from 'ui'
import { api, withAppConfiguration } from 'config'
import { GetUsersResponse, User } from 'types'

import { SearchInput } from 'ui/SearchInput'

import * as S from './App.styled'

const genders = {
  male: 'Masculino',
  female: 'Feminino',
}

type UserParams = {
  page: number
  nationality: string
}

async function getUsers({ page, nationality }: UserParams) {
  return api
    .get<GetUsersResponse>('/api', {
      params: { results: 50, page, nat: nationality },
    })
    .then((response) => response.data)
}

function Home() {
  const [nationality, setNationality] = useState('')

  const { data, isRefetching, refetch } = useInfiniteQuery<GetUsersResponse>({
    queryKey: ['users'],
    queryFn: ({ pageParam }) => getUsers({ page: pageParam, nationality }),
    getNextPageParam: (lastPage) => lastPage.info.page + 1,
    getPreviousPageParam: (firstPage) => firstPage.info.page - 1,
  })

  const users = useMemo(
    () =>
      data?.pages.reduce(
        (accumulator, page) => [...accumulator, ...page.results],
        [] as User[],
      ) ?? [],
    [data],
  )

  const columns: Column<User>[] = useMemo(
    () => [
      {
        accessor: ({ name }) => `${name.first} ${name.last}`,
        Header: 'Full name',
      },
      { accessor: ({ gender }) => genders[gender] ?? gender, Header: 'Gender' },
      {
        accessor: ({ registered }) =>
          format(new Date(registered.date), "dd MMMM 'de' yyyy"),
        Header: 'Birth date',
      },
      {
        id: 'actions',
        Cell: () => (
          <Spacing marginLeft='auto'>
            <Button variant='icon'>
              <FiEye size={18} />
            </Button>
          </Spacing>
        ),
      },
    ],
    [],
  )

  const { rows, headerGroups, prepareRow, getTableProps, getTableBodyProps } =
    useTable({
      data: users,
      columns,
    })

  return (
    <>
      <Header />
      <S.Container>
        <Card as='section'>
          <S.CardHeader>
            <div>
              <h1 className='cardTitle'>Patients</h1>
              <p className='cardDescription'>
                See all {users.length} patients registered at your medical
                clinic:
              </p>
            </div>

            <SearchInput
              value={nationality}
              isLoading={isRefetching}
              onSearch={refetch}
              onChange={(event) => setNationality(event.currentTarget.value)}
            />
          </S.CardHeader>

          <Table
            rows={rows}
            headerGroups={headerGroups}
            prepareRow={prepareRow}
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
          />
        </Card>
      </S.Container>
    </>
  )
}

export const App = withAppConfiguration(Home)
