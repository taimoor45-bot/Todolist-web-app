import Navbar from "./navbar/page";
import Sidebar from "./sidebar/page";

export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar />
        <div className="">
          <div className="mt-10">
            <Sidebar />
          </div>
          <div className=""></div>
        </div>
      </div>
    </main>
  );
}
