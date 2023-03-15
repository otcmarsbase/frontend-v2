import React from 'react'
import { MainScreenTop } from '../components/MainScreenTop/MainScreenTop'
import { MainScreenWrapper } from '../components/MainScreenWrapper/MainScreenWrapper'

type MainProps = {}

export const Main: React.FC<MainProps> = ({}) => {
	return <MainScreenWrapper top={<MainScreenTop onCreateOfferClick={() => {}}/>}>HELLO WORLD</MainScreenWrapper>
}
