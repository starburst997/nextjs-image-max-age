import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div>
          <img src="https://test.notessimo.net/static/test.jpg" width={100} height={100} />
          <img src="/test.jpg" width={100} height={100} />
          <br/>
          <Image src="https://test.notessimo.net/static/test.jpg" width={100} height={100} loading="eager" />
          <Image src="/test.jpg" width={100} height={100} loading="eager" />
          <br/>
          <img src="/_next/image?url=https%3A%2F%2Ftest.notessimo.net%2Fstatic%2Ftest.jpg&amp;w=256&amp;q=75" width={100} height={100} />
          <img src="/_next/image?url=%2Ftest.jpg&amp;w=256&amp;q=75" width={100} height={100} />
        </div>

        <Link href="/secondpage"><a>Go to second page!</a></Link>
      </main>
    </div>
  )
}
