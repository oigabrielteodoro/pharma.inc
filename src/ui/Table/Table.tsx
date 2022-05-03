import React from 'react'
import { UseTableInstanceProps } from 'react-table'

import * as S from './Table.styled'

type Props<T extends object> = Pick<
  UseTableInstanceProps<T>,
  'getTableProps' | 'getTableBodyProps' | 'prepareRow' | 'headerGroups' | 'rows'
>

export function Table<T extends object>({
  rows,
  headerGroups,
  prepareRow,
  getTableProps,
  getTableBodyProps,
}: Props<T>) {
  return (
    <S.Container {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const headerGroupProps = headerGroup.getHeaderGroupProps()

          return (
            <tr {...headerGroupProps} key={headerGroupProps.key}>
              {headerGroup.headers.map((column) => {
                const headerProps = column.getHeaderProps()

                return (
                  <th {...headerProps} key={headerProps.key}>
                    {column.render('Header')}
                  </th>
                )
              })}
            </tr>
          )
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          const rowProps = row.getRowProps()
          return (
            <tr {...rowProps} key={rowProps.key}>
              {row.cells.map((cell) => {
                const cellProps = cell.getCellProps()

                return (
                  <td {...cellProps} key={cellProps.key}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </S.Container>
  )
}
