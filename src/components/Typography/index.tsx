// 3rd party
import MuiTypography, {
    TypographyProps as MuiTypographyProps
} from '@mui/material/Typography';
// local
import sx from './styles';

type TypographyProps = MuiTypographyProps & {
    ellipsis?: boolean;
};

export default function Typography(props: TypographyProps) {
    const { sx: sxFromProps, ellipsis, ...rest } = props;
    return (
        <MuiTypography
            sx={[
                !!ellipsis && sx.ellipsis,
                ...(Array.isArray(sxFromProps) ? sxFromProps : [sxFromProps])
            ]}
            {...rest}
        >
            {props.children}
        </MuiTypography>
    );
}
