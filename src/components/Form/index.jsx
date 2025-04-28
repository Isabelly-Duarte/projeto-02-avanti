import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import useFetchUser from '../../hooks/useFetchUser';
import UserContent from '../UserContent';
import UserContentFailed from '../UserContentFailed';
import UserContentSkeleton from '../UserContentSkeleton';

const Form = () => {
    const { loading, findUser } = useFetchUser();
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [failed, setFailed] = useState(false);

    const onSubmit = useCallback(async (event) => {
        event.preventDefault();
        setUserData(null);
        setFailed(false);

        const user = await findUser(username);

        setUserData(user);
        setFailed(user == null);
    }, [username])

    return (
        <>
            <form onSubmit={onSubmit}>
                <TextField
                    autoComplete='off'
                    disabled={loading}
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                    placeholder="Digite um usuário do GitHub"
                    sx={{
                        width: "503px",
                        bgcolor: "#FFFFFF",
                        borderRadius: "10px",
                        "& .MuiInputBase-root": {
                            borderRadius: "10px",
                        }
                    }}
                    slotProps={{
                        input: {
                            sx: {
                                pr: 0
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <div style={{
                                        backgroundColor: "#005CFF",
                                        height: "56px",
                                        width: "56px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "10px",
                                        cursor: "pointer"
                                    }}>
                                        <IconButton type='submit' loading={loading}>
                                            <SearchIcon htmlColor="white" fontSize="large" />
                                        </IconButton>
                                    </div>
                                </InputAdornment>
                            )
                        }
                    }}
                />
            </form>
            {userData && <UserContent
                avatarUrl={userData.avatar_url}
                name={userData.name}
                bio={userData.bio}
            />}
            {failed && <UserContentFailed />}
            {loading && <UserContentSkeleton />}
        </>
    )
}

export default Form