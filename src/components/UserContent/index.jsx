import { Avatar, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const UserContent = ({ avatarUrl, name, bio }) => {
    return (
        <Container
            sx={{
                bgcolor: "#D9D9D9",
                borderRadius: "25px",
                width: "804px",
                height: "257px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5
            }}
        >
            <Avatar
                sx={{
                    width: "220px",
                    height: "220px",
                    border: "2px solid #005CFF"
                }}
                src={avatarUrl}
            />
            <Stack spacing={2}>
                <Typography variant='h5' fontWeight={"700"} color='#005CFF'>
                    {name}
                </Typography>
                <Typography variant='p' color='#000000'>
                    {bio ? bio : "Sem biografia"}
                </Typography>
            </Stack>
        </Container>
    )
}

export default UserContent