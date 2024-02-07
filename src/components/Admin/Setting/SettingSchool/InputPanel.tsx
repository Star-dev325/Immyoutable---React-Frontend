import React, { FC, HTMLAttributes, useState } from 'react';

//styles
import './styles.scss';
//components
import { Input, Button, InputSelect } from '../../../../components';

interface InputPanelProps extends HTMLAttributes<HTMLDivElement> {
    watch: any;
    register: any;
    changeMode: () => void
}

export const InputPanel: FC<InputPanelProps> = ({
    watch,
    register,
    changeMode,
}) => {
    const [website, setWebsite] = useState<string>(watch.website);
    const [linkedin, setLinkedin] = useState<string>(watch.linkedin);
    const [type, setType] = useState<string>(watch.type);
    const [country, setCountry] = useState<string>(watch.country);

    const save = () => {
        register({
            website: website,
            linkedin: linkedin,
            type: type,
            country: country
        })
        changeMode()
    }

    const cancel = () => {
        changeMode()
    }

    return (
        <>
            <div className='generalPanel__header'>
                <p className='generalPanel__title'>Business Information</p>
                <div className='align-center'>
                    <Button
                        buttonType={'full'}
                        color={'blue'}
                        onClick={() => cancel()}
                        text={"Cancel"}
                        className='generalPanel__button mr8'
                    />
                    <Button
                        buttonType={'full'}
                        color={'blue'}
                        onClick={() => save()}
                        text={"Save"}
                        className='generalPanel__button'
                    />
                </div>
            </div>
            <div className='grid grid-c grid-c-2'>
                <Input
                    label='Company Website'
                    className='auth__input'
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    // type='email'
                    name='website'
                    // error={errors.email?.message}
                    placeholder=''
                />
                <Input
                    label='Company LinkedIn'
                    className='auth__input'
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    // type='email'
                    name='linkedin'
                    // error={errors.email?.message}
                    placeholder=''
                />
                <InputSelect
                    label='Business Type'
                    className='auth__input'
                    options={['Higher Education']}
                    selected={type}
                    setSelected={setType}
                />
                <InputSelect
                    label='Country'
                    className='auth__input'
                    options={['United States', 'Canada']}
                    selected={country}
                    setSelected={setCountry}
                />
                {/* <Input
                label='Business Type'
                className='auth__input'
                value={type}
                onChange={(e) => setType(e.target.value)}
                // type='email'
                name='email'
                // error={errors.email?.message}
                placeholder=''
            /> */}
                {/* <Input
                label='Country'
                className='auth__input'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                // type='email'
                name='country'
                // error={errors.email?.message}
                placeholder=''
            /> */}
            </div>
        </>
    );
};