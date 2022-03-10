import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,Button } from "@mui/material"

const CustomModal = ({
    closeCallback,
    visible,
    showIsVisible,
    type = 'ERR',
    children,
    title = 'QR SCAN VERIFICATION',
    buttonText = 'Close'
}) => {

    const handleClose = () => {
        showIsVisible(false);
        closeCallback?.();
    }

    const getContent = () => {
        return type === 'ERR' ? 'Oops Verification Failed' : 'Payment Verified successfully'
    }

    const renderContent = () => {
      return(
        <>
          {
            children ? children : 
            <DialogContentText id="alert-dialog-description">
            {getContent()}
          </DialogContentText>
          }
        </>
      )
    }

    return(
        <Dialog onClose={handleClose} open={visible}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {renderContent()}
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} className='primaryBtn'>
                {buttonText}
            </Button>
        </DialogActions>
      </Dialog>
    )
}

export default CustomModal