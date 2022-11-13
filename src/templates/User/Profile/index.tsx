import React, { useEffect } from 'react'
import { Button, Container, Grid, Input, Text } from '@bolio-ui/core'
import useAuth from 'src/hooks/useAuth'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'src/redux/store'
import { getCheckUser } from 'src/redux/slices/user'

function UserProfile() {
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
    <Container style={{ width: '100%' }}>
      <Grid.Container gap={2} direction="column">
        <Grid>
          <Text h3>Profile</Text>
          <Text p my={0}>
            Change your name
          </Text>
        </Grid>
        <Grid>
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
              <Grid.Container direction="column">
                <Grid>
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
                </Grid>
                <Grid xs justify="flex-end">
                  <Button
                    style={{ textTransform: 'none' }}
                    type="primary-light"
                    onClick={handleSubmit}
                    mt={1}
                  >
                    Save changes
                  </Button>
                </Grid>
              </Grid.Container>
            )}
          </Formik>
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default UserProfile
