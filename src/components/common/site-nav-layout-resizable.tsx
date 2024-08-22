/*
|-----------------------------------------
| setting up SiteNavLayoutResizable for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Outlet from "@/components/common/outlet";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SiteNav from "./site-nav/site-nav";
import { useState } from "react";

const SiteNavLayoutResizable = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onLayout = (sizes: number[]) => {
    if (sizes[0] <= 6) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  const [currTitle,setCurrTitle]=useState("")
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
        <ResizableHandle  />
        <ResizablePanel>
          <Outlet title={`${currTitle ? currTitle : "No item selected"} `} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
export default SiteNavLayoutResizable;
