import { flattenRoutes } from '@/AppRoutes'
import { Dict } from '@/localization/l10n'

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
	{
		name: 'SAFT / Vesting (soon)',
		path: flattenRoutes['/'],
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
		howToUse:
			'https://www.youtube.com/watch?v=MIp9Q2ucXKc&ab_channel=INSIDEOTC',
	},
	footer: {
		pitchDesk:
			'https://drive.google.com/file/d/1OerpyQdyqwKixW0Mc5D16-vumskeG8qK/view',
		license:
			'https://drive.google.com/file/d/1nf3_Q3ZOIBAqf5w6JVzekKACsfsIQTkB/view?usp=sharing',
		privacyPolicy:
			'https://drive.google.com/file/d/1mHwB3uSvzpRFOQftK8EOTmxMRX2LVfq8/view?usp=sharing',
		whitePaper:
			'https://drive.google.com/file/d/1Sa_eUfxlkOuOYMC9pktU-Nbgp5uKL3A_/view',
		support: 'https://intercom.help/marsbase/en',
		dOTCDesk: 'https://app.otcmarsbase.io/en/trading#',
		terms: 'https://drive.google.com/file/d/1PlJSXdu7b8dH3EAY7XY7NPSsB9YZS6Pg/view?usp=sharing',
		knowledgeBase:
			'https://otc-marsbase.gitbook.io/marsbase/D4i0W5CUWz8SJkPxT7zF/',
	},
	social: {
		fb: 'https://facebook.com/',
		twitter: 'https://twitter.com/MARSBASEio',
		vk: 'https://vk.com/',
		youtube: 'https://youtube.com/',
		google: 'https://google.com',
		ok: 'https://ok.ru',
		discord:
			'https://discord.com/channels/889519633890177074/892286634224132106',
		reddit: 'https://www.reddit.com/r/MarsbaseCryptoOTC/',
		telegram: 'https://t.me/otcmarsbase',
		linktree: 'https://linktr.ee/MARSBASE',
		medium: 'https://marsbaseotc.medium.com/',
	},
}
