'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

// Structured Data for SEO
const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: 'ПЛАТФОРМА - Качественный ремонт квартир',
	image: 'https://rehomekz.vercel.app/assets/case1_ph2.webp',
	'@id': 'https://rehomekz.vercel.app',
	url: 'https://rehomekz.vercel.app',
	telephone: '+7-905-310-45-08',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Нахимовский пр-т, 56',
		addressLocality: 'Москва',
		postalCode: '117218',
		addressRegion: 'Москва',
		addressCountry: 'RU',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 55.6781,
		longitude: 37.5587,
	},
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
		opens: '09:00',
		closes: '20:00',
	},
	sameAs: ['https://t.me/alakhmetov5', 'https://wa.me/79053104508'],
	priceRange: '₽₽₽',
	servedCuisine: ['Interior Design', 'Home Renovation'],
	description:
		'Качественный ремонт квартир под ключ в Казани. Компания ПЛАТФОРМА выполняет профессиональный ремонт с гарантией качества.',
	areaServed: [
		{
			'@type': 'City',
			name: 'Москва',
		},
		{
			'@type': 'City',
			name: 'Казань',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Услуги дизайна интерьера',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Дизайн-проект квартиры',
					description: 'Полный дизайн-проект квартиры с 3D визуализацией',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Ремонт под ключ',
					description: 'Комплексный ремонт квартир под ключ в Казани',
				},
			},
		],
	},
	founder: {
		'@type': 'Organization',
		name: 'ООО «ПЛАТФОРМА»',
	},
}

