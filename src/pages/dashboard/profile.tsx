import Base from 'src/templates/Base'
import Dashboard from 'src/templates/Dashboard'
import UserProfile from 'src/templates/User/Profile'

export default function AccountPage() {
  return (
    <Base>
      <Dashboard>
        <UserProfile />
      </Dashboard>
    </Base>
  )
}
