import { columns, DataTable } from "@/components/data-table";
import { Task } from "@/lib/definitions";
import TaskCreate from "@/components/task_create";
import { getCookie, getCookies } from "cookies-next";
import { cookies } from "next/headers";
async function getData(): Promise<Task[]> {
  // Fetch data from your API here.
  return [
    {
      status: "completed",
      username: "jaedson123",
      task: 101,
      email: "jaedson123@example.com",
      task_description: "Finalizar o relatório do projeto Oh My Movies",
    },
    {
      status: "pendent",
      username: "maria_santos",
      task: 102,
      email: "maria.santos@example.com",
      task_description: "Revisar o código do backend",
    },
    {
      status: "completed",
      username: "joao_oliveira",
      task: 103,
      email: "joao.oliveira@example.com",
      task_description: "Preparar o ambiente de testes",
    },
    {
      status: "pendent",
      username: "ana_costa",
      task: 104,
      email: "ana.costa@example.com",
      task_description: "Documentar a arquitetura do sistema",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();
  const token = cookies()?.get("role")?.value;

  return (
    <div className="container mx-auto py-10">
      {token === "admin" ? <TaskCreate /> : null}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
