import Navbar from "./navbar/page";
import MainLayout from "./Mainlayout/page";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div>
        <Navbar />
        <div className="">
          <div className="">
            <MainLayout />
          </div>
        </div>
      </div>
    </main>
  );
}
