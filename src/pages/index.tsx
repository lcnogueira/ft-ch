import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import { useBoutiques } from 'hooks/useBoutiques'

export default function Index() {
  const { userLocation, boutiques } = useBoutiques()
  return <Map userLocation={userLocation} boutiques={boutiques} />
}
