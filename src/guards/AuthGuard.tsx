import { useState, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuth from 'src/hooks/useAuth'
import { Loading } from '@bolio-ui/core'

type Props = {
  children: ReactNode
}

export default function AuthGuard({ children }: Props) {
  const { isAuthenticated, isInitialized } = useAuth()

  const { pathname, push } = useRouter()

  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  )

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation)
    }
    if (isAuthenticated) {
      setRequestedLocation(null)
    }
  }, [isAuthenticated, pathname, push, requestedLocation])

  if (!isInitialized) {
    return <Loading />
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    // return <SignIn />
  }

  return <>{children}</>
}
