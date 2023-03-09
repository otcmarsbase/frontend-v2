import React from 'react'

type BBViewOfferProps = {
	creatingBid: boolean
}

// TODO: Можно ли разделить экраны так, чтобы не прокидывать creatingBid?
export const BBViewOffer: React.FC<BBViewOfferProps> = ({ creatingBid }) => {
	return <div>BBViewOffer screen</div>
}
