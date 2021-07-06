import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import { MapProps } from 'components/Map'
import { GetServerSideProps } from 'next'

export default function Index(props: MapProps) {
  return <Map {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  let boutiques = []

  try {
    const res = await fetch(process.env.API_ENDPOINT as string)
    boutiques = await res.json()
  } catch (err) {
    return { redirect: { destination: '/500', permanent: false } }
  }

  return {
    props: {
      boutiques
    }
  }
}
