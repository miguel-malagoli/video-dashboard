// react
import { useCallback, useEffect, useState } from 'react';
// 3rd party
import {
    Icon,
    IconButton,
    InputAdornment,
    LinearProgress,
    Snackbar,
    TextField
} from '@mui/material';
// components
import VideoCard from '@components/VideoCard';
import Box from '@components/Box';
import Typography from '@components/Typography';
// utils
import { mockResponseTime } from '@utils/mockResponseTime';
import { VideoData } from '@utils/data';
import { sortByDate } from '@utils/sorters';
// local
import { mockReviewList } from './mockData';
import sx from './styles';
import UploadModal from './UploadModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import ShareModal from './ShareModal';

type VideoAction = {
    action: 'edit' | 'share' | 'delete';
    video: VideoData;
};

export default function ReviewListSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [fullVideoList, setFullVideoList] =
        useState<VideoData[]>(mockReviewList);
    const [filteredVideoList, setFilteredVideoList] =
        useState<VideoData[]>(mockReviewList);
    const [uploadFile, setUploadFile] = useState<File | undefined>();
    const [videoAction, setVideoAction] = useState<VideoAction | undefined>();
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [loadingList, setLoadingList] = useState(false);

    const filterList = useCallback(async () => {
        setLoadingList(true);
        setFilteredVideoList(
            fullVideoList.filter((video) => {
                const regex = new RegExp(searchQuery, 'i');
                return (
                    regex.test(video.name) ||
                    regex.test(video.description) ||
                    video.tags.some((tag) => regex.test(tag))
                );
            })
        );
        await mockResponseTime(500);
        setLoadingList(false);
    }, [searchQuery, fullVideoList]);

    useEffect(() => {
        const timeOutId = setTimeout(() => filterList(), 300);
        return () => clearTimeout(timeOutId);
    }, [filterList]);

    return (
        <Box component="section" sx={sx.baseContainer}>
            <Box flexBox sx={sx.titleFlex}>
                <Typography variant="h1">Reviews by me</Typography>
            </Box>
            <TextField
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon>search</Icon>
                        </InputAdornment>
                    )
                }}
                sx={{ mb: 4 }}
            />
            {loadingList && (
                <Box flexColumn sx={sx.loadingContainer}>
                    <Typography sx={sx.loadingText}>Loading...</Typography>
                    <LinearProgress />
                </Box>
            )}
            {!loadingList &&
                !!searchQuery &&
                filteredVideoList?.length <= 0 && (
                    <Box flexColumn sx={sx.loadingContainer}>
                        <Typography sx={sx.loadingText}>
                            No videos found
                        </Typography>
                    </Box>
                )}
            {!loadingList && filteredVideoList?.length > 0 && (
                <Box sx={sx.videoGrid}>
                    {filteredVideoList.map((data) => (
                        <VideoCard
                            key={data.id}
                            data={data}
                            onView={() => {}}
                            onEdit={() =>
                                setVideoAction({ video: data, action: 'edit' })
                            }
                            onShare={() =>
                                setVideoAction({ video: data, action: 'share' })
                            }
                            onDelete={() =>
                                setVideoAction({
                                    video: data,
                                    action: 'delete'
                                })
                            }
                        />
                    ))}
                </Box>
            )}
            <UploadModal
                open={!!uploadFile}
                file={uploadFile}
                onCancel={() => setUploadFile(undefined)}
                onSave={(newVideo) => {
                    setFullVideoList(
                        [...fullVideoList, newVideo].sort(sortByDate)
                    );
                    setUploadFile(undefined);
                }}
            />
            <EditModal
                open={videoAction?.action === 'edit'}
                videoData={videoAction?.video}
                onCancel={() => setVideoAction(undefined)}
                onSave={(newVideo) => {
                    setFullVideoList(
                        fullVideoList.map((video) =>
                            video.id === newVideo.id ? newVideo : video
                        )
                    );
                    setVideoAction(undefined);
                }}
            />
            <DeleteModal
                open={videoAction?.action === 'delete'}
                videoData={videoAction?.video}
                onCancel={() => setVideoAction(undefined)}
                onDelete={(deletedVideo) => {
                    setFullVideoList(
                        fullVideoList.filter(
                            (video) => video.id !== deletedVideo.id
                        )
                    );
                    setVideoAction(undefined);
                    setSnackbarMessage('Item removed successfully');
                }}
            />
            <ShareModal
                open={videoAction?.action === 'share'}
                videoData={videoAction?.video}
                onCancel={() => setVideoAction(undefined)}
                onShare={() => {}}
            />
            <Snackbar
                open={!!snackbarMessage}
                autoHideDuration={5000}
                onClose={() => setSnackbarMessage('')}
                message={snackbarMessage}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={() => setSnackbarMessage('')}
                    >
                        <Icon>close</Icon>
                    </IconButton>
                }
            />
        </Box>
    );
}
