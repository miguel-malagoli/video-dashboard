import { SystemStyleObject, Theme } from '@mui/system';

export type SxClasses = {
    [key: string]:
        | SystemStyleObject<Theme>
        | ((theme: Theme) => SystemStyleObject<Theme>);
};
