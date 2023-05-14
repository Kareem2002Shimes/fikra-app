import Controls from "@/src/components/dashboard/home/Controls";
import Layout from "@/src/components/dashboard/Layout";
import View from "@/src/components/dashboard/home/View";
function Dashboard() {
  return (
    <Layout>
      <main className="flex  w-full ">
        <Controls />
        <View />
      </main>
    </Layout>
  );
}

export default Dashboard;
