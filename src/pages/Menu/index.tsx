// react
import { useContext } from 'react';
// 3rd party
import { Drawer } from '@mui/material';
import { Outlet } from 'react-router-dom';
// components
import Sidebar from '@components/Sidebar';
import Box from '@components/Box';
// contexts
import { SidebarContext } from '@contexts/SidebarContext';

export default function Menu() {
    const sidebar = useContext(SidebarContext);
    const sidebarWidth = '16.5rem';
    return (
        <>
            <Drawer
                open={sidebar.isOpenMobile}
                variant="temporary"
                sx={{
                    display: { xs: 'block', lg: 'none' },
                    '.MuiModal-backdrop': {
                        bgcolor: '#bdbdbd99'
                    }
                }}
                ModalProps={{ keepMounted: true }}
            >
                <Sidebar
                    width={sidebarWidth}
                    onClose={() => sidebar.setIsOpenMobile(false)}
                />
            </Drawer>
            <Drawer
                open={sidebar.isOpenDesktop}
                variant="persistent"
                sx={{ display: { xs: 'none', lg: 'block' } }}
            >
                <Sidebar
                    width={sidebarWidth}
                    onClose={() => sidebar.setIsOpenDesktop(false)}
                />
            </Drawer>
            <Box
                sx={(theme) => ({
                    minHeight: '100vh',
                    [theme.breakpoints.up('lg')]: {
                        marginLeft: sidebar.isOpenDesktop
                            ? sidebarWidth
                            : '0rem',
                        transition: sidebar.isOpenDesktop
                            ? `margin-left .${theme.transitions.duration.enteringScreen}s ${theme.transitions.easing.easeOut}`
                            : `margin-left .${theme.transitions.duration.leavingScreen}s ${theme.transitions.easing.sharp}`
                    }
                })}
            >
                <Outlet />
            </Box>
        </>
    );
}
