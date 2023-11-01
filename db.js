export async function getStaticProps() {
    const db = await myDB.connect({
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
    })
    // ...
  }