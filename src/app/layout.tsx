import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'ПЛАТФОРМА - Ремонт квартир Казань | Качественный ремонт под ключ',
	description:
		'Качественный ремонт квартир в Казани от компании ПЛАТФОРМА. Ремонт под ключ, профессиональная бригада, гарантия качества. ✅ Соблюдение сроков ✅ Фиксированная цена ✅ Контроль качества',
	keywords:
		'ремонт квартир казань, ремонт под ключ казань, качественный ремонт казань, строительные работы казань, отделочные работы казань, ремонт комнат казань, ремонт кухни казань, ремонт ванной казань, евроремонт казань, капитальный ремонт казань, косметический ремонт казань, дизайн интерьера казань, дизайн-проект казань, ремонтно-строительные работы казань',
	authors: [{ name: 'ООО «ПЛАТФОРМА»' }],
	creator: 'ООО «ПЛАТФОРМА»',
	publisher: 'ООО «ПЛАТФОРМА»',
	robots: 'index, follow',
	viewport: 'width=device-width, initial-scale=1',
	metadataBase: new URL('https://rehomekz.vercel.app'),
	alternates: {
		canonical: 'https://rehomekz.vercel.app',
	},
	manifest: '/manifest.json',
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
			{ url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
		],
		apple: [
			{ url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
		],
		other: [
			{
				rel: 'mask-icon',
				url: '/favicon.svg',
				color: '#938F91',
			},
		],
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: 'black-translucent',
		title: 'ПЛАТФОРМА - Ремонт квартир Казань',
	},
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: 'https://rehomekz.vercel.app',
		title: 'ПЛАТФОРМА - Качественный ремонт квартир в Казани',
		description:
			'Компания ПЛАТФОРМА выполняет качественный ремонт квартир в Казани. Ремонт под ключ с гарантией качества и соблюдением сроков. Звоните: +7 (905) 310-45-08',
		siteName: 'ООО «ПЛАТФОРМА»',
		images: [
			{
				url: '/assets/case1_ph2.webp',
				width: 1200,
				height: 630,
				alt: 'Качественный ремонт квартир в Казани - ООО «ПЛАТФОРМА»',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ПЛАТФОРМА - Ремонт квартир Казань | Качественный ремонт под ключ',
		description:
			'Качественный ремонт квартир в Казани. Профессиональная бригада, гарантия качества, соблюдение сроков.',
		images: ['/assets/case1_ph2.webp'],
	},
	other: {
		'geo.region': 'RU-TA',
		'geo.placename': 'Казань',
		'geo.position': '55.8304;49.0661',
		ICBM: '55.8304, 49.0661',
		'msapplication-TileColor': '#938F91',
		'msapplication-TileImage': '/favicon-192x192.png',
		'msapplication-config': 'none',
		'theme-color': '#938F91',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<head>
				{/* PWA Meta Tags */}
				<meta name='application-name' content='ООО «ПЛАТФОРМА»' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content='black-translucent'
				/>
				<meta name='apple-mobile-web-app-title' content='ПЛАТФОРМА' />

				{/* Microsoft Tiles */}
				<meta name='msapplication-TileColor' content='#938F91' />
				<meta name='msapplication-TileImage' content='/favicon-192x192.png' />
				<meta
					name='msapplication-square70x70logo'
					content='/favicon-48x48.png'
				/>
				<meta
					name='msapplication-square150x150logo'
					content='/favicon-192x192.png'
				/>
				<meta
					name='msapplication-square310x310logo'
					content='/favicon-512x512.png'
				/>

				{/* Preload critical resources */}
				<link
					rel='preload'
					href='/assets/case1_ph2.webp'
					as='image'
					type='image/webp'
				/>
				<link rel='dns-prefetch' href='//fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>

				{/* Yandex.Metrika counter */}
				<script
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `
							(function(m,e,t,r,i,k,a){
								m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
								m[i].l=1*new Date();
								for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
								k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
							})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103474269', 'ym');

							ym(103474269, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
						`,
					}}
				/>
				<noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/103474269'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
