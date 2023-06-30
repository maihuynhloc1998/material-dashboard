import type { FC } from 'react';
import {LoadingButton, LoadingButtonProps} from '@mui/lab';

interface Props extends LoadingButtonProps {

}

const AppButton : FC<Props> = (props) => {
    return <LoadingButton {...props} ></LoadingButton>;
}

export default AppButton;
