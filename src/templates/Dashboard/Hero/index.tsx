import React from 'react'
import {
  useTheme,
  Section,
  Container,
  Grid,
  Text,
  Avatar,
  Row,
  Button,
  Col
} from '@bolio-ui/core'
import useAuth from 'src/hooks/useAuth'

function DashboardHero() {
  const theme = useTheme()

  const { user } = useAuth()

  return (
    <>
      <Section
        py={3}
        id="hero"
        style={{ borderBottom: '1px solid', borderColor: theme.palette.border }}
      >
        <Container>
          <Grid.Container gap={2}>
            <Grid xs={12} md={2}>
              <div className="border-gradient">
                <Avatar text="BS" scale={8} />
              </div>
            </Grid>
            <Grid xs={12} md={10} direction="column" justify="center">
              <Row align="middle" justify="space-between">
                <Col>
                  <Text i type="error" my={0}>
                    Welcome,
                  </Text>
                  <Text h1 my={0}>
                    {user?.name}
                  </Text>
                  <Text my={0}>{user?.email}</Text>
                </Col>
                <Button type="error-light" rounded auto>
                  Orders
                </Button>
              </Row>
            </Grid>
          </Grid.Container>
        </Container>
      </Section>
      <style jsx>{`
        .border-gradient {
          background: linear-gradient(#c25fff, #7828c9) padding-box,
            linear-gradient(to right, #c25fff, #7828c9) border-box;
          border-radius: 50em;
          border: 3px solid transparent;
        }
      `}</style>
    </>
  )
}

export default DashboardHero
