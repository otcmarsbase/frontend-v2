import { useRef, useState } from 'react';

import { Button, Input, InputGroup, InputProps, InputRightElement, Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Common } from '@shared/ui-icons';

const uploadFile = async (file: File, { id, uploadURL }: DeskGatewaySchema.FileUploader) => {
  const formData = new FormData();

  formData.append('file', file);

  const response = await fetch(uploadURL, { method: 'POST', body: formData });

  if (!response.ok) throw new Error();

  return id;
};

export interface InputUploadProps extends InputProps {
  uploadLink?: DeskGatewaySchema.FileUploader
  onUpload?: (id: string) => void,
}

export function InputWithUpload({ onChange, accept, uploadLink, onUpload, ...props }: InputUploadProps) {
  const inputFileRef = useRef<HTMLInputElement>()
  const inputRef = useRef<HTMLInputElement>()

  const [ isLoading, setIsLoading ] = useState(false)

  const onClickIcon = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsLoading(true)
    inputFileRef.current.click()
  }

  const onChangeInputFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files

    if (files.length) {
      const id = await uploadFile(files[0], uploadLink)
      if (onUpload) {
        onUpload(id)
      }
    }

    setIsLoading(false)
  }

  return (
    <InputGroup>
      <Input ref={inputRef} onChange={onChange} {...props} />
      <input type="file" accept={accept} hidden ref={inputFileRef} onChange={onChangeInputFile} />
      <InputRightElement cursor="pointer" onClick={onClickIcon}>
        <Text color="orange.500" fontSize="sm">
          <Common.UploadIcon />
        </Text>
      </InputRightElement>
    </InputGroup>
  )
}
