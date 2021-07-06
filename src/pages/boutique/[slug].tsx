import { BoutiqueProp } from 'components/Map'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import BoutiquesTemplate, { BoutiquesTemplateProps } from 'templates/Boutiques'

export default function Boutique({ boutique }: BoutiquesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <BoutiquesTemplate boutique={boutique} />
}

export async function getStaticPaths() {
  const response = await fetch(process.env.API_ENDPOINT as string)
  const boutiques: BoutiqueProp[] = await response.json()
  const paths = boutiques.slice(1, 20).map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(process.env.API_ENDPOINT as string)
  const boutiques: BoutiqueProp[] = await response.json()

  const boutique = boutiques.find((boutique) => boutique.slug === params?.slug)

  if (!boutique) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      boutique
    }
  }
}