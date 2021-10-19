import { ReactNode } from 'react'
import SEO, { SEOProps } from '@components/seo'
import Head from 'next/head'

type PageProps = {
  meta?: SEOProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => (
  <>
    <Head>
      <SEO {...meta} />
    </Head>
    {children}
  </>
)

export default Page

