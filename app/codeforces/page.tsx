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
    };
  });
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="pt-40 container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
