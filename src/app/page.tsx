/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: admin, August, 2024
|-----------------------------------------
*/

import Header from "@/components/common/header";
import Outlet from "@/components/common/outlet";
import SideBar from "@/components/common/side-bar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="bg-slate-900 text-white">
      <div className="pb-[13px]">
      <Header />
      </div>
      <ResizablePanelGroup direction="horizontal" className="min-h-[92vh]">
        <ResizablePanel defaultSize={30}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle  />
        <ResizablePanel>
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
      <ToastContainer />
    </main>
  );
}
