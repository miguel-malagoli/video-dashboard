import { SxClasses } from 'src/utils/styles';

const sx: SxClasses = {
    card: {
        position: 'relative',
        bgcolor: 'common.black',
        cursor: 'pointer'
    },
    cardHeader: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        py: 1,
        px: 1.5
    },
    optionsButton: (theme) => ({
        color: 'text.primary',
        bgcolor: `${theme.palette.common.black}77`,
        '&:hover': {
            bgcolor: `${theme.palette.common.white}33`
        }
    }),
    cardActionArea: {
        border: 2,
        borderColor: 'transparent',
        borderRadius: '4px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    borderActive: {
        borderColor: 'primary.main'
    },
    cardContent: {
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    video: {
        bgcolor: '#000000'
    },
    name: {
        flex: '1 0 auto',
        mb: 2
    },
    date: {
        mb: 1.5
    },
    tagFlex: {
        gap: 1,
        flexWrap: 'wrap'
    },
    tag: {
        fontSize: '10px',
        lineHeight: '10px',
        fontWeight: '500',
        letterSpacing: '0.3px',
        color: 'text.secondary',
        bgcolor: 'background.paper',
        borderRadius: '999rem',
        py: 0.75,
        px: 1.25
    },
    menuItem: {
        height: '40px',
        px: 2,
        '&:hover': { bgcolor: 'transparent' },
        '&:hover::before': {
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
    }
};

export default sx;
