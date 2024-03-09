import { Problem, columns } from "./columns"
import { DataTable } from "./data-table"
import { promises as fs } from 'fs';

async function getData(): Promise<Problem[]> {
  const file = await fs.readFile('././data/codeforces.json', 'utf8');
  const data = JSON.parse(file);
  return data.map((problem: Problem) => {
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
