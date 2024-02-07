import React, {
  ChangeEvent,
  FC,
  HTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

//styles
import './styles.scss';
//assets
import { uploadCloudIcon } from '../../assets/icons';

interface UploadButtonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  files?: File[];
  setFiles?: any;
  register?: any;
  title?: string;
}

export const UploadButton: FC<UploadButtonProps> = ({
  className,
  files,
  setFiles,
  register,
  title,
}) => {
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const MAX_LENGTH = 5;

  const { ref, ...fields } = register;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    // console.log(e.target.files);
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    // console.log('handleUploadClick', files);
    // console.log('handleUploadClick 2', !files?.length);

    if (!files?.length) {
      // console.log('handleUploadClick 3', !files?.length);

      inputRef.current?.click();
    }
  };

  return (
    <>
      <div
        className={cn(
          'uploadButton',
          error && 'uploadInput--error',
          !files?.length && 'uploadInput--pointer',
          className
        )}
        onClick={handleUploadClick}
      >
        <img src={uploadCloudIcon} alt='Upload Plus' />
        {title}
      </div>
      <input
        type='file'
        // ref={inputRef}
        style={{ display: 'none' }}
        // value={''}
        {...fields}
        onChange={handleFileChange}
        ref={(instance) => {
          ref(instance); // RHF wants a reference to this input
          inputRef.current = instance; // We also need it to manipulate the elemnent
        }}
      />
      {error && <p className='uploadInput__error'>{error}</p>}
    </>
  );
};
