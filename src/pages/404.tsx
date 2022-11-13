import React from 'react'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {
  Section,
  Container,
  Grid,
  Text,
  Row,
  Col,
  Button
} from '@bolio-ui/core'
import Base from 'src/templates/Base'

function Home() {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={'404: Page not found | ProSpace - Seu sonho começa aqui'}
        description={
          'A ProSpace é uma plataforma desenvolvida para conectar, relacionar e profissionalizar o mercado do esporte no Brasil.'
        }
        openGraph={{
          url: `${router.pathname}`,
          title:
            '404: Página não encontrada | ProSpace - Seu sonho começa aqui',
          description:
            'A ProSpace é uma plataforma desenvolvida para conectar, relacionar e profissionalizar o mercado do esporte no Brasil.',
          images: [
            {
              url: '/img/cover.png',
              width: 1200,
              height: 630,
              alt: '404: Página não encontrada | ProSpace - Seu sonho começa aqui'
            }
          ]
        }}
      />
      <Base>
        <Section py={4}>
          <Container>
            <Grid.Container justify="center">
              <Row justify="space-around" style={{ textAlign: 'center' }}>
                <Col span={10}>
                  <Text h1 font={6}>
                    Oops!
                  </Text>
                  <Text h2>404 - PÁGINA NÃO ENCONTRADA</Text>
                  <Text p font={1.2}>
                    A página que você está procurando pode ter sido removida ou
                    está temporariamente indisponível.
                  </Text>
                </Col>
              </Row>
            </Grid.Container>
            <Grid.Container gap={2} justify="center" alignItems="center">
              <Grid xs={6} sm={6} md={3}>
                <NextLink href={'/'} passHref>
                  <Button
                    type="error-light"
                    rounded
                    width="100%"
                    style={{ textTransform: 'none' }}
                  >
                    Voltar para o início
                  </Button>
                </NextLink>
              </Grid>
            </Grid.Container>
          </Container>
        </Section>
      </Base>
    </>
  )
}

export default Home
