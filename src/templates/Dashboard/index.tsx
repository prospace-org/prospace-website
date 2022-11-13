import React from 'react'
import { useRouter } from 'next/router'
import {
  useTheme,
  Card,
  Section,
  Grid,
  Container,
  Popover,
  Link
} from '@bolio-ui/core'
import { LogOut } from '@bolio-ui/icons'
import { PATH_PAGE, PATH_DASHBOARD } from 'src/routes/paths'
import useAuth from 'src/hooks/useAuth'
import AuthGuard from 'src/guards/AuthGuard'
import DashboardHero from './Hero'

export type DashboardTemplateProps = {
  children: React.ReactNode
}

function Dashboard({ children }: DashboardTemplateProps) {
  const theme = useTheme()
  const router = useRouter()

  const { logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      router.replace(PATH_PAGE.home)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthGuard>
      <DashboardHero />
      <Section py={3}>
        <Container>
          <Grid.Container gap={2}>
            <Grid xs={12} sm={12} md={3}>
              <Card
                style={{ width: '100%', maxHeight: '250px' }}
                type="lite"
                shadow
              >
                <Popover.Item>
                  <Link href={PATH_DASHBOARD.profile}>Profile</Link>
                </Popover.Item>
                <Popover.Item>
                  <Link href={PATH_DASHBOARD.photo}>Photo</Link>
                </Popover.Item>
                <Popover.Item>
                  <Link href={PATH_DASHBOARD.account}>Account</Link>
                </Popover.Item>
                <Popover.Item>
                  <Link href={PATH_DASHBOARD.downloads}>Downloads</Link>
                </Popover.Item>
                <Popover.Item>
                  <Link href={PATH_DASHBOARD.orders}>Orders</Link>
                </Popover.Item>
                <Popover.Item line />
                <Popover.Item onClick={handleLogout}>
                  <LogOut style={{ marginRight: 5 }} /> Logout
                </Popover.Item>
              </Card>
            </Grid>
            <Grid xs={12} sm={12} md={9}>
              {children}
            </Grid>
          </Grid.Container>
        </Container>
      </Section>
      <style jsx>{`
        .projects {
          width: 300px;
          max-width: 100%;
          margin-right: calc(4 * ${theme.layout.gap});
        }
        .projects :global(.project__wrapper):not(:last-of-type) {
          margin-bottom: calc(1.5 * ${theme.layout.gap});
        }
        .recent-activity {
          flex: 1;
        }
        .recent-activity :global(.recent-activity__title) {
          font-size: 0.875rem;
          font-weight: 700;
          margin: 0 0 calc(3 * ${theme.layout.gapHalf});
        }
        @media (max-width: ${theme.breakpoints.sm.max}) {
          .projects {
            width: 100%;
            margin-right: unset;
          }
        }
      `}</style>
    </AuthGuard>
  )
}

export default Dashboard
