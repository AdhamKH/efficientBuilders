import dynamic from "next/dynamic";
import PageLoader from "@/shared/loaders/pageLoader";
import HomePage from "./home/page";
import { redirect } from "next/navigation";

// const HomePage = dynamic(() => import("./home/page"), {
//   loading: () => <PageLoader></PageLoader>,
//   ssr: false,
// });
export default function Home() {
  redirect("/home");

  return <>{/* <HomePage /> */}</>;
}
