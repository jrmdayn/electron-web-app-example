import React from 'react'
import { Button, Flex, Container } from '@mantine/core'

export default function App(): JSX.Element {
  return (
    <Container px="lg">
      <Flex gap="lg" justify="center">
        <Button onClick={window.api.open}>Open a file</Button>
      </Flex>
    </Container>
  )
}
