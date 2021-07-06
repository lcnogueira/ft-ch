import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import { MapProps } from 'components/Map'
import { GetServerSideProps } from 'next'

export default function Index(props: MapProps) {
  return <Map {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques`
  )
  const boutiques = await res.json()

  return {
    props: {
      boutiques
    }
  }
}
