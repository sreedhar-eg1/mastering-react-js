import Link from "next/link";
// here @ is a special symbol in next js which indicates root of the project
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
