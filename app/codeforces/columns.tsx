"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/shadcn/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu"

import { cn } from "@/scripts/utils"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Problem = {
  id: string
  date: string
  solved: boolean
  problems: string
  difficulty: number
  url: string
  resources: string
}
export function getStatusColor(solved: boolean) {
    return solved ? "text-green-700 dark:text-green-400": "text-red-700 dark:text-red-400";
}

export const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
  },
  {
    accessorKey: "problems",
    header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
            Problems
            <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
    cell: ({row}) => {
        const problem = row.original;
        const color = getStatusColor(problem.solved);
        return (
            <div className={color}>{problem.problems}</div>
        );
    }
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
            Difficulty
            <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
  },
  {
    accessorKey: "resources",
    header: ({ column }) => {
      	return (
        	<Button
			variant="ghost"
			onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
			Resources
			<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
  		)
	},
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const problem = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-zinc-400">Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => window.open(problem.url)}>
              Show Problem
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]