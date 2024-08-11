// react
import React, { useContext } from 'react';
// 3rd party
import { Icon, IconButton } from '@mui/material';
// components
import Typography from '@components/Typography';
import Box from '@components/Box';
// contexts
import { SidebarContext } from '@contexts/SidebarContext';
// local
import sx from './styles';

type BaseProps = {
    title: string;
    children: React.ReactNode;
};

export default function Base(props: BaseProps) {
    const sidebar = useContext(SidebarContext);
    return (
        <Box sx={sx.baseContainer}>
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
                <Typography variant="h1">{props.title}</Typography>
            </Box>
            {props.children}
        </Box>
    );
}
