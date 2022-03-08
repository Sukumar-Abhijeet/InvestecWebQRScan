import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from "@mui/material"
import TappableButton from './TappableButton';

const CustomModal = ({
    closeCallback,
    visible,
    showIsVisible,
    type = 'ERR'
}) => {

    const handleClose = () => {
        closeCallback?.();
    }

    const getContent = () => {
        return type === 'ERR' ? 'Oops Verification Failed' : 'Payment Verified successfully'
    }

    return(
        <Dialog onClose={handleClose} open={visible}>
        <DialogTitle>QR SCAN VERIFICATION</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {getContent()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <TappableButton onClick={()=>showIsVisible(false)} >
            Close
            </TappableButton>
        </DialogActions>
      </Dialog>
    )
}

export default CustomModal