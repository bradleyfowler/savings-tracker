import DepositCard from "@/components/DepositCard/DepositCard";
import GoalCard from "@/components/GoalCard/GoalCard";
import Header from "@/components/Header/Header";
import ListControls from "@/components/ListControls/ListControls";
import MetricCard from "@/components/MetricCard/MetricCard";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-4">
        <section>
          <MetricCard title="Total savings" value="£11,249.00" />
          <MetricCard title="Active goals" value="7" />
          <MetricCard title="Goals completed" value="2" />
          <DepositCard />
        </section>
        <section>
          <h1>Your goals</h1>
          <ListControls />
          <GoalCard
            title="Macbook Pro M4"
            progress={76}
            amount="£1,900 of £2,499"
            dueDate="1 Jun 2026"
          />
          <GoalCard
            title="Mechanical Keyboard"
            progress={100}
            amount="£350 of £350"
            dueDate="15 March 2026"
          />
          <GoalCard
            title="React Conf Trip"
            progress={72}
            amount="£1,299 of £1,800"
            dueDate="15 May 2026"
          />
          <GoalCard
            title="Anniversary Trip to Italy"
            progress={60}
            amount="£2,400 of £4,000"
            dueDate="15 Sep 2026"
          />
          <GoalCard
            title="4K Monitor Upgrade"
            progress={75}
            amount="£450 of £600"
            dueDate="30 Apr 2026"
          />
          <GoalCard
            title="Emergency Fund"
            progress={80}
            amount="£4,000 of £5,000"
            dueDate="No deadline"
          />
          <GoalCard
            title="New Road Bike"
            progress={57}
            amount="£850 of £1,500"
            dueDate="1 May 2026"
          />
          <GoalCard
            title="Ergonomic Chair"
            progress={0}
            amount="£0 of £1,200"
            dueDate="1 Aug 2026"
          />
        </section>
      </main>
    </div>
  );
}
