// react
import { useCallback, useEffect, useState } from 'react';
// 3rd party
import {
    Autocomplete,
    Button,
    FormControl,
    LinearProgress,
    Modal,
    TextField
} from '@mui/material';
// components
import Box from '@components/Box';
import Typography from '@components/Typography';
// utils
import { mockResponseTime } from '@utils/mockResponseTime';
import { VideoData } from '@utils/data';
// local
import sx from './styles';

type EditModalProps = {
    open: boolean;
    videoData: VideoData | undefined;
    onCancel: () => void;
    onSave: (newVideoData: VideoData) => void;
};

export default function EditModal(props: EditModalProps) {
    const [nameValue, setNameValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [tagsValue, setTagsValue] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleCancel = useCallback(async () => {
        props.onCancel?.();
    }, []);

    const handleSave = async () => {
        if (!nameValue || !props.videoData) return;
        setLoading(true);
        await mockResponseTime(1000);
        props.onSave?.({
            ...props.videoData,
            name: nameValue,
            description: descriptionValue,
            tags: tagsValue
        });
        setLoading(false);
    };

    useEffect(() => {
        setNameValue(props.videoData?.name ?? '');
        setDescriptionValue(props.videoData?.description ?? '');
        setTagsValue(props.videoData?.tags ?? []);
    }, [props.videoData]);

    return (
        <Modal open={props.open}>
            <Box sx={sx.modalContainer}>
                <Typography variant="h2" sx={sx.modalTitle}>
                    Video details
                </Typography>
                <FormControl sx={sx.form}>
                    <TextField
                        id="title-input"
                        label="Title"
                        value={nameValue}
                        onChange={(event) => setNameValue(event.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                        inputProps={{ maxLength: 50 }}
                        error={!nameValue}
                        helperText={!nameValue ? 'Title is required' : ' '}
                    />
                    <TextField
                        id="description-input"
                        label="Description"
                        value={descriptionValue}
                        onChange={(event) =>
                            setDescriptionValue(event.target.value)
                        }
                        multiline
                        fullWidth
                        sx={{ mb: 5 }}
                        inputProps={{ maxLength: 200 }}
                    />
                    <Autocomplete
                        id="tags-input"
                        multiple
                        options={[]}
                        freeSolo
                        disableClearable
                        value={tagsValue}
                        onChange={(_event, value) => setTagsValue(value)}
                        ChipProps={{
                            sx: sx.chip
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Tags"
                                inputProps={{
                                    ...params.inputProps,
                                    maxLength: 50
                                }}
                            />
                        )}
                    />
                </FormControl>
                {loading && (
                    <Box flexColumn sx={sx.loadingContainer}>
                        <LinearProgress />
                    </Box>
                )}
                <Box flexBox sx={sx.modalButtonContainer}>
                    <Button
                        onClick={handleCancel}
                        variant="text"
                        color="secondary"
                        size="large"
                        sx={sx.modalButton}
                    >
                        Close
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="text"
                        color="secondary"
                        size="large"
                        sx={[sx.modalButton, sx.mainModalButton]}
                    >
                        Save and close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
