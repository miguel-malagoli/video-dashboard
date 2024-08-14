// 3rd party
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// components
import Box from '@components/Box';
import Typography from '@components/Typography';
// local
import sx from './styles';

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
