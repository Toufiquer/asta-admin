/*
|-----------------------------------------
| setting up ReturnOrderList for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: admin, August, 2024
|-----------------------------------------
*/

import { Button } from '@/components/ui/button'
import DemoTable from '@/components/common/table/table'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ComboboxDemo } from './Combobox'

const ReturnOrderList = () => {
  return (
    <main className="w-full flex flex-col">
      <ScrollArea className="h-[96vh]">
        <div className="pt-4 flex flex-col border rounded-lg mt-4 mx-8">
          <div className="px-4 pb-8">
            <ComboboxDemo />
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <h2 className="text-xl font-semibold">Return Order List</h2>
            <Button className="border">+</Button>
          </div>
          <DemoTable />
        </div>
      </ScrollArea>
    </main>
  )
}
export default ReturnOrderList
