import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import cn from 'classnames';

import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'

//styles
import './styles.scss';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

type ColumnItemType = {
  key: string;
  value: string;
}

interface ResponsiveTableProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  columns: ColumnItemType[];
  data: any[];
}

export const ResponsiveTable: FC<ResponsiveTableProps> = ({ className, columns, data }) => {
  const tableClassName = cn(
    'table',
    className
  );

  useEffect(() => {
    console.log(data)
  })

  return (
    <Table className={tableClassName}>
      <Thead>
        <Tr>
          {
            columns.map((item, index) => {
              return <Th key={index}>{item.value}</Th>
            })
          }
        </Tr>
      </Thead>
      <Tbody>
        {
          data.map((item, index) => (
            <Tr key={index}>
              {
                columns.map((columnItem, index) => (
                  <Td key={index}>
                    {String(item[columnItem.key])}
                  </Td>
                ))
              }
            </Tr>
          ))
        }
      </Tbody>
    </Table>
  );
};
