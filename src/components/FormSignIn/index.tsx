import React from 'react'
import {
  Button,
  Grid,
  Input,
  Text,
  Divider,
  Row,
  Col,
  Link,
  Checkbox
} from '@bolio-ui/core'
import { PATH_AUTH } from 'src/routes/paths'
import useAuth from 'src/hooks/useAuth'
import { Formik } from 'formik'
import * as Yup from 'yup'

function FormSignIn() {
  const { login } = useAuth()

  const initialValues = {
    email: 'brunnoandradi@gmail.com',
    password: '123456'
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Username is required field')
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
              name="email"
              width="100%"
              value={values.email}
              error={touched.email && errors.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              mt={1}
            >
              Email
            </Input>
            {touched.email && errors.email && (
              <Text font="12px" mt={0.5} mb={0} type="error">
                {errors.email}
              </Text>
            )}

            <Input.Password
              name="password"
              width="100%"
              value={values.password}
              error={touched.password && errors.password}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
              mt={1}
            >
              Password
            </Input.Password>
            {touched.password && errors.password && (
              <Text font="12px" mt={0.5} mb={0} type="error">
                {errors.password}
              </Text>
            )}

            <Button
              style={{ textTransform: 'none' }}
              type="primary-light"
              width="100%"
              onClick={handleSubmit}
              mt={2}
            >
              Sign in
            </Button>

            <Grid style={{ width: '100%' }}>
              <Row align="middle" justify="space-between">
                <Row>
                  <Col>
                    <Checkbox checked={true} type="primary" scale={0.7}>
                      Remember me
                    </Checkbox>
                  </Col>
                </Row>
                <Row>
                  <Link href={PATH_AUTH.forgotPassword} color>
                    <Text p font="12px">
                      Forgot password?
                    </Text>
                  </Link>
                </Row>
              </Row>
            </Grid>

            <Grid style={{ width: '100%' }} mb={0.5}>
              <Divider style={{ fontSize: '12px' }}>or continue with</Divider>
            </Grid>

            <Button
              style={{ textTransform: 'none' }}
              width="100%"
              onClick={handleSubmit}
            >
              Sign in with Google
            </Button>
          </Grid>
        </>
      )}
    </Formik>
  )
}

export default FormSignIn
