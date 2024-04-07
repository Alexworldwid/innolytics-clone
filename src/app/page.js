import Subscribe from "@/components/subscribe";
import Channels from "@/components/channels";

export default function Home({ menu }) {
  return (
    <main className="mt-28">
      <div className={menu ? "mt-20" : "mt-0"}>
        <Subscribe />
      </div>
      <Channels />
    </main>
  );
}
