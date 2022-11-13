import React, { useEffect } from 'react'
import Base from 'src/templates/Base'
import {
  Button,
  Container,
  Grid,
  Section,
  Input,
  Text,
  Row,
  Col
} from '@bolio-ui/core'
import useAuth from 'src/hooks/useAuth'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'src/redux/store'
import { getCheckUser } from 'src/redux/slices/user'

function Account() {
  const dispatch = useDispatch()

  const { login } = useAuth()

  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getCheckUser())
  }, [dispatch])

  const initialValues = {
    name: user?.name || ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required field')
      .min(3, 'This field must have at least 3 characters')
  })

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await login(values.email, values.password)
    } catch (error) {
      console.error(error)
      resetForm()
    }
  }

  return (
    <Base>
      <Section py={3}>
        <Container justify="center">
          <Grid.Container justify="center">
            <Row justify="space-around" style={{ textAlign: 'center' }}>
              <Col>
                <Text h2>Your Account</Text>
                <Text p mt={0}>
                  Information about you
                </Text>
              </Col>
            </Row>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
              validateOnMount
            >
              {({
                values,
                errors,
                touched,
                // isValid,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <>
                  <Grid
                    xs={12}
                    sm={8}
                    md={4}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                  >
                    <Input
                      name="name"
                      width="100%"
                      value={values.name}
                      error={touched.name && errors.name}
                      onChange={handleChange('name')}
                      onBlur={handleBlur('name')}
                      mt={1}
                    >
                      Name
                    </Input>
                    {touched.name && errors.name && (
                      <Text font="12px" mt={0.5} mb={0} type="error">
                        {errors.name}
                      </Text>
                    )}

                    <Button
                      style={{ textTransform: 'none' }}
                      type="primary-light"
                      width="100%"
                      onClick={handleSubmit}
                      mt={2}
                    >
                      Save changes
                    </Button>
                  </Grid>
                </>
              )}
            </Formik>
          </Grid.Container>
        </Container>
      </Section>
    </Base>
  )
}

export default Account
