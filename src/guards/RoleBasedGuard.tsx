import { Grid, Text } from '@bolio-ui/core'
import useAuth from 'src/hooks/useAuth'

type RoleBasedGuardProp = {
  hasContent?: boolean
  roles?: string[]
  children: React.ReactNode
}

export default function RoleBasedGuard({
  hasContent,
  roles,
  children
}: RoleBasedGuardProp) {
  const { user } = useAuth()

  const currentRole = user?.role

  if (typeof roles !== 'undefined' && !roles.includes(currentRole)) {
    return hasContent ? (
      <Grid>
        <Text h3>Permissão negada</Text>
        <Text p>Você não tem permissão para acessar esta página</Text>
      </Grid>
    ) : null
  }

  return <>{children}</>
}
