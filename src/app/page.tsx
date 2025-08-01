import Layout from "@/components/Layout";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <Layout showHeader={false}>
      <HomePage />
    </Layout>
  );
}
