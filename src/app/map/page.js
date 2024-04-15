import styles from "./page.module.css";
import Map from "./map";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cases?populate=deep&pagination[limit]=-1`);
  if (!res.ok) { throw new Error('Failed to fetch data') }
  return res.json()
}

export default async function Page() {
  const data = await getData();

  return <main className={styles.main}>
    <div className="mb-3">
      <Map cases={data.data} />
    </div>

    {data.data.map((c) => (
      <div key={c.id}>
        <h1 className="purple">{c.identifier}</h1>
      </div>
    ))}
  </main>
}
