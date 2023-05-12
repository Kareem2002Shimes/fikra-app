import Controls from "@/components/dashboard/home/Controls";
import Layout from "@/components/dashboard/Layout";
import View from "@/components/dashboard/home/View";
import TestContextProvider from "@/components/dashboard/home/TestContext";
function Dashboard() {
  return (
    <Layout>
      <main className="flex  w-full ">
        <TestContextProvider>
          <Controls />
          <View />
        </TestContextProvider>
      </main>
    </Layout>
  );
}

export default Dashboard;
