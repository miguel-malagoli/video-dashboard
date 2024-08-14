import Box from '@components/Box';
import Typography from '@components/Typography';
import { Button } from '@mui/material';
import sx from './styles';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <Box flexColumn flexCenter sx={sx.container}>
            <Typography ellipsis sx={sx.code}>
                404
            </Typography>
            <Typography ellipsis sx={sx.text}>
                Page not found
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                role="link"
                sx={sx.button}
                onClick={() => navigate('/')}
            >
                Return to homepage
            </Button>
        </Box>
    );
}
