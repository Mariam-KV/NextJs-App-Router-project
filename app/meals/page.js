import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Meals</h1>

      <Link href="/meals/111">Meals 1</Link>
      <Link href="/meals/222">Meals 2</Link>
    </main>
  );
}
