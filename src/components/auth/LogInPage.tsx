import React from 'react'
import AuthForm from './AuthForm'

const LogInPage: React.FC = () => {
  return (
    <div>
      <AuthForm newUser={false} />
    </div>
  )
}

export default LogInPage
