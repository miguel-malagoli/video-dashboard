// react
import { KeyboardEvent, useCallback, useMemo, useRef, useState } from 'react';
// 3rd party
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    ClickAwayListener,
    Grow,
    Icon,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    SxProps
} from '@mui/material';
import { Theme } from '@mui/system';
import { format } from 'date-fns';
// components
import Box from '@components/Box';
import Typography from '@components/Typography';
// utils
import { VideoData } from '@utils/data';
// local
import sx from './styles';

type VideoCardProps = {
    data: VideoData;
    sx?: SxProps<Theme>;
    onView?: (data: VideoData) => void;
    onReview?: (data: VideoData) => void;
    onEdit?: (data: VideoData) => void;
    onShare?: (data: VideoData) => void;
    onDelete?: (data: VideoData) => void;
};

export default function VideoCard(props: VideoCardProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBorderActive, setIsBorderActive] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClose = useCallback(() => {
        setIsMenuOpen(false);
        setIsBorderActive(false);
    }, [setIsMenuOpen, setIsBorderActive]);

    const handleListKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                handleClose();
                buttonRef.current?.focus();
            } else if (event.key === 'Escape') {
                handleClose();
                buttonRef.current?.focus();
            }
        },
        [buttonRef.current, handleClose]
    );

    const actions = useMemo(
        () => [
            {
                label: 'View',
                icon: 'visibility',
                prop: props.onView
            },
            {
                label: 'Review',
                icon: 'draw',
                prop: props.onReview
            },
            {
                label: 'Edit info',
                icon: 'edit',
                prop: props.onEdit
            },
            {
                label: 'Share video',
                icon: 'redo',
                prop: props.onShare
            },
            {
                label: 'Delete',
                icon: 'delete',
                prop: props.onDelete
            }
        ],
        [
            props.onView,
            props.onReview,
            props.onEdit,
            props.onShare,
            props.onDelete
        ]
    );

    return (
        <Card
            sx={[sx.card, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => videoRef.current?.pause()}
        >
            <CardHeader
                sx={sx.cardHeader}
                action={
                    <IconButton
                        ref={buttonRef}
                        id="actions-button"
                        aria-label="actions button"
                        sx={sx.optionsButton}
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Icon>more_vert</Icon>
                    </IconButton>
                }
            />
            <CardActionArea
                onClick={() => {
                    setIsMenuOpen(true);
                    setIsBorderActive(true);
                }}
                sx={[sx.cardActionArea, isBorderActive && sx.borderActive]}
            >
                {/* @ts-expect-error: https://mui.com/material-ui/api/card-media/ */}
                <CardMedia
                    ref={videoRef}
                    sx={sx.video}
                    component="video"
                    height="128"
                    src={props.data.file}
                    alt={props.data.description}
                    muted
                />
                <CardContent sx={sx.cardContent}>
                    <Typography variant="h3" sx={sx.name}>
                        {props.data.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={sx.date}>
                        {format(props.data.date, 'MM/dd/yy h:mm aaa')}
                    </Typography>
                    <Box flexBox sx={sx.tagFlex}>
                        {props.data.tags.map((tag) => (
                            <Chip key={tag} label={tag} sx={sx.tag} />
                        ))}
                    </Box>
                </CardContent>
            </CardActionArea>
            <Popper
                anchorEl={buttonRef.current}
                open={isMenuOpen}
                role={undefined}
                placement="bottom-start"
                transition
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start'
                                    ? 'left top'
                                    : 'right top'
                        }}
                    >
                        <Paper sx={{ width: '160px', maxWidth: '100%' }}>
                            <ClickAwayListener
                                onClickAway={() => {
                                    setIsMenuOpen(false);
                                    setIsBorderActive(false);
                                }}
                            >
                                <MenuList
                                    autoFocusItem={isMenuOpen}
                                    id="actions-menu"
                                    aria-labelledby="actions-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {actions.map((action) =>
                                        action.prop ? (
                                            <MenuItem
                                                key={action.label}
                                                onClick={() => {
                                                    action.prop?.(props.data);
                                                    handleClose();
                                                }}
                                                sx={sx.menuItem}
                                            >
                                                <ListItemIcon
                                                    sx={sx.listItemIcon}
                                                >
                                                    <Icon>{action.icon}</Icon>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={action.label}
                                                    primaryTypographyProps={{
                                                        variant: 'body2',
                                                        sx: sx.listItemTypography
                                                    }}
                                                />
                                            </MenuItem>
                                        ) : undefined
                                    )}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Card>
    );
}
