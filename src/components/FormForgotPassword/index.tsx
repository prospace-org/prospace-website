import React from 'react'
import { Button, Grid, Input, Text, Link } from '@bolio-ui/core'
import { PATH_AUTH } from 'src/routes/paths'
import { Formik } from 'formik'
import * as Yup from 'yup'

function FormForgotPassword() {
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

            <Button
              style={{ textTransform: 'none' }}
              type="primary-light"
              width="100%"
              onClick={handleSubmit}
              mt={2}
            >
              Send email
            </Button>

            <Text p font="14px" mt={2}>
              Don't have an account?{' '}
              <Link href={PATH_AUTH.signUp} color>
                Sign up
              </Link>
            </Text>
          </Grid>
        </>
      )}
    </Formik>
  )
}

export default FormForgotPassword
