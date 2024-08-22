/*
|-----------------------------------------
| setting up Dashboard for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: admin, August, 2024
|-----------------------------------------
*/

import { Button } from '@/components/ui/button'
import DemoTable from '@/components/common/table/table'
import { ScrollArea } from '@/components/ui/scroll-area'

const Dashboard = () => {
  return (
    <main className="w-full flex flex-col">
      <ScrollArea className="h-[96vh]">
        <div className="p-4 border rounded-lg pt-4 px-4 mx-8 mt-8">
          <h2 className="text-xl font-semibold">Shortcuts</h2>
          <div className="w-full pt-4 flex items-center justify-between gap-4">
            <Button className="hover:bg-slate-950 border w-full">
              New Order
            </Button>
            <Button className="hover:bg-slate-950 border w-full">
              New Pre Order
            </Button>
            <Button className="hover:bg-slate-950 border w-full">Search</Button>
            <Button className="hover:bg-slate-950 border w-full">
              New Advance
            </Button>
          </div>
        </div>
        <div className="pt-4 flex flex-col border rounded-lg mt-4 mx-8">
          <div className="flex w-full items-center justify-between px-4">
            <h2 className="text-xl font-semibold">Asked for Advance</h2>
            <Button className="border">+</Button>
          </div>
          <DemoTable />
        </div>
      </ScrollArea>
    </main>
  )
}
export default Dashboard
