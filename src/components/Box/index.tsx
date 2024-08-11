// 3rd party
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
// local
import sx from './styles';

type BoxProps = MuiBoxProps & {
    flexBox?: boolean;
    flexColumn?: boolean;
    flexCenter?: boolean;
};

export default function Box(props: BoxProps) {
    const { sx: sxFromProps, flexBox, flexColumn, flexCenter, ...rest } = props;
    return (
        <MuiBox
            sx={[
                !!flexBox && sx.flexBox,
                !!flexColumn && sx.flexColumn,
                !!flexCenter && sx.flexCenter,
                ...(Array.isArray(sxFromProps) ? sxFromProps : [sxFromProps])
            ]}
            {...rest}
        >
            {props.children}
        </MuiBox>
    );
}
