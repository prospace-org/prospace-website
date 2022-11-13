import React from 'react'
import GuestGuard from 'src/guards/GuestGuard'
import { PATH_AUTH } from 'src/routes/paths'
import Base from 'src/templates/Base'
import { FormSignIn } from 'src/components'
import { Container, Grid, Section, Text, Col, Row, Link } from '@bolio-ui/core'

function SignIn() {
  return (
    <GuestGuard>
      <Base>
        <Section py={3}>
          <Container justify="center">
            <Grid.Container justify="center">
              <Row justify="space-around" style={{ textAlign: 'center' }}>
                <Col>
                  <svg
                    viewBox="0 0 500 500"
                    style={{
                      color: '#c25fff',
                      height: '6rem',
                      width: '6rem',
                      verticalAlign: 'middle',
                      marginTop: '-16px',
                      marginBottom: '-16px'
                    }}
                  >
                    <path
                      d="M88.21,182.47c-.42-1.33,0,2.25,1.71,5.09,26.52,44.72,52.28,89.92,80.06,133.85C208.53,382.33,285.9,401,348.22,366c62.55-35.15,87-111.85,55.95-175.35-31.52-64.39-104.55-92.59-171.89-66C184.51,143.51,137,162.89,88.21,182.47Z"
                      fill="currentColor"
                    />
                    <path
                      d="M82.65,298.07c-1.06-.9,1.22,1.89,4.16,3.4,46.26,23.71,92.14,48.25,139.06,70.62,65.07,31,140.5,5.63,174.59-57.21,34.22-63.06,14.07-141-46.06-178.19C293.44,99,216.61,114,173.78,172.39,143.4,213.8,113.47,255.54,82.65,298.07Z"
                      fill="currentColor"
                    />
                  </svg>
                  <Text h2>Sign in with your account.</Text>
                  <Text p mt={0}>
                    Don't have an account?{' '}
                    <Link href={PATH_AUTH.signUp} color>
                      Sign up
                    </Link>
                  </Text>
                </Col>
              </Row>
            </Grid.Container>
            <Grid.Container gap={2} justify="center">
              <FormSignIn />
            </Grid.Container>
          </Container>
        </Section>
      </Base>
    </GuestGuard>
  )
}

export default SignIn
