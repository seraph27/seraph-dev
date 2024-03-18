"use client"

import { Table } from "@tanstack/react-table"
import { Input } from "@/components/shadcn/input"
import { resources } from "./data"
import { DataTableFacetedFilter } from "./data-table-filter" 

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter problems..."
          value={(table.getColumn("problems")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("problems")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("resources") && (
          <DataTableFacetedFilter
            column={table.getColumn("resources")}
            title="Resources"
            options={resources}
          />
        )}       
      </div>
    </div>
  )
}