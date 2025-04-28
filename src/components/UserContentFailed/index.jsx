import { Container, Typography } from '@mui/material'
import React from 'react'

const UserContentFailed = () => {
  return (
    <Container
      sx={{
        bgcolor: "#D9D9D9",
        borderRadius: "25px",
        width: "710px",
        height: "88px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Typography variant='p' color='#FF0000' textAlign={"center"} fontSize={"20px"}>
        Nenhum perfil foi encontrado com esse nome de usuário.<br />
        Tente novamente
      </Typography>
    </Container>
  )
}

export default UserContentFailed