/*
|-----------------------------------------
| setting up Orders for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: admin, August, 2024
|-----------------------------------------
*/

import { Button } from '@/components/ui/button'
import DemoTable from '@/components/common/table/table'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CiCircleChevRight } from 'react-icons/ci'
import { CiSaveDown1 } from 'react-icons/ci'

const allDays: string[] = [
  'Today',
  'Last 2 Days',
  'Last 3 Days',
  'Last 30 Days',
  'Last 90 Days',
  'Last 365 Days',
  'All Days',
]

const Orders = () => {
  const [searchText, setSearchText] = useState('')
  const [searchText2, setSearchText2] = useState('')
  return (
    <main className="w-full flex flex-col">
      <ScrollArea className="h-[96vh]">
        <div className="pt-4 flex flex-col border rounded-lg mt-4 mx-8">
          <div className="px-4">
            <div className="w-full flex items-center gap-4 max-w-[600px] mb-8 justify-between">
              <Input
                placeholder="Invoice Number"
                value={searchText2}
                onChange={(event) => setSearchText2(event.target.value)}
                className="w-full bg-transparent"
              />
              <DropdownMenu>
                <DropdownMenuTrigger className="">
                  <Button className="border w-full">
                    Invoice <CiSaveDown1 className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 text-slate-200">
                  {['Invoice 1', 'Invoice 2', 'Invoice 3', 'Invoice 4'].map(
                    (d, idx) => (
                      <DropdownMenuLabel
                        key={d + idx}
                        className="bg-transparent hover:bg-slate-900 cursor-pointer"
                      >
                        {d}
                      </DropdownMenuLabel>
                    )
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <p className="w-full flex items-center justify-between cursor-pointer hover:text-slate-100 ">
                      Custom <CiCircleChevRight />
                    </p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="border max-w-[200px]">Search</Button>
            </div>
          </div>
          <div className="px-4 pb-8 flex flex-col">
            <h2 className="text-xl font-semibold">Web Order Search</h2>
            <Input
              placeholder="Search..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              className="w-full bg-transparent"
            />
            <p className="text-red-500 text-sm pt-1">
              type at least 11 character to search
            </p>
          </div>
          <div className="flex w-full items-center justify-between px-4"></div>
          <DemoTable viewTotalCount={true} />
        </div>
      </ScrollArea>
    </main>
  )
}
export default Orders
