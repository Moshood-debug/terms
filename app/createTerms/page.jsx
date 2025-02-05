import ComplianceTab from "@/components/createTabs/complianceTab";
import CreateTab from "@/components/createTabs/createTab";
import DraftTab from "@/components/createTabs/DraftTab";
import PublishTabs from "@/components/createTabs/publishTabs";
import TemplateTab from "@/components/createTabs/TemplateTab";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs2";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto py-11">
      <div className="">
        <Tabs
          defaultValue="t&c"
          className="flex flex-col  md:flex-row gap-[60px] h-[650px] "
        >
          <TabsList className="flex flex-col bg-[#0841c7]/10 w-full max-w-[250px]  mx-auto lg:mx-0">
            <div className="bg-white p-3 flex gap-3 shadow rounded-[8px] items-center">
              <div className="">
                <div className="w-10 h-10 rounded-full  overflow-hidden">
                  <Image
                    src="/img/profile.jpg"
                    alt="User Avatar"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="">
                <p className="m-0 text-md font-medium">First name</p>
                <p className="m-0 text-md font-normal">Second name</p>
              </div>
            </div>

            <TabsTrigger value="t&c">Create T&Cs</TabsTrigger>
            <TabsTrigger value="publish">Publish T&Cs</TabsTrigger>

            <hr className=" border-1.5  border-gray-400 my-2 w-full" />

            <TabsTrigger value="compliance">Sent to compliance</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>

            <hr className=" border-1.5  border-gray-400 my-2 w-full" />

            <TabsTrigger value="template">Templates</TabsTrigger>
          </TabsList>

          <div className=" w-full">
            <TabsContent value="t&c" className="w-full">
              <CreateTab />
            </TabsContent>
            <TabsContent value="publish" className="w-full">
              <PublishTabs />
            </TabsContent>
            <TabsContent value="compliance" className="w-full">
              <ComplianceTab />
            </TabsContent>
            <TabsContent value="draft" className="w-full">
              <DraftTab />
            </TabsContent>
            <TabsContent value="template" className="w-full">
              <TemplateTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
