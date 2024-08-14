// react
import { useCallback, useEffect, useState } from 'react';
// 3rd party
import { Button, FormControl, Modal, TextField } from '@mui/material';
// components
import Box from '@components/Box';
import Typography from '@components/Typography';
// utils
import { VideoData } from '@utils/data';
// local
import sx from './styles';

type ShareModalProps = {
    open: boolean;
    videoData: VideoData | undefined;
    onCancel: () => void;
    onShare: () => void;
};

export default function ShareModal(props: ShareModalProps) {
    const [contactValue, setContactValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleCancel = useCallback(() => {
        props.onCancel?.();
    }, []);

    const handleShare = () => {
        props.onShare?.();
    };

    useEffect(() => {
        setContactValue('');
        setMessageValue('');
    }, [props.videoData]);

    return (
        <Modal open={props.open}>
            <Box sx={sx.modalContainer}>
                <Typography variant="h2" sx={sx.modalTitle}>
                    Video details
                </Typography>
                <FormControl sx={sx.form}>
                    <TextField
                        id="contact-input"
                        label="Recipient email address or username"
                        value={contactValue}
                        onChange={(event) =>
                            setContactValue(event.target.value)
                        }
                        fullWidth
                        sx={{ mb: 2 }}
                        inputProps={{ maxLength: 50 }}
                        error={!contactValue}
                        helperText={!contactValue ? 'Email is required' : ' '}
                    />
                    <TextField
                        id="message-input"
                        label="Message (optional)"
                        value={messageValue}
                        onChange={(event) =>
                            setMessageValue(event.target.value)
                        }
                        multiline
                        minRows={3}
                        fullWidth
                        sx={{ mb: 5 }}
                        inputProps={{ maxLength: 200 }}
                    />
                </FormControl>
                <Box flexBox sx={sx.modalButtonContainer}>
                    <Button
                        onClick={handleCancel}
                        variant="text"
                        color="secondary"
                        size="large"
                        sx={sx.modalButton}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleShare}
                        variant="text"
                        color="secondary"
                        size="large"
                        sx={[sx.modalButton, sx.mainModalButton]}
                    >
                        Share
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
