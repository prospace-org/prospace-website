import React from 'react'
import NextLink from 'next/link'
import { Avatar, Button, Text, useTheme, Grid, Container } from '@bolio-ui/core'

interface Props {
  user: { name: string; email?: string }
}

export type HeadingProps = Props

const Heading: React.FC<HeadingProps> = ({ user }) => {
  const theme = useTheme()

  return (
    <>
      <div className="heading__wrapper">
        <Container>
          <Grid.Container>
            <Avatar text="BA" className="heading__user-avatar" />
            <div className="heading__name">
              <div className="heading__title">
                <Text h2 className="headding__user-name" my={0}>
                  {user.name}
                </Text>
                <div className="heading__actions">
                  <NextLink href="/users/orders" passHref>
                    <Button type="error" auto>
                      Orders
                    </Button>
                  </NextLink>
                </div>
              </div>

              <div className="heading__integration">
                <Text className="heading__integration-title">{user.email}</Text>
              </div>
            </div>
          </Grid.Container>
        </Container>
      </div>

      <style jsx>{`
        .heading__wrapper {
          border-bottom: 1px solid ${theme.palette.border};
        }
        .heading {
          display: flex;
          flex-direction: row;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: calc(${theme.layout.gap} * 2);
          box-sizing: border-box;
        }
        .heading :global(.heading__user-avatar) {
          height: 100px;
          width: 100px;
          margin-right: ${theme.layout.gap};
        }
        .heading__title {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex: 1;
        }
        .heading__name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        .heading__name :global(.headding__user-name) {
          line-height: 1;
        }
        .heading__name :global(.headding__user-role) {
          background: ${theme.palette.accents_1};
          border-color: ${theme.palette.accents_2};
          border-radius: 1rem;
          padding: 0.175rem 0.5rem;
          height: unset;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          margin-left: ${theme.layout.gapQuarter};
        }
        .heading__actions {
          margin-left: auto;
        }
        .heading__integration :global(.heading__integration-title) {
          color: ${theme.palette.accents_5} !important;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          margin: 0;
        }
        .heading__integration-inner {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .heading__integration-inner :global(svg) {
          margin-right: ${theme.layout.gapQuarter};
        }

        @media (max-width: ${theme.breakpoints.xs.max}) {
          .heading :global(.heading__user-avatar) {
            width: 80px !important;
            height: 80px !important;
          }
          .heading__name :global(.headding__user-name) {
            font-size: 1.5rem;
          }
          .heading__actions {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default Heading
