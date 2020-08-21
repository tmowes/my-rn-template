import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Text style={{ marginTop: 28, fontSize: 48, color: '#E69632' }}>
        Dashboard
      </Text>
    </Container>
  )
}

export default Dashboard
