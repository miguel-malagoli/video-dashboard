// react
import { useCallback, useEffect, useState, useContext } from 'react';
// 3rd party
import {
    Button,
    Icon,
    IconButton,
    InputAdornment,
    LinearProgress,
    TextField
} from '@mui/material';
// components
import VideoCard from '@components/VideoCard';
import Box from '@components/Box';
import Typography from '@components/Typography';
// contexts
import { SidebarContext } from '@contexts/SidebarContext';
// utils
import { mockResponseTime } from '@utils/mockResponseTime';
import { VideoData } from '@utils/data';
import { sortByDate } from '@utils/sorters';
// local
import { mockVideoList } from './mockData';
import sx from './styles';
import UploadModal from './UploadModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import ShareModal from './ShareModal';

type VideoAction = {
    action: 'edit' | 'share' | 'delete';
    video: VideoData;
};

export default function VideoListSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [fullVideoList, setFullVideoList] =
        useState<VideoData[]>(mockVideoList);
    const [filteredVideoList, setFilteredVideoList] =
        useState<VideoData[]>(mockVideoList);
    const [uploadFile, setUploadFile] = useState<File | undefined>();
    const [videoAction, setVideoAction] = useState<VideoAction | undefined>();
    const [loadingList, setLoadingList] = useState(false);

    const sidebar = useContext(SidebarContext);

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
        await mockResponseTime(1500);
        setLoadingList(false);
    }, [searchQuery, fullVideoList]);

    useEffect(() => {
        const timeOutId = setTimeout(() => filterList(), 300);
        return () => clearTimeout(timeOutId);
    }, [filterList]);

    return (
        <Box component="section" sx={sx.baseContainer}>
            <Box flexBox sx={sx.titleFlex}>
                <IconButton
                    aria-label="open navigation"
                    onClick={() => sidebar.setIsOpenMobile(true)}
                    sx={[sx.sidebarButton, { display: { lg: 'none' } }]}
                >
                    <Icon>menu</Icon>
                </IconButton>
                <IconButton
                    aria-label="open navigation"
                    onClick={() => sidebar.setIsOpenDesktop(true)}
                    sx={[
                        sx.sidebarButton,
                        {
                            display: {
                                xs: 'none',
                                lg: sidebar.isOpenDesktop
                                    ? 'none'
                                    : 'inline-flex'
                            }
                        }
                    ]}
                >
                    <Icon>menu</Icon>
                </IconButton>
                <Typography variant="h1" sx={sx.title}>
                    My uploads
                </Typography>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={sx.uploadButton}
                    startIcon={<Icon>add</Icon>}
                >
                    Upload new video
                    <input
                        style={{
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(50%)',
                            height: 1,
                            overflow: 'hidden',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            whiteSpace: 'nowrap',
                            width: 1
                        }}
                        type="file"
                        accept="video/mp4,video/x-m4v,video/*"
                        onChange={(event) => {
                            if (!event.target.files?.[0]) return;
                            setUploadFile(event.target.files?.[0]);
                        }}
                    />
                </Button>
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
                            onReview={() => {}}
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
                }}
            />
            <ShareModal
                open={videoAction?.action === 'share'}
                videoData={videoAction?.video}
                onCancel={() => setVideoAction(undefined)}
                onShare={() => {}}
            />
        </Box>
    );
}
