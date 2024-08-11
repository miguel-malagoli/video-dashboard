// 3rd party
import { Icon, InputAdornment, TextField } from '@mui/material';
// utils
import Base from '@pages/Base';

export default function DashboardPage() {
    return (
        <Base title="My uploads">
            <TextField
                placeholder="Search"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon>search</Icon>
                        </InputAdornment>
                    )
                }}
            />
        </Base>
    );
}
