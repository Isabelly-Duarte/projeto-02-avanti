import { Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            gap={"10px"}
        >
            <GitHubIcon sx={{width: "60px", height: "60px"}} />
            <Typography variant="h3">Perfil</Typography>
            <Typography variant="h3" fontWeight={"600"}>GitHub</Typography>
        </Stack>
    )
}

export default Header;