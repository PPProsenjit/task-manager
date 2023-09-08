import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getUserLoginEmail } from '../../utilities/Database';
const DialogPage = ({ handleClose, open }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [userDetails, setUserDetails] = useState([])

    //get login user email
    const email = getUserLoginEmail();
    const getUserInfo = JSON.parse(localStorage.getItem('users-info'))
    // console.log(getUserInfo);
    useEffect(() => {
        if (getUserInfo.length > 0) {
            const user = getUserInfo.find(loginUser => loginUser.email === email)
            setUserDetails(user);
        }

    }, [])
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"User Details"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <h2>{userDetails.name}</h2>
                        <h2>{userDetails.email}</h2>
                        <p>{userDetails.details}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogPage;