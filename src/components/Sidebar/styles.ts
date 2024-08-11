import { SxClasses } from 'src/utils/styles';

const sx: SxClasses = {
    baseContainer: {
        minHeight: '100vh',
        bgcolor: 'background.paper'
    },
    topSection: {
        pt: 4,
        px: 4
    },
    logoContainer: {
        justifyContent: 'space-between'
    },
    closeButton: {
        width: 40,
        height: 40,
        color: 'text.secondary',
        border: 1,
        borderColor: 'text.secondary'
    },
    profileContainer: {
        pt: 5.25,
        pb: 1.5
    },
    profileFlex: {
        justifyContent: 'flex-start'
    },
    yourProfile: {
        display: 'block',
        textTransform: 'uppercase',
        color: 'text.disabled',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '1.5rem',
        my: 1
    },
    imageContainer: {
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        mr: 1.25,
        overflow: 'hidden'
    },
    trialText: {
        color: 'text.secondary',
        fontSize: '7px',
        lineHeight: '1em',
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: '0.5px',
        display: 'block',
        mt: -0.625,
        mb: 0.375
    },
    proBox: {
        flex: '1 0 auto',
        padding: '0.375rem',
        borderRadius: '0.1875rem',
        bgcolor: 'primary.main'
    },
    proLabel: {
        display: 'block',
        textTransform: 'uppercase',
        color: 'text.primary',
        letterSpacing: '0.5px',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '1em'
    },
    username: {
        mt: 3.5,
        fontSize: '20px',
        lineHeight: '1.5em',
        display: 'block'
    },
    memberSince: {
        fontSize: '14px',
        lineHeight: '1.25rem',
        letterSpacing: '0.25px',
        color: 'text.secondary',
        display: 'block'
    },
    navContainer: {
        flex: '1 0 auto',
        width: '100%'
    },
    listItem: {
        color: 'text.secondary',
        height: '3rem',
        padding: 0
    },
    listItemButton: {
        height: '100%',
        px: 4,
        '&.Mui-selected, &.Mui-selected:hover': {
            color: 'primary.main',
            bgcolor: 'info.dark'
        },
        '&:hover': { bgcolor: 'transparent' },
        '&:hover::before, &.Mui-selected:hover::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'common.white',
            opacity: '.08'
        }
    },
    listItemIcon: { minWidth: 0, mr: 1.5, color: 'inherit' },
    listItemTypography: {
        letterSpacing: 'normal',
        overflow: 'hidden',
        textWrap: 'nowrap',
        textOverflow: 'ellipsis'
    },
    buttonContainer: { width: '100%', padding: 4 },
    logoutButton: {
        height: '3rem',
        borderRadius: '999rem',
        fontSize: '14px',
        fontWeight: '600',
        letterSpacing: '1px',
        '&:hover': { bgcolor: 'secondary.light' }
    }
};

export default sx;
