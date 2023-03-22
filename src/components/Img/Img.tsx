import clsx from 'clsx'
import React from 'react'
import styles from './Img.module.scss'

export type ImgSize = 'auto' | 's' | 'm' | 'l'

type ImgProps = {
	src: string
	alt?: string
	size?: ImgSize
}

export const Img: React.FCC<ImgProps> = ({ src, alt = '', size = 'auto' }) => {
	return (
		<img className={clsx(styles.img, styles[size])} src={src} alt={alt} />
	)
}
