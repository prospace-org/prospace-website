import React from 'react'
import { useRouter } from 'next/router'
import { PATH_PAGE, PATH_DASHBOARD } from 'src/routes/paths'
import useAuth from 'src/hooks/useAuth'
import { Popover, Link, Text, Grid } from '@bolio-ui/core'
import { LogOut } from '@bolio-ui/icons'

function UserSettings() {
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      router.replace(PATH_PAGE.home)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Popover.Item title>
        <Grid direction="column">
          <Text b>{user?.name}</Text>
          <Text my={0}>{user?.email}</Text>
        </Grid>
      </Popover.Item>
      <Popover.Item>
        <Link href={PATH_DASHBOARD.profile}>Profile</Link>
      </Popover.Item>
      <Popover.Item>
        <Link href={PATH_DASHBOARD.photo}>Photo</Link>
      </Popover.Item>
      <Popover.Item>
        <Link href={PATH_DASHBOARD.account}>Account</Link>
      </Popover.Item>
      <Popover.Item>
        <Link href={PATH_DASHBOARD.downloads}>Downloads</Link>
      </Popover.Item>
      <Popover.Item>
        <Link href={PATH_DASHBOARD.orders}>Orders</Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item onClick={handleLogout}>
        <LogOut style={{ marginRight: 5 }} /> Logout
      </Popover.Item>
    </>
  )
}

export default UserSettings
