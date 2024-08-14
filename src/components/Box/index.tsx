// 3rd party
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
// local
import sx from './styles';
import { forwardRef } from 'react';

type BoxProps = MuiBoxProps & {
    flexBox?: boolean;
    flexColumn?: boolean;
    flexCenter?: boolean;
};

const Box = forwardRef(function Box(props: BoxProps, ref) {
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
            ref={ref}
        >
            {props.children}
        </MuiBox>
    );
});

export default Box;
