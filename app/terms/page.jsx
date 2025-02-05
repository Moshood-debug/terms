import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Simplified from "@/components/TermsTabs/Simplified";
import Comprehensive from "@/components/TermsTabs/Comprehensive";

const Page = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="mb-8 text-xl font-medium">Terms and Conditions</div>

      <Tabs defaultValue="simplified" className="w-full">
        <TabsList>
          <TabsTrigger value="simplified">Simplified terms</TabsTrigger>
          <TabsTrigger value="comprehensive">Comprehensive</TabsTrigger>
        </TabsList>
        <hr className=" border-2  border-accent mt-1 w-full" />
        {/* <div className="bg-accent w-full "></div> */}
        <TabsContent value="simplified">
          <Simplified />
        </TabsContent>
        <TabsContent value="comprehensive">
          <Comprehensive />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
