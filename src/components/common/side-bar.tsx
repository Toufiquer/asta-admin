/*
|-----------------------------------------
| setting up SideBar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

import { ScrollArea } from "@/components/ui/scroll-area";

const SideBar = () => {
  return (
    <main>
      <ScrollArea className="h-[68vh] w-auto rounded-md p-4">
        {[1, 2, 3, 4, 5].map((curr) => (
          <div key={curr}>{curr}</div>
        ))}
        <div className="pb-12" />
      </ScrollArea>
    </main>
  );
};
export default SideBar;
