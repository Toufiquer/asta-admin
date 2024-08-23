/*
|-----------------------------------------
| setting up SiteNavLayoutResizable for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

'use client'

import Outlet from '@/components/common/outlet'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import SiteNav from './site-nav/site-nav'
import { useState } from 'react'
import Dashboard from './outlet-components/dashboard/Dashboard'
import ReturnOrderList from './outlet-components/return-order-list/Return-order-list'
import WebOrders from './outlet-components/web-orders/Web-orders'
import Search from './outlet-components/search/Search'
import Orders from './outlet-components/orders/Orders'

const SiteNavLayoutResizable = () => {
  const [isOpen, setIsOpen] = useState(true)
  const onLayout = (sizes: number[]) => {
    if (sizes[0] <= 6) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
  }
  const [currTitle, setCurrTitle] = useState('')
  let renderOutlet = <div />
  if (currTitle === '') {
    renderOutlet = (
      <Outlet title={`${currTitle ? currTitle : 'No item selected'} `} />
    )
  } else if (currTitle.toLocaleLowerCase() === 'dashboard') {
    renderOutlet = <Dashboard />
  } else if (currTitle.toLocaleLowerCase() === 'return order list') {
    renderOutlet = <ReturnOrderList />
  } else if (currTitle.toLocaleLowerCase() === 'web orders') {
    renderOutlet = <WebOrders />
  } else if (currTitle.toLocaleLowerCase() === 'search') {
    renderOutlet = <Search />
  } else if (currTitle.toLocaleLowerCase() === 'orders') {
    renderOutlet = <Orders />
  } else {
    renderOutlet = (
      <Outlet title={`${currTitle ? currTitle : 'No item selected'} `} />
    )
  }
  return (
    <main className="bg-slate-900 text-white">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[92vh]"
        onLayout={onLayout}
      >
        <ResizablePanel defaultSize={16}>
          <SiteNav isOpen={isOpen} setCurrTitle={setCurrTitle} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>{renderOutlet}</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
export default SiteNavLayoutResizable
