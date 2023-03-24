import { Image as Img } from '@chakra-ui/react'
import React from 'react'
import styles from './Image.module.scss'

export type ImgSize = 'auto' | 's' | 'm' | 'l'

export const Image: React.FCC<
	React.ComponentProps<typeof Img> & { size?: ImgSize }
> = ({ size = 'auto', ...props }) => {
	return <Img className={styles[size]} {...props} />
}
