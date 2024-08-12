import { SxClasses } from 'src/utils/styles';

const sx: SxClasses = {
    onboardingContainer: (theme) => ({
        pt: 4,
        px: 3,
        [theme.breakpoints.up('md')]: {
            px: 4
        },
        [theme.breakpoints.up('lg')]: {
            pt: 6,
            px: 8
        }
    }),
    onboardingWelcome: {
        pb: 2.5
    },
    onboardingStep: {
        position: 'relative',
        listStyle: 'none',
        mb: 0.75
    },
    onboardingCheck: {
        display: 'block',
        position: 'absolute',
        top: '2px',
        transform: 'translate(calc(-100% - 8px))',
        fontSize: '9px',
        lineHeight: '14px',
        fontWeight: '500',
        textTransform: 'uppercase',
        py: 0.25,
        px: 0.75,
        mr: 1,
        color: 'text.primary',
        bgcolor: 'primary.main',
        borderRadius: '8px'
    },
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
