import { SxClasses } from 'src/utils/styles';

const sx: SxClasses = {
    container: {
        width: '100%',
        height: '100%',
        minHeight: '100vh'
    },
    button: {
        height: '3rem',
        borderRadius: '999rem',
        fontSize: '14px',
        fontWeight: '600',
        letterSpacing: '1px',
        '&:hover': { bgcolor: 'primary.light' }
    },
    code: {
        fontSize: '80px',
        fontWeight: '700',
        lineHeight: '80px',
        color: 'text.primary'
    },
    text: {
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '20px',
        color: 'text.secondary',
        mb: 4
    }
};

export default sx;
