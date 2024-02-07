
import React, { FC, HTMLAttributes } from 'react';

//styles
import './styles.scss';
//components
import { Button } from '../../../../components';

interface InputTextPanelProps extends HTMLAttributes<HTMLDivElement> {
    value: any;
    changeMode: () => void
}

export const InputTextPanel: FC<InputTextPanelProps> = ({ value, changeMode }) => {

    const edit = () => {
        changeMode()
    }

    return (
        <>
            <div className='generalPanel__header'>
                <p className='generalPanel__title'>My School</p>
                <>
                    <Button
                        buttonType={'full'}
                        color={'blue'}
                        onClick={() => edit()}
                        text={"Edit"}
                        className='generalPanel__button'
                    />
                </>
            </div>
            <div className='grid grid-c grid-c-2'>
                <div className='inputText'>
                    <span className='inputText__label'>Company Website</span>
                    <span className='inputText__text'>{value.website}</span>
                </div>
                <div className='inputText'>
                    <span className='inputText__label'>Company Linkedin</span>
                    <span className='inputText__text'>{value.linkedin}</span>
                </div>
                <div className='inputText'>
                    <span className='inputText__label'>Business Type</span>
                    <span className='inputText__text'>{value.type}</span>
                </div>
                <div className='inputText'>
                    <span className='inputText__label'>Country</span>
                    <span className='inputText__text'>{value.country}</span>
                </div>
            </div>
        </>
    );
};