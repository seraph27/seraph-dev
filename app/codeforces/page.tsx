import { Problem, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Problem[]> {
  // Fetch data from your API here.
  return [
    {
        id: "728ed52f",
        solved: true,
        date: "2024/2/29",
        difficulty: 0,
        problems: "Even Odd Tree (LC 1609)",
        url: "https://leetcode.com/problems/even-odd-tree/description/"
    },
    {
        id: "728ed52d",
        solved: false,
        date: "2024/3/1",
        difficulty: 1600,
        problems: "Pho Restaurant (1938H)",
        url: "https://codeforces.com/problemset/problem/1938/H"
    },
    {
        id: "728ed52d",
        solved: true,
        date: "2024/3/4",
        difficulty: 1300,
        problems: "Game with Multiset (1913C)",
        url: "https://codeforces.com/contest/1913/problem/C"
    },
    {
        id: "728ed52d",
        solved: true,
        date: "2024/3/4",
        difficulty: 1300,
        problems: "Closest Cities (1922C)",
        url: "https://codeforces.com/contest/1922/problem/C"
    },
    {
        id: "728ed52d",
        solved: true,
        date: "2024/3/5",
        difficulty: 1300,
        problems: "Insert and Equalize (1902C)",
        url: "https://codeforces.com/contest/1902/problem/C"
    },
    {
        id: "728ed52d",
        solved: true,
        date: "2024/3/6",
        difficulty: 1400,
        problems: "Add, Divide and Floor (1901C)",
        url: "https://codeforces.com/contest/1901/problem/C"
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="pt-40 container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
