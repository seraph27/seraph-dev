import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn/table'

export function ReusableTable({ caption, headers, data, footerData, maxWidth }) {
  const containerStyle = {
    maxWidth: maxWidth || '100%',
    margin: '0 auto',
  }

  const renderCell = (cell) => {
    if (typeof cell === 'object' && cell.text && cell.link) {
      return (
        <a href={cell.link} target="_blank" rel="noopener noreferrer">
          {cell.text}
        </a>
      )
    }
    return cell
  }

  return (
    <div style={containerStyle}>
      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index} className={header.className}>
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow>
              {Object.values(row).map((cell: any, cellIndex) => (
                <TableCell key={cellIndex} className={headers[cellIndex]?.cellClassName}>
                  {renderCell(cell)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {footerData && (
          <TableFooter>
            <TableRow>
              {footerData.map((cell, index) => (
                <TableCell key={index} colSpan={cell.colSpan} className={cell.className}>
                  {cell.content}
                </TableCell>
              ))}
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  )
}
