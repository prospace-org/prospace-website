import React from 'react'
import { Text, Container, Grid, Row, Col, Section } from '@bolio-ui/core'

interface Props {
  content: { title: string; description: string }
}

export type HeroProps = Props

function Hero({ content }: Props) {
  return (
    <Section py={4}>
      <Container>
        <Grid.Container justify="center">
          <Row justify="space-around" style={{ textAlign: 'center' }}>
            <Col span={8}>
              <svg
                viewBox="0 0 900 400"
                style={{
                  width: '18em',
                  verticalAlign: 'middle',
                  marginBottom: 10
                }}
              >
                <path
                  d="M92.35,115.41a139.46,139.46,0,0,1,221.9-.15l22.71,0a158.16,158.16,0,0,0-267.32.19Z"
                  fill="currentColor"
                />
                <path
                  d="M361.46,192.87v14c.1-2.33.16-4.67.16-7s-.07-4.69-.17-7"
                  fill="currentColor"
                />
                <path
                  d="M314.54,284.36a139.45,139.45,0,0,1-222.24.15l-22.68,0a158.16,158.16,0,0,0,267.6-.18Z"
                  fill="currentColor"
                />
                <path
                  d="M52.48,124.74l66.72,0a22.42,22.42,0,0,1,15.65,6,19,19,0,0,1,6.67,14.6l0,38.84q0,17.19-13.29,27.71-12.49,9.9-31.2,9.91H82.76l0,53.71-30.21,0ZM82.72,152.6l0,41.25H97q14.29,0,14.29-9.72l0-31.53Z"
                  fill="currentColor"
                />
                <path
                  d="M188.42,221.66l0,53.71-30.22,0-.1-150.72,66.72,0a22.47,22.47,0,0,1,15.65,6,19.1,19.1,0,0,1,6.67,14.61l0,38.84q0,14.78-11.58,23.61,11.61,8.81,11.61,23.77l0,43.92-30.21,0,0-43.92a9.17,9.17,0,0,0-3.24-7,11.29,11.29,0,0,0-7.55-2.76Zm17.79-27.9a11,11,0,0,0,7.54-2.85,8.66,8.66,0,0,0,3.24-6.86l0-31.54-28.6,0,0,41.25Z"
                  fill="currentColor"
                />
                <path
                  d="M334.12,124.55a22.48,22.48,0,0,1,15.65,6,19.05,19.05,0,0,1,6.66,14.6l.07,109.57a19,19,0,0,1-6.64,14.61,22.44,22.44,0,0,1-15.64,6l-44.42,0a22.42,22.42,0,0,1-15.65-6,19.06,19.06,0,0,1-6.67-14.6l-.07-109.57a19,19,0,0,1,6.64-14.61,22.48,22.48,0,0,1,15.65-6ZM297.69,247.41l28.6,0-.07-94.95-28.59,0Z"
                  fill="currentColor"
                />
                <path
                  d="M403,152.38l-28.59,0,0,23.79q0,9.7,14.3,9.7,18.71,0,31.21,9.86,13.31,10.51,13.33,27.79l0,31.08a19.05,19.05,0,0,1-6.65,14.62,22.48,22.48,0,0,1-15.64,6l-44.42,0a22.48,22.48,0,0,1-15.65-6,19,19,0,0,1-6.66-14.6l0-30.38,30.21,0,0,23.07,28.59,0,0-23.78q0-9.7-14.3-9.7-18.71,0-31.21-9.87-13.32-10.5-13.33-27.78l0-31.09a19,19,0,0,1,6.65-14.61,22.44,22.44,0,0,1,15.64-6l44.42,0a22.43,22.43,0,0,1,15.65,6,19,19,0,0,1,6.66,14.6l0,30.29-30.21,0Z"
                  fill="#fb000e"
                />
                <path
                  d="M452.93,124.47l66.72,0a22.51,22.51,0,0,1,15.65,6A19,19,0,0,1,542,145l0,38.84q0,17.19-13.29,27.71-12.5,9.9-31.2,9.91h-14.3l0,53.72-30.21,0Zm30.24,27.86,0,41.24h14.3q14.29,0,14.3-9.72l0-31.53Z"
                  fill="#fb000e"
                />
                <path
                  d="M586.73,244.54l-6.09,30.56-30.58,0,29.39-150.74,40.2,0,29.51,150.7-30.67,0-6-30.56Zm5.46-27.88h14.75l-7.42-64.22Z"
                  fill="#fb000e"
                />
                <path
                  d="M718.94,152.17l-28.6,0,.07,94.95H719V224.05l30.21,0,0,30.38A19.07,19.07,0,0,1,742.58,269a22.47,22.47,0,0,1-15.64,6l-44.43,0a22.48,22.48,0,0,1-15.65-6,19.05,19.05,0,0,1-6.66-14.6l-.08-109.57a19.08,19.08,0,0,1,6.65-14.61,22.5,22.5,0,0,1,15.64-6l44.42,0a22.46,22.46,0,0,1,15.65,6,19,19,0,0,1,6.66,14.6l0,30.29-30.22,0Z"
                  fill="#fb000e"
                />
                <polygon
                  points="797.14 247.07 847.5 247.04 847.52 274.92 766.95 274.97 766.84 124.25 847.41 124.2 847.43 152.08 797.08 152.11 797.1 185.6 839 185.58 839.02 213.55 797.12 213.58 797.14 247.07"
                  fill="#fb000e"
                />
              </svg>
              <Text p font={1.5} mt={0}>
                {content.description}
              </Text>
            </Col>
          </Row>
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default Hero