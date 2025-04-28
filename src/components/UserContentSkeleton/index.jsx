import { Container, Skeleton, Stack } from '@mui/material'
import React from 'react'

const UserContentSkeleton = () => {
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
            <Skeleton variant='circular' sx={{ width: "220px", height: "220px" }} />
            <Stack spacing={2}>
                <Skeleton variant='text' sx={{ width: "130px", height: "37px" }} />
                <Stack>
                    <Skeleton variant='text' sx={{ width: "448px", height: "20px" }} />
                    <Skeleton variant='text' sx={{ width: "400px", height: "20px" }} />
                    <Skeleton variant='text' sx={{ width: "428px", height: "20px" }} />
                    <Skeleton variant='text' sx={{ width: "248px", height: "20px" }} />
                </Stack>
            </Stack>
        </Container>
    )
}

export default UserContentSkeleton