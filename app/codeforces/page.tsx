import { Problem, columns } from "./columns"
import { DataTable } from "./data-table"
import codeforcesData from "@/data/codeforces";

async function getData(): Promise<Problem[]> {
  return codeforcesData.map((problem: Problem) => {
    return {
      id: problem.id,
      date: problem.date,
      solved: problem.solved,
      problems: problem.problems,
      difficulty: problem.difficulty,
      url: problem.url,
      resources: problem.resources,
    };
  });
}

export default async function DemoPage() {
  const data = await getData()

  return (  
    <div className="pt-40 container mx-auto py-10">
      <div className="divide-y divide-dashed divide-indigo-600 dark:divide-zinc-600 dark:text-zinc-300">
        <p>This is a table of my latest solved problems on sites like codeforces, cses, atcoder and more!</p>
      </div>
      <div >
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
