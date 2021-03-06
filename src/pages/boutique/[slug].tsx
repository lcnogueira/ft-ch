import { GetStaticProps } from 'next'
import BoutiquesTemplate, { BoutiquesTemplateProps } from 'templates/Boutiques'
import { API_ENDPOINT } from 'config'
import axios from 'axios'

const HOUR_IN_SECONDS = 60 * 60
const NUMBER_OF_PAGES = 20

export default function Boutique({ boutique }: BoutiquesTemplateProps) {
  return <BoutiquesTemplate boutique={boutique} />
}

export async function getStaticPaths() {
  try {
    const { data: boutiques } = await axios.get<Boutique[]>(API_ENDPOINT)

    const paths = boutiques.slice(0, NUMBER_OF_PAGES).map(({ slug }) => ({
      params: { slug }
    }))
    return { paths, fallback: 'blocking' }
  } catch (error) {
    // only these paths will be pre-rendered at build time
    // { fallback: blocking } will server-render pages on-demand if the path doesn't exist.
    return { paths: [], fallback: 'blocking' }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: boutiques } = await axios.get<Boutique[]>(API_ENDPOINT)

    const boutique = boutiques.find(
      (boutique) => boutique.slug === params?.slug
    )

    if (!boutique) return { notFound: true }

    return {
      revalidate: HOUR_IN_SECONDS,
      props: {
        boutique
      }
    }
  } catch (error) {
    return { notFound: true }
  }
}
