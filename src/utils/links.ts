import { Dict } from '../localization/l10n'

const routes = (dict: Dict['navbar']['links']) => [
	{
		name: dict.dashboard,
		path: ROUTES.dashboard_offers,
		enabled: false,
		auth: true,
	},
	{
		name: dict.marketplace,
		path: ROUTES.marketplace._.full,
		enabled: FLAGS.marketplace,
		auth: false,
	},
	BESTBID_ADDRESS
		? {
				name: dict.bestbidAuction,
				path: ROUTES.bestbid._.full,
				enabled: true,
				auth: false,
		  }
		: {
				name: dict.createOffer,
				path: ROUTES.createOffer,
				enabled: true,
				auth: true,
		  },
	{
		name: dict.root,
		path: ROUTES.root,
		enabled: true,
		auth: false,
	},
	{
		name: dict.calculator,
		path: ROUTES.calculator,
		enabled: !FLAGS.marketplace,
		auth: false,
	},
]
