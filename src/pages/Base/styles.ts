import { SxClasses } from 'src/utils/styles';

const sx: SxClasses = {
    baseContainer: (theme) => ({
        py: 2,
        px: 3,
        [theme.breakpoints.up('md')]: {
            px: 4
        },
        [theme.breakpoints.up('lg')]: {
            py: 4,
            px: 8
        }
    }),
    titleFlex: {
        alignItems: 'center',
        my: 2.5,
        pb: 2
    },
    sidebarButton: {
        width: 40,
        height: 40,
        color: 'text.secondary',
        border: 1,
        borderColor: 'text.secondary',
        mr: 2
    }
};

export default sx;
