import { GetServerSideProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
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
