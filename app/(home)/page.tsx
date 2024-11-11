import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import Navbar from "../_components/navbar";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";

interface HomeProps {
  searchParams: {
    month: string;
  }
}

const Home = async ({searchParams : { month }} : HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const monthInvalid = !month || !isMatch(month, "MM")
  if(monthInvalid) {
    redirect("?month=01");
  }

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>

        <SummaryCards month={month} />
      </div>
    </>
  );
};

export default Home;