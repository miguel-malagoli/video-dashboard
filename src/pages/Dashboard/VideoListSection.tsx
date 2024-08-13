// react
import { useCallback, useEffect, useState, useContext } from 'react';
// 3rd party
import {
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
// local
import { mockVideoList } from './mockData';
import sx from './styles';

export default function VideoListSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [fullVideoList] = useState<VideoData[]>(mockVideoList);
    const [filteredVideoList, setFilteredVideoList] =
        useState<VideoData[]>(mockVideoList);
    const [loading, setLoading] = useState(false);

    const sidebar = useContext(SidebarContext);

    const filterList = useCallback(async () => {
        setLoading(true);
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
        setLoading(false);
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
                <Typography variant="h1">My uploads</Typography>
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
            {loading && (
                <Box flexColumn sx={sx.filterFeedbackContainer}>
                    <Typography sx={sx.filterFeedbackText}>
                        Loading...
                    </Typography>
                    <LinearProgress />
                </Box>
            )}
            {!loading && !!searchQuery && filteredVideoList?.length <= 0 && (
                <Box flexColumn sx={sx.filterFeedbackContainer}>
                    <Typography sx={sx.filterFeedbackText}>
                        No videos found
                    </Typography>
                </Box>
            )}
            {!loading && filteredVideoList?.length > 0 && (
                <Box sx={sx.videoGrid}>
                    {filteredVideoList.map((data) => (
                        <VideoCard
                            key={data.id}
                            data={data}
                            onView={() => {}}
                            onReview={() => {}}
                            onEdit={() => {}}
                            onShare={() => {}}
                            onDelete={() => {}}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
}
