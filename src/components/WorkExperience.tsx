import { Box, Grid } from "@chakra-ui/react"

function WorkExperience() {
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={3} mt="-10" justifyContent="space-evenly" alignItems="center" bgColor="blue.500">
      </Grid>
    </Box>
  )
}

export default WorkExperience