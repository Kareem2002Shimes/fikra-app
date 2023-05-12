import Controls from "@/components/dashboard/home/Controls";
import Layout from "@/components/dashboard/Layout";
import View from "@/components/dashboard/home/View";
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
