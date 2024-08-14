import { SxClasses } from 'src/utils/styles';

const sx: SxClasses = {
    baseContainer: (theme) => ({
        pt: 2,
        px: 3,
        pb: 3,
        [theme.breakpoints.up('md')]: {
            px: 4,
            pb: 4
        },
        [theme.breakpoints.up('lg')]: {
            pt: 4,
            px: 8,
            pb: 8
        }
    }),
    titleFlex: {
        flexWrap: 'wrap',
        alignItems: 'center',
        my: 2.5,
        pb: 2,
        gap: 2
    },
    sidebarButton: {
        width: 40,
        height: 40,
        color: 'text.secondary',
        border: 1,
        borderColor: 'text.secondary'
    },
    title: {
        flex: '1 0 auto'
    },
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
    uploadButton: {
        height: '3rem',
        borderRadius: '999rem',
        fontSize: '14px',
        fontWeight: '600',
        letterSpacing: '1px',
        '&:hover': { bgcolor: 'primary.light' }
    },
    loadingContainer: {
        alignItems: 'stretch',
        width: '100%'
    },
    loadingText: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '500',
        color: 'text.primary',
        textAlign: 'center',
        mb: 1.5
    },
    videoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '16px',
        marginTop: '16px'
    },
    modalContainer: (theme) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30rem',
        maxWidth: '90vw',
        bgcolor: 'background.paper',
        borderRadius: '4px',
        boxShadow: 24,
        p: 2,
        [theme.breakpoints.up('md')]: {
            p: 4
        }
    }),
    modalTitle: {
        pb: 5
    },
    form: {
        width: '100%',
        mb: 4
    },
    chip: (theme) => ({
        bgcolor: `${theme.palette.common.white}22`
    }),
    modalButtonContainer: {
        mt: 6,
        gap: 2
    },
    modalButton: (theme) => ({
        textTransform: 'none',
        '&:hover': { bgcolor: `${theme.palette.secondary.main}22` }
    }),
    mainModalButton: {
        color: 'text.primary'
    }
};

export default sx;
