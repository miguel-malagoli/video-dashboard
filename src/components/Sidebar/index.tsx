// react
import { CSSProperties } from 'react';
// 3rd party
import {
    Button,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
// components
import Box from '@components/Box';
import Typography from '@components/Typography';
// assets
import logo from '@assets/pactto-logo.svg';
import profile from '@assets/profile.jpg';
// utils
import routes from '@pages/routes';
// local
import sx from './styles';

type SidebarProps = {
    onClose: () => void;
    onNavigate?: () => void;
    width: CSSProperties['width'];
};

export default function Sidebar(props: SidebarProps) {
    const days: number = 6;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return (
        <Box flexColumn sx={[sx.baseContainer, { width: props.width }]}>
            <Box sx={sx.topSection}>
                <Box flexCenter sx={sx.logoContainer}>
                    <img src={logo} width={140} height={45} />
                    <IconButton
                        aria-label="close navigation"
                        onClick={props.onClose}
                        sx={sx.closeButton}
                    >
                        <Icon>chevron_left</Icon>
                    </IconButton>
                </Box>
                <Box sx={sx.profileContainer}>
                    <Typography component="span" sx={sx.yourProfile}>
                        Your Pactto Profile
                    </Typography>
                    <Box flexCenter sx={sx.profileFlex}>
                        <Box sx={sx.imageContainer}>
                            <img
                                src={profile}
                                width={40}
                                height={40}
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                        <Box>
                            <Typography
                                component="span"
                                ellipsis
                                sx={sx.trialText}
                            >
                                Trial: {days} day{days !== 1 && 's'} left
                            </Typography>
                            <Box flexBox>
                                <Box sx={sx.proBox}>
                                    <Typography
                                        component="span"
                                        sx={sx.proLabel}
                                    >
                                        Pactto Pro
                                    </Typography>
                                </Box>
                                <Button
                                    variant="text"
                                    disableElevation
                                    sx={{
                                        ml: 1.25,
                                        padding: 0,
                                        minWidth: 0,
                                        color: 'text.secondary',
                                        textDecoration: 'underline !important',
                                        textTransform: 'none',
                                        fontSize: '12px',
                                        lineHeight: '1em',
                                        fontWeight: '400',
                                        bgcolor: 'transparent !important'
                                    }}
                                >
                                    upgrade
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Typography component="span" ellipsis sx={sx.username}>
                        John Doe
                    </Typography>
                    <Typography component="span" ellipsis sx={sx.memberSince}>
                        Pactto member since 2024
                    </Typography>
                </Box>
            </Box>
            <Box component="nav" sx={sx.navContainer}>
                <List>
                    {routes.map((route) => (
                        <ListItem sx={sx.listItem} key={route.path}>
                            <ListItemButton
                                sx={sx.listItemButton}
                                selected={pathname === route.path}
                                onClick={() => {
                                    navigate(route.path);
                                    props.onNavigate?.();
                                }}
                            >
                                <ListItemIcon sx={sx.listItemIcon}>
                                    <Icon>{route.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText
                                    primary={route.label}
                                    primaryTypographyProps={{
                                        variant: 'body2',
                                        sx: sx.listItemTypography
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={sx.buttonContainer}>
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={sx.logoutButton}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    );
}