export default function Home() {
	// Chat widget state
	const [isChatOpen, setIsChatOpen] = useState(false)



	return (
		<>
			<Head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
				<meta name='geo.region' content='RU-MOW' />
				<meta name='geo.placename' content='Москва' />
				<meta name='geo.position' content='55.6781;37.5587' />
				<meta name='ICBM' content='55.6781, 37.5587' />
				<link rel='canonical' href='https://rehomekz.vercel.app' />
			</Head>
			<div
				className='min-h-screen bg-black text-white overflow-x-hidden'
				style={{
					WebkitOverflowScrolling: 'touch',
					overflowY: 'auto',
				}}
			>


				<Header />

				{/* Hero Section */}
				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className='relative h-screen flex items-center justify-center px-4 overflow-hidden pt-20'
				>
					{/* Background Image */}
					<div className='absolute inset-0'>
						<Image
							src='/assets/case1_ph2.webp'
							alt='Дизайн интерьера квартиры в Казани - современный ремонт от REHOME'
							fill
							className='object-cover'
							priority
						/>
						<div className='absolute inset-0 bg-black/50' />
					</div>

					{/* Content */}
					<div className='relative z-10 text-center max-w-6xl mx-auto mt-20 md:mt-0'>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className='mb-8'
						>
							<h1 className='text-4xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-none md:leading-tight'>
								КАЧЕСТВЕННЫЙ РЕМОНТ
								<br />
								КВАРТИР
							</h1>
							<p className='text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-light'>
								Профессиональный ремонт под ключ в Казани
								<br />С дизайн-проектом и авторским надзором
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1.2 }}
						>
							<motion.a
								href='#contact'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='inline-block bg-white/10 backdrop-blur-xl text-white px-12 py-5 rounded-full font-medium text-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all'
							>
								Узнать стоимость ремонта
							</motion.a>
						</motion.div>
					</div>
				</motion.section>

				{/* Main Story Section */}
				<section className='py-16 md:py-32 relative'>
					<div className='container mx-auto px-4 md:px-8 max-w-4xl'>
						{/* Problem Statement */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className='mb-16 md:mb-24'
						>
							<div className='bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 md:p-12 text-center'>
								<h3 className='text-3xl md:text-4xl font-light mb-6 text-white'>
									Сделать красивый ремонт хотят все
								</h3>
								<p className='text-lg text-white/80 mb-4 leading-relaxed'>
									Но почему одни довольны результатом, а другие жалеют о
									потраченных деньгах?
								</p>
								<p className='text-base text-white/70 leading-relaxed max-w-2xl mx-auto'>
									Дело не в том, какой дизайнер нарисует проект. Главное — КАК
									этот проект будет воплощен в реальность.
								</p>
							</div>
						</motion.div>

						{/* Main Question */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
							className='text-center mb-16 md:mb-24'
						>
							<h3 className='text-4xl md:text-5xl font-light mb-8 text-white'>
								Главное — качество ремонтных работ
							</h3>
							<p className='text-lg text-white/80 leading-relaxed mb-4'>
								Можно нарисовать самый красивый проект, но если ремонт выполнен
								некачественно — результат будет плачевным.
							</p>
							<p className='text-base text-white/60 leading-relaxed'>
								Большинство проблем возникает именно на этапе ремонта:
								некачественные материалы, непрофессиональные работники,
								отсутствие контроля.
							</p>
						</motion.div>

						{/* Problems Grid */}
						<div className='grid md:grid-cols-2 gap-8 mb-16 md:mb-24'>
							{/* Problem 1 */}
							<motion.div
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.1 }}
								viewport={{ once: true }}
								className='bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 md:p-8'
							>
								<div className='relative h-48 md:h-64 mb-6 rounded-2xl overflow-hidden'>
									<Image
										src='/assets/case7_ph10.webp'
										alt='Дорогие материалы'
										fill
										className='object-cover'
									/>
									<div className='absolute inset-0 bg-black/30' />
									<div className='absolute top-4 left-4 bg-red-500/20 backdrop-blur-xl rounded-full px-4 py-2'>
										<span className='text-red-300 text-sm font-medium'>
											ДОРОГО
										</span>
									</div>
								</div>
								<h4 className='text-xl md:text-2xl font-light mb-4 text-white'>
									Некачественные материалы
								</h4>
								<p className='text-white/70 text-sm leading-relaxed'>
									Строители экономят на материалах: дешевая плитка трескается,
									обои отклеиваются, краска облезает. А переделывать за свой
									счет...
								</p>
							</motion.div>

							{/* Problem 2 */}
							<motion.div
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
								className='bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 md:p-8'
							>
								<div className='relative h-48 md:h-64 mb-6 rounded-2xl overflow-hidden'>
									<Image
										src='/assets/case4_ph12.webp'
										alt='Проблемы со строителями'
										fill
										className='object-cover'
									/>
									<div className='absolute inset-0 bg-black/30' />
									<div className='absolute top-4 left-4 bg-orange-500/20 backdrop-blur-xl rounded-full px-4 py-2'>
										<span className='text-orange-300 text-sm font-medium'>
											ВОПРОСЫ
										</span>
									</div>
								</div>
								<h4 className='text-xl md:text-2xl font-light mb-4 text-white'>
									Нарушение технологий
								</h4>
								<p className='text-white/70 text-sm leading-relaxed'>
									&laquo;Так быстрее&raquo;, &laquo;И так сойдет&raquo;,
									&laquo;Никто не увидит&raquo;... Результат — кривые стены,
									протечки, короткое замыкание
								</p>
							</motion.div>

							{/* Problem 3 */}
							<motion.div
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								viewport={{ once: true }}
								className='bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 md:p-8'
							>
								<div className='relative h-48 md:h-64 mb-6 rounded-2xl overflow-hidden'>
									<Image
										src='/assets/case1_ph8.webp'
										alt='Проблемы с мебелью'
										fill
										className='object-cover'
									/>
									<div className='absolute inset-0 bg-black/30' />
									<div className='absolute top-4 left-4 bg-red-500/20 backdrop-blur-xl rounded-full px-4 py-2'>
										<span className='text-red-300 text-sm font-medium'>
											НЕ ВЛЕЗЕТ
										</span>
									</div>
								</div>
								<h4 className='text-xl md:text-2xl font-light mb-4 text-white'>
									Срыв сроков
								</h4>
								<p className='text-white/70 text-sm leading-relaxed'>
									&laquo;Завтра приедем&raquo;, &laquo;Материал в дороге&raquo;,
									&laquo;Нужно еще денег&raquo;... Ремонт затягивается на
									месяцы, а вы живете в пыли
								</p>
							</motion.div>

							{/* Problem 4 */}
							<motion.div
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								viewport={{ once: true }}
								className='bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 md:p-8'
							>
								<div className='relative h-48 md:h-64 mb-6 rounded-2xl overflow-hidden'>
									<Image
										src='/assets/case12_ph7.webp'
										alt='Переплаты и стресс'
										fill
										className='object-cover'
									/>
									<div className='absolute inset-0 bg-black/30' />
									<div className='absolute top-4 left-4 bg-purple-500/20 backdrop-blur-xl rounded-full px-4 py-2'>
										<span className='text-purple-300 text-sm font-medium'>
											СТРЕСС
										</span>
									</div>
								</div>
								<h4 className='text-xl md:text-2xl font-light mb-4 text-white'>
									Скрытые доплаты
								</h4>
								<p className='text-white/70 text-sm leading-relaxed'>
									&laquo;Это не входит в стоимость&raquo;, &laquo;Так не
									договаривались&raquo;... В итоге ремонт стоит в 2 раза дороже,
									а качество — никакое
								</p>
							</motion.div>
						</div>

						{/* Solution Intro */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							viewport={{ once: true }}
							className='text-center mb-16 md:mb-24'
						>
							<h3 className='text-4xl md:text-5xl font-light mb-8 text-white'>
								А что если сделать ремонт правильно?
							</h3>
							<p className='text-lg text-white/80 leading-relaxed mb-4'>
								Студия REHOME контролирует весь процесс ремонта
							</p>
							<p className='text-base text-white/60 leading-relaxed max-w-2xl mx-auto'>
								Мы не просто рисуем проекты, а воплощаем их в жизнь с гарантией
								качества на каждом этапе
							</p>
						</motion.div>

						{/* Solutions */}
						<div className='space-y-8 mb-16 md:mb-24'>
							{/* Solution 1 */}
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.1 }}
								viewport={{ once: true }}
								className='bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-[2rem] border border-green-500/20 p-8 md:p-12'
							>
								<div className='grid md:grid-cols-2 gap-8 items-center'>
									<div>
										<h4 className='text-2xl md:text-3xl font-light mb-6 text-white'>
											Качественные материалы
										</h4>
										<p className='text-white/80 leading-relaxed mb-4'>
											Работаем только с проверенными поставщиками. Все материалы
											сертифицированы и соответствуют заявленному качеству.
										</p>
										<p className='text-green-300 text-sm font-medium'>
											Гарантия на все материалы от 3 лет
										</p>
									</div>
									<div className='relative h-64 rounded-2xl overflow-hidden'>
										<Image
											src='/assets/case11_ph5.webp'
											alt='Доступные материалы'
											fill
											className='object-cover'
										/>
									</div>
								</div>
							</motion.div>

							{/* Solution 2 */}
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
								className='bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-[2rem] border border-blue-500/20 p-8 md:p-12'
							>
								<div className='grid md:grid-cols-2 gap-8 items-center'>
									<div className='relative h-64 rounded-2xl overflow-hidden'>
										<Image
											src='/assets/case7_ph8.webp'
											alt='Контроль ремонта'
											fill
											className='object-cover'
										/>
									</div>
									<div>
										<h4 className='text-2xl md:text-3xl font-light mb-6 text-white'>
											Профессиональная бригада
										</h4>
										<p className='text-white/80 leading-relaxed mb-4'>
											Наши мастера работают по единым стандартам качества.
											Каждый этап контролируется, технологии соблюдаются
											неукоснительно.
										</p>
										<p className='text-blue-300 text-sm font-medium'>
											Гарантия на все работы — 3 года
										</p>
									</div>
								</div>
							</motion.div>

							{/* Solution 3 */}
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								viewport={{ once: true }}
								className='bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-[2rem] border border-purple-500/20 p-8 md:p-12'
							>
								<div className='grid md:grid-cols-2 gap-8 items-center'>
									<div>
										<h4 className='text-2xl md:text-3xl font-light mb-6 text-white'>
											Соблюдение сроков и бюджета
										</h4>
										<p className='text-white/80 leading-relaxed mb-4'>
											Фиксированная стоимость в договоре, четкий график работ.
											Никаких скрытых доплат и затягивания сроков.
										</p>
										<p className='text-purple-300 text-sm font-medium'>
											Результат: ремонт в срок и в бюджете
										</p>
									</div>
									<div className='relative h-64 rounded-2xl overflow-hidden'>
										<Image
											src='/assets/case8_ph11.webp'
											alt='Точные расчеты'
											fill
											className='object-cover'
										/>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Final CTA */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							viewport={{ once: true }}
							className='text-center'
						>
							<div className='bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 md:p-12'>
								<h3 className='text-3xl md:text-4xl font-light mb-6 text-white'>
									Что вы выбираете?
								</h3>
								<div className='grid md:grid-cols-2 gap-8 text-left mb-8'>
									<div className='space-y-4'>
										<h4 className='text-lg font-medium text-red-300 mb-3'>
											❌ Обычный ремонт:
										</h4>
										<ul className='space-y-2 text-white/70 text-sm'>
											<li>• Некачественные материалы и работы</li>
											<li>• Постоянные доплаты и срывы сроков</li>
											<li>• Нарушение технологий</li>
											<li>• Потрачены деньги и нервы</li>
										</ul>
									</div>
									<div className='space-y-4'>
										<h4 className='text-lg font-medium text-green-300 mb-3'>
											✅ Ремонт REHOME:
										</h4>
										<ul className='space-y-2 text-white/70 text-sm'>
											<li>• Качественные материалы и работы</li>
											<li>• Фиксированная цена и сроки</li>
											<li>• Соблюдение всех технологий</li>
											<li>• Гарантия на весь ремонт</li>
										</ul>
									</div>
								</div>
								<motion.a
									href='#contact'
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className='inline-block bg-white text-black px-12 py-5 rounded-full font-medium text-lg hover:bg-gray-100 transition-all shadow-lg'
								>
									Заказать качественный ремонт
								</motion.a>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Services Section */}
				<section className='py-16 md:py-24 relative'>
					<div className='container mx-auto px-4 md:px-8'>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='text-center mb-16'
						>
							<h2 className='text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white'>
								Услуги ремонта
							</h2>
							<p className='text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-light'>
								Комплексный ремонт под ключ с гарантией качества
							</p>
						</motion.div>

						<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
							{[
								{
									title: 'Ремонт под ключ',
									description:
										'Полный цикл ремонтных работ от демонтажа до финальной отделки. Качественные материалы, профессиональная бригада, соблюдение сроков.',
									image: '/assets/case4_ph8.webp',
								},
								{
									title: 'Контроль качества',
									description:
										'Многоступенчатый контроль на каждом этапе работ. Проверка материалов, соблюдение технологий, авторский надзор.',
									image: '/assets/case7_ph15.webp',
								},
								{
									title: 'Гарантийное обслуживание',
									description:
										'Гарантия на все виды работ 3 года. Бесплатное устранение дефектов, консультации по эксплуатации, техническая поддержка.',
									image: '/assets/case8_ph15.webp',
								},
							].map((service, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									viewport={{ once: true }}
									className='bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 group'
								>
									<div className='relative h-64 overflow-hidden'>
										<Image
											src={service.image}
											alt={service.title}
											fill
											className='object-cover'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
									</div>
									<div className='p-6 md:p-8'>
										<h3 className='text-xl md:text-2xl font-light mb-4 text-white'>
											{service.title}
										</h3>
										<p className='text-white/80 font-light leading-relaxed'>
											{service.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Portfolio Section */}
				<section className='py-16 md:py-24 relative'>
					<div className='container mx-auto px-4 md:px-8'>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='text-center mb-12 md:mb-16'
						>
							<h2 className='text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-8 text-white leading-tight'>
								Портфолио
							</h2>
							<p className='text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-light px-4'>
								Реализованные проекты для клиентов из Казани
							</p>
						</motion.div>

						{/* Featured Project with experience block */}
						<div className='relative mb-12 md:mb-16'>
							<div className='grid md:grid-cols-3 gap-4 md:gap-6 h-[400px] md:h-[600px]'>
								{/* Large image */}
								<div className='md:col-span-1 relative rounded-[2rem] overflow-hidden'>
									<Image
										src='/assets/case1_ph1.webp'
										alt='Современная квартира в Казани'
										fill
										className='object-cover'
									/>
								</div>

								{/* Grid of smaller images */}
								<div className='md:col-span-2 grid grid-cols-2 gap-6'>
									<div className='relative rounded-[2rem] overflow-hidden'>
										<Image
											src='/assets/case1_ph3.webp'
											alt='Дизайн гостиной'
											fill
											className='object-cover'
										/>
									</div>
									<div className='relative rounded-[2rem] overflow-hidden'>
										<Image
											src='/assets/case1_ph7.webp'
											alt='Дизайн кухни'
											fill
											className='object-cover'
										/>
									</div>
									<div className='relative rounded-[2rem] overflow-hidden'>
										<Image
											src='/assets/case1_ph17.webp'
											alt='Дизайн спальни'
											fill
											className='object-cover'
										/>
									</div>
									{/* Experience block */}
									<div className='relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center p-4 md:p-6'>
										<div className='text-center'>
											<h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight'>
												ИМЕЕМ
												<br />
												БОЛЬШОЙ ОПЫТ
											</h3>
											<p className='text-xs md:text-sm text-white/80 mb-3 md:mb-4 font-light leading-relaxed'>
												В ДИЗАЙНЕ ИНТЕРЬЕРОВ
												<br />И РЕМОНТЕ КВАРТИР
											</p>
											<div className='text-xs text-white/60 font-light'>
												REHOME STUDIO
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Portfolio Grid - 4 in a row */}
						<div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-20 lg:mb-40'>
							{[
								{
									id: 2,
									image: '/assets/case2_ph1.webp',
									title: 'Детские комнаты',
								},
								{
									id: 3,
									image: '/assets/case3_ph1.webp',
									title: 'Японский стиль',
								},
								{
									id: 4,
									image: '/assets/case4_ph1.webp',
									title: 'Яркие интерьеры',
								},
								{
									id: 5,
									image: '/assets/case5_ph1.webp',
									title: 'Современная классика',
								},
								{ id: 7, image: '/assets/case7_ph1.webp', title: 'Минимализм' },
								{
									id: 8,
									image: '/assets/case8_ph1.webp',
									title: 'Джапанди стиль',
								},
								{
									id: 9,
									image: '/assets/case9_ph1.webp',
									title: 'Эко-минимализм',
								},
								{
									id: 10,
									image: '/assets/case10_ph1.webp',
									title: 'Природные акценты',
								},
								{
									id: 11,
									image: '/assets/case11_ph1.webp',
									title: 'Лофт стиль',
								},
								{
									id: 12,
									image: '/assets/case12_ph1.webp',
									title: 'Скандинавский минимализм',
								},
								{
									id: 13,
									image: '/assets/case13_ph1.webp',
									title: 'Современная классика',
								},
								{
									id: 14,
									image: '/assets/case14_ph1.webp',
									title: 'Элегантный модерн',
								},
							].map((project, index) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`group cursor-pointer ${
										// На мобильных: первая колонка (четные индексы 0,2,4,6...) смещена вниз
										index % 2 === 0 ? 'translate-y-1/2' : ''
									} ${
										// На десктопе: каждый второй элемент (1,3,5,7...) смещен вниз, отменяем мобильную логику
										(index + 1) % 2 === 0
											? 'lg:translate-y-1/2'
											: 'lg:translate-y-0'
									}`}
								>
									<Link href={`/portfolio/${project.id}`}>
										<div className='relative overflow-hidden rounded-3xl md:rounded-[2rem] aspect-square'>
											<Image
												src={project.image}
												alt={project.title}
												fill
												className='object-cover'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0' />
											<div className='absolute bottom-3 left-3 right-3 opacity-0'>
												<h3 className='text-white font-medium text-sm md:text-base'>
													{project.title}
												</h3>
											</div>
										</div>
									</Link>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='text-center mt-[276px]'
						>
							<motion.a
								href='/portfolio'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='inline-block bg-white/10 backdrop-blur-xl text-white px-12 py-5 rounded-full font-medium border border-white/30 hover:bg-white/20 transition-all'
							>
								Все проекты
							</motion.a>
						</motion.div>
					</div>
				</section>

				{/* Contact Section */}
				<section id='contact' className='py-16 md:py-24 relative'>
					<div className='container mx-auto px-4 md:px-8'>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='text-center mb-16'
						>
							<h2 className='text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white'>
								Обсудим ваш проект
							</h2>
							<p className='text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-light'>
								Оставьте заявку и мы свяжемся с вами в течение часа
							</p>
						</motion.div>

						<div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
							{/* Contact Phone */}
							<motion.div
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className='bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/20 p-8 md:p-12 shadow-[0_8px_32px_rgba(255,255,255,0.1)] text-center'
							>
								<div className='w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg'>
									<span className='text-3xl font-light text-white'>
										📞
									</span>
								</div>

								<h3 className='text-2xl md:text-3xl font-light mb-6 text-white'>
									Звоните прямо сейчас
								</h3>
								
								<div className='mb-8'>
									<motion.a
										href='tel:+79053104508'
										whileHover={{ scale: 1.02, y: -2 }}
										whileTap={{ scale: 0.98 }}
										className='text-3xl md:text-4xl font-light text-white hover:text-green-300 transition-colors block mb-4'
									>
										+7 905 310 45 08
									</motion.a>
									<p className='text-white/70'>
										Консультация и расчет стоимости бесплатно
									</p>
								</div>

								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
									<motion.a
										href='https://t.me/alakhmetov5'
										target='_blank'
										rel='noopener noreferrer'
										whileHover={{ scale: 1.02, y: -2 }}
										whileTap={{ scale: 0.98 }}
										className='bg-blue-500/20 backdrop-blur-xl text-white px-6 py-4 rounded-2xl font-medium hover:bg-blue-500/30 transition-all border border-blue-500/30'
									>
										Написать в Telegram
									</motion.a>
									<motion.a
										href='https://wa.me/79053104508'
										target='_blank'
										rel='noopener noreferrer'
										whileHover={{ scale: 1.02, y: -2 }}
										whileTap={{ scale: 0.98 }}
										className='bg-green-500/20 backdrop-blur-xl text-white px-6 py-4 rounded-2xl font-medium hover:bg-green-500/30 transition-all border border-green-500/30'
									>
										WhatsApp
									</motion.a>
								</div>
							</motion.div>

							{/* Contact Info & Map */}
							<motion.div
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
								className='space-y-8'
							>
								{/* Social Links */}
								<div className='flex space-x-6 text-white/60'>
									<a
										href='https://t.me/alakhmetov5'
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-white transition-colors'
									>
										TELEGRAM
									</a>
									<a
										href='https://wa.me/79053104508'
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-white transition-colors'
									>
										WHATSAPP
									</a>
									<a
										href='tel:+79053104508'
										className='hover:text-white transition-colors'
									>
										ЗВОНОК
									</a>
								</div>

								{/* Contact Info */}
								<div>
									<h3 className='text-2xl font-light text-white mb-4'>
										КОНТАКТЫ
									</h3>
									<a
										href='tel:+79053104508'
										className='text-2xl md:text-3xl font-light text-white hover:text-white/80 transition-colors'
									>
										+7 905 310 45 08
									</a>
								</div>

								{/* Documents Link */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									viewport={{ once: true }}
								>
									<a
										href='/assets/rehome_договор.docx'
										download
										className='inline-flex items-center text-white/80 hover:text-white transition-colors group'
									>
										<svg
											className='w-5 h-5 mr-2 group-hover:scale-110 transition-transform'
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path
												fillRule='evenodd'
												d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
												clipRule='evenodd'
											/>
										</svg>
										Скачать договор
									</a>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<Footer />
			</div>

			{/* Fixed Chat Widget - Outside main container */}
			<div
				className='fixed bottom-6 right-6'
				style={{
					position: 'fixed',
					bottom: '24px',
					right: '24px',
					zIndex: 2147483647,
					pointerEvents: 'auto',
					isolation: 'isolate',
				}}
			>
				<div
					className='relative'
					style={{
						zIndex: 1000,
						pointerEvents: 'auto',
					}}
				>
					{isChatOpen && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.8, y: 20 }}
							className='absolute bottom-16 right-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-4 space-y-3 min-w-[220px]'
							style={{
								zIndex: 1001,
								pointerEvents: 'auto',
							}}
						>
							<motion.a
								href='tel:+79053104508'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='flex items-center space-x-3 bg-white/10 rounded-xl p-3 hover:bg-white/15 transition-all'
							>
								<div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
									<svg
										className='w-4 h-4 text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
									</svg>
								</div>
								<span className='text-white text-sm font-light'>Позвонить</span>
							</motion.a>

							<motion.a
								href='https://t.me/alakhmetov5'
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='flex items-center space-x-3 bg-white/10 rounded-xl p-3 hover:bg-white/15 transition-all'
							>
								<div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
									<svg
										className='w-4 h-4 text-white'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.56c-.12.56-.44.7-.9.44l-2.52-1.86-1.21 1.17c-.14.14-.25.25-.5.25l.18-2.51 4.56-4.12c.2-.18-.04-.28-.3-.1L9.39 13.17l-2.42-.76c-.52-.16-.53-.52.12-.78l9.46-3.64c.43-.16.8.1.66.61z' />
									</svg>
								</div>
								<span className='text-white text-sm font-light'>Telegram</span>
							</motion.a>

							<motion.a
								href='https://wa.me/79053104508'
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='flex items-center space-x-3 bg-white/10 rounded-xl p-3 hover:bg-white/15 transition-all'
							>
								<div className='w-8 h-8 bg-green-600 rounded-full flex items-center justify-center'>
									<svg
										className='w-4 h-4 text-white'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106' />
									</svg>
								</div>
								<span className='text-white text-sm font-light'>WhatsApp</span>
							</motion.a>


						</motion.div>
					)}

					{/* Main Chat Button */}
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						animate={{ rotate: isChatOpen ? 180 : 0 }}
						transition={{ duration: 0.3 }}
						onClick={() => setIsChatOpen(!isChatOpen)}
						className='w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center hover:bg-white/15 hover:border-white/30 transition-all shadow-lg'
						style={{
							position: 'relative',
							zIndex: 1000,
							pointerEvents: 'auto',
						}}
					>
						{isChatOpen ? (
							<svg
								className='w-6 h-6 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								className='w-6 h-6 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
								/>
							</svg>
						)}
					</motion.button>
				</div>
			</div>
		</>
	)
}
