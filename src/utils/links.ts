import { flattenRoutes } from './../App'
import { Dict } from '../localization/l10n'

export const navlinks = (dict: Dict['navbar']['links']) => [
	{
		name: dict.dashboard,
		path: flattenRoutes['/dashboard/offers'](),
		enabled: false,
		auth: true,
	},
	{
		name: dict.marketplace,
		path: flattenRoutes['/marketplace/'](),
		// enabled: FLAGS.marketplace,
		enabled: true,
		auth: false,
	},
	// BESTBID_ADDRESS
	true
		? {
				name: dict.bestbidAuction,
				path: flattenRoutes['/bestbid/'](),
				enabled: true,
				auth: false,
		  }
		: {
				name: dict.createOffer,
				path: flattenRoutes['/create-offer'](),
				enabled: true,
				auth: true,
		  },
	{
		name: dict.root,
		path: flattenRoutes['/'](),
		enabled: true,
		auth: false,
	},
	{
		name: dict.calculator,
		path: flattenRoutes['/calculator'](),
		// enabled: !FLAGS.marketplace,
		enabled: true,
		auth: false,
	},
]

export const links = {
	general: {
		aboutMarsbase:
			'https://otc-marsbase.gitbook.io/marsbase/about-marsbase',
		helpCenter: 'https://intercom.help/marsbase/en',
		community: 'https://linktr.ee/MARSBASE',
	},
}
