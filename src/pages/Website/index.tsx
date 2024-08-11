// 3rd party
import { Icon, InputAdornment, TextField } from '@mui/material';
// utils
import Base from '@pages/Base';

export default function WebsitePage() {
    return (
        <Base title="Edit yout Pactto page">
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
