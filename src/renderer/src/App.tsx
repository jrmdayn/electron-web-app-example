import React from 'react'
import { Button, Flex, Container, createStyles } from '@mantine/core'
import { useApi } from './useApi'

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: theme.spacing.lg
  }
}))

export default function App(): JSX.Element {
  const api = useApi()
  const { classes } = useStyles()
  return (
    <Container px="lg" className={classes.container}>
      <Flex gap="lg" justify="center">
        <Button onClick={api.open}>Open a file</Button>
      </Flex>
    </Container>
  )
}
