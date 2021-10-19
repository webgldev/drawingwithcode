import { metadata as siteMeta } from 'config'

export type SEOProps = {
  title?: string
  description?: string
}

const SEO = ({ title, description } : SEOProps ) => {
  const pageTitle = title
  ? `${title} :: ${siteMeta.siteName}`
  : siteMeta.siteName

  const pageDescription = description
  ? description
  : siteMeta.description

  return (
    <>
      <title>{pageTitle}</title>
      {/* Search SEO */}
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      {/* social SEO */}
      <meta property="githubUrl:card" content="app" />
      <meta property="githubUrl:site" content={siteMeta.author.githubUrl} />
      <meta property="githubUrl:title" content={pageTitle} />
      <meta property="githubUrl:description" content={pageDescription} />
    </>
  )
}

export default SEO
