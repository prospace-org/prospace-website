import React from 'react'
import { Button, Grid, Input, Text, Link } from '@bolio-ui/core'
import { PATH_AUTH } from 'src/routes/paths'
import { Formik } from 'formik'
import * as Yup from 'yup'

function FormSignUp() {
  const initialValues = {
    username: ''
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required field')
      .min(3, 'This field must have at least 3 characters')
  })

  const handleSubmit = React.useCallback((values, { resetForm }) => {
    resetForm()
  }, [])

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
              name="username"
              width="100%"
              value={values.username}
              error={touched.username && errors.username}
              onChange={handleChange('username')}
              onBlur={handleBlur('username')}
              mt={1}
            >
              Name
            </Input>
            {touched.username && errors.username && (
              <Text font="12px" mt={0} mb={0} type="error">
                {errors.username}
              </Text>
            )}

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
              Create account
            </Button>

            {/* <Button
              style={{ textTransform: 'none' }}
              width="100%"
              mt={1}
              onClick={handleSubmit}
            >
              Sign up with Google
            </Button> */}

            <Text p font="14px" mt={2}>
              Already have an account?{' '}
              <Link href={PATH_AUTH.signIn} color>
                Log in
              </Link>
            </Text>
          </Grid>
        </>
      )}
    </Formik>
  )
}

export default FormSignUp
