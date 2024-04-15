import styles from "./page.module.css";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cases?populate=*`);
  if (!res.ok) { throw new Error('Failed to fetch data') }
  return res.json()
}

export default async function Page() {
  const data = await getData();

  return <main className={styles.main}>
    {data.data.map((quote) => (
      <div key={quote.id}>
        <h1 className="purple">{quote.identifier}</h1>
      </div>
    ))}
  </main>
}
