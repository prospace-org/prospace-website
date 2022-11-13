import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Grid,
  Spacer,
  Button,
  Link,
  useTheme,
  useBodyScroll
} from '@bolio-ui/core'
import { PATH_AUTH } from 'src/routes/paths'
import useAuth from 'src/hooks/useAuth'
import { Sun, Moon, Menu } from '@bolio-ui/icons'
import { useSettings } from 'src/contexts/SettingsContext'
import { useMediaQuery } from 'src/utils/use-media-query'
import { Logo, NavigationMobile, AccountPopover } from 'src/components'

const Navigation: React.FC = () => {
  const theme = useTheme()
  const settings = useSettings()
  const router = useRouter()
  const { user } = useAuth()
  const [expanded, setExpanded] = useState<boolean>(false)
  const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 })
  const isMobile = useMediaQuery(1280)

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const scrollHandler = () =>
      setSticky(document.documentElement.scrollTop > 0)
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [setSticky])

  useEffect(() => {
    setBodyHidden(expanded)
  }, [expanded, setBodyHidden])

  useEffect(() => {
    const handleRouteChange = () => {
      setExpanded(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <nav className="menu_wrapper">
        <Container fluid>
          <div className={`${sticky ? 'menu_sticky' : 'menu'}`}>
            <Grid.Container gap={1} justify="center">
              {!isMobile ? (
                <>
                  <Grid
                    xs={6}
                    md={6}
                    justify="flex-start"
                    style={{ marginTop: '8px' }}
                  >
                    <Logo />
                  </Grid>
                  <Grid xs={6} md={6} justify="flex-end">
                    <div className="controls">
                      <Button
                        auto
                        aria-label="Toggle Purple mode"
                        className="theme-button"
                        type="abort"
                        onClick={() =>
                          settings.switchTheme(
                            theme.type === 'light' ? 'gray' : 'light'
                          )
                        }
                      >
                        {theme.type === 'light' ? (
                          <Moon
                            fontSize={16}
                            color={theme.palette.foreground}
                          />
                        ) : (
                          <Sun fontSize={16} color={theme.palette.foreground} />
                        )}
                      </Button>
                      <Spacer w={1} />
                      {user ? (
                        <>
                          <Spacer w={1.5} />
                          <AccountPopover />
                        </>
                      ) : (
                        <>
                          <Spacer w={0.5} />
                          <Link href={PATH_AUTH.signIn}>
                            <Button auto scale={0.75} rounded type="abort">
                              Sign in
                            </Button>
                          </Link>
                          <Spacer w={1} />
                          <Link href={PATH_AUTH.signUp}>
                            <Button
                              auto
                              scale={0.75}
                              rounded
                              type="error-light"
                            >
                              Sign up
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid
                    xs={2}
                    md={4}
                    justify="flex-start"
                    style={{ marginTop: '8px' }}
                  >
                    <Logo />
                  </Grid>
                  <Grid xs={10} md={8} justify="flex-end">
                    <div className="controls">
                      <Button
                        auto
                        aria-label="Toggle Dark mode"
                        className="theme-button"
                        type="abort"
                        onClick={() =>
                          settings.switchTheme(
                            theme.type === 'gray' ? 'light' : 'gray'
                          )
                        }
                      >
                        {theme.type === 'gray' ? (
                          <Sun fontSize={16} />
                        ) : (
                          <Moon fontSize={16} />
                        )}
                      </Button>
                      <Spacer w={1} />
                      <Button
                        className="menu-toggle"
                        auto
                        type="abort"
                        onClick={() => setExpanded(!expanded)}
                      >
                        <Menu fontSize={16} />
                      </Button>
                    </div>
                  </Grid>
                </>
              )}
            </Grid.Container>
          </div>
        </Container>
      </nav>
      <NavigationMobile expanded={expanded} />
      <style jsx>{`
        .menu_wrapper {
          height: 60px;
          position: relative;
          overflow: hidden;
          z-index: 99;
        }
        .menu_sticky {
          z-index: 1;
          position: fixed;
          z-index: 1100;
          top: 0;
          right: 0;
          left: 0;
          box-shadow: ${theme.type === 'dark'
            ? 'rgba(255, 255, 255, 0.1) 0 0 20px 0'
            : 'rgba(0, 0, 0, 0.1) 0 0 20px 0'};
          backdrop-filter: saturate(180%) blur(10px);
          transition: box-shadow 1s ease;
          transition: backdrop-filter 1s ease;
          padding-left: 15px;
          padding-right: 15px;
        }
        .menu_wrapper :global(.theme-button) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
        }

        .logo {
          padding: 0 ${theme.layout.gap};
          margin-bottom: 3px;
        }
        .tabs :global(.content) {
          display: none;
        }
        @media only screen and (max-width: ${theme.breakpoints.md.max}) {
          .tabs {
            display: none;
          }
        }

        .controls {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 50px;
        }
        .controls :global(.menu-toggle) {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Navigation
