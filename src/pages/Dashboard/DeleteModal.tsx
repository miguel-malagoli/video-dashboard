// react
import { useCallback } from 'react';
// 3rd party
import { Button, Modal } from '@mui/material';
// components
import Box from '@components/Box';
import Typography from '@components/Typography';
// utils
import { VideoData } from '@utils/data';
// local
import sx from './styles';

type DeleteModalProps = {
    open: boolean;
    videoData: VideoData | undefined;
    onCancel: () => void;
    onDelete: (newVideoData: VideoData) => void;
};

export default function DeleteModal(props: DeleteModalProps) {
    const handleCancel = useCallback(async () => {
        props.onCancel?.();
    }, []);

    const handleDelete = async () => {
        if (!props.videoData) return;
        props.onDelete?.(props.videoData);
    };

    return (
        <Modal open={props.open}>
            <Box sx={sx.modalContainer}>
                <Typography variant="h3" sx={sx.modalTitle}>
                    {
                        "Are you sure you want to delete this video? This can't be undone."
                    }
                </Typography>
                <Box flexBox sx={sx.modalButtonContainer}>
                    <Button
                        onClick={handleDelete}
                        variant="text"
                        color="secondary"
                        size="large"
                        sx={sx.modalButton}
                    >
                        Yes
                    </Button>
                    <Button
                        onClick={handleCancel}
                        variant="text"
                        color="secondary"
                        size="large"
                        sx={[sx.modalButton, sx.mainModalButton]}
                    >
                        No
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
