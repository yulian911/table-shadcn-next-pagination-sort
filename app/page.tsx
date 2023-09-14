import { DataTable } from '@/components/DataTable'
import { Payment, columns } from '@/components/ColumnsTable'
import Image from 'next/image'


async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52c",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },
    {
      id: "728ed52c",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52d",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52f",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52g",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52h",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52i",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52j",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52s",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52t",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52u",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },{
      id: "728ed52v",
      amount: 90,
      status: "pending",
      email: "XD@example.com",
    },
  ]
}

export default async function Home() {
    const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      <DataTable columns={columns} data={data} />
     
    </main>
  )
}
