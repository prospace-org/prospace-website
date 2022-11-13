import React from 'react'
import { Avatar, Popover } from '@bolio-ui/core'
import { UserSettings } from 'src/components'

function AccountPopover() {
  return (
    <>
      <Popover
        content={<UserSettings />}
        placement="bottomEnd"
        portalClassName="user-settings__popover"
      >
        <div className="user-settings__button">
          <Avatar text="BA" />
        </div>
      </Popover>
      <style jsx>{`
        .user-settings__button {
          border: none;
          background: none;
          padding-right: 15px;
          margin: 0;
          appearance: none;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default AccountPopover
