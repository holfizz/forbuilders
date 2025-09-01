'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.8, ease: 'easeOut' },
}

const scaleIn = {
	initial: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1 },
	transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Contact() {
	return (
		<div
			className='min-h-screen bg-black text-white overflow-x-hidden'
			style={{
				WebkitOverflowScrolling: 'touch',
				overflowY: 'auto',
			}}
		>
			<Header />

			{/* Hero Section */}
			<section className='relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden'>
				<div className='absolute inset-0'>
					<Image
						src='/assets/case1_ph2.webp'
						alt='Contact background'
						fill
						className='object-cover opacity-20'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80' />
				</div>

				<div className='relative z-10 container mx-auto px-4 md:px-6 text-center max-w-4xl'>
					<motion.h1
						variants={fadeInUp}
						initial='initial'
						animate='animate'
						className='text-4xl md:text-6xl lg:text-7xl font-thin mb-6 md:mb-8 text-white tracking-[-0.02em]'
					>
						Свяжитесь с нами
					</motion.h1>
					<motion.p
						variants={fadeInUp}
						initial='initial'
						animate='animate'
						className='text-lg md:text-xl text-white/80 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed font-light'
					>
						Готовы начать ремонт? Свяжитесь с нами удобным способом
					</motion.p>
					<motion.h2
						variants={fadeInUp}
						initial='initial'
						animate='animate'
						transition={{ delay: 0.4 }}
						className='text-base md:text-lg text-white/90 max-w-3xl mx-auto font-light'
					>
						Консультация и выезд на замер — бесплатно
					</motion.h2>
				</div>
			</section>

			{/* Contact Methods Section */}
			<section className='py-16 md:py-24 relative'>
				<div className='container mx-auto px-4 md:px-6 max-w-4xl'>
					<motion.div
						variants={scaleIn}
						initial='initial'
						animate='animate'
						className='text-center mb-12'
					>
						<h3 className='text-3xl md:text-4xl font-light mb-6 text-white'>
							Напишите нам
						</h3>
						<p className='text-lg text-white/80 max-w-2xl mx-auto'>
							Выберите удобный способ связи - ответим быстро
						</p>
					</motion.div>

					<div className='grid md:grid-cols-3 gap-6 md:gap-8'>
						{/* Phone */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 p-8 text-center hover:border-white/30 transition-all'
						>
							<div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto'>
								<span className='text-2xl text-white'>📞</span>
							</div>
							<h4 className='text-xl font-light mb-4 text-white'>Позвонить</h4>
							<motion.a
								href='tel:+79053104508'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='text-2xl font-light text-white hover:text-green-300 transition-colors block mb-4'
							>
								+7 905 310 45 08
							</motion.a>
							<p className='text-white/70 text-sm'>Звоните в любое время</p>
						</motion.div>

						{/* WhatsApp */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 p-8 text-center hover:border-white/30 transition-all'
						>
							<div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto'>
								<span className='text-2xl text-white'>💬</span>
							</div>
							<h4 className='text-xl font-light mb-4 text-white'>WhatsApp</h4>
							<motion.a
								href='https://wa.me/79053104508'
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.02, y: -2 }}
								whileTap={{ scale: 0.98 }}
								className='bg-green-500/20 backdrop-blur-xl text-white px-6 py-3 rounded-xl font-medium hover:bg-green-500/30 transition-all border border-green-500/30 block mb-4'
							>
								Написать в WhatsApp
							</motion.a>
							<p className='text-white/70 text-sm'>
								Быстрая связь и фото проектов
							</p>
						</motion.div>

						{/* Telegram */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className='bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 p-8 text-center hover:border-white/30 transition-all'
						>
							<div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto'>
								<span className='text-2xl text-white'>✈️</span>
							</div>
							<h4 className='text-xl font-light mb-4 text-white'>Telegram</h4>
							<motion.a
								href='https://t.me/alakhmetov5'
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.02, y: -2 }}
								whileTap={{ scale: 0.98 }}
								className='bg-blue-500/20 backdrop-blur-xl text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-500/30 transition-all border border-blue-500/30 block mb-4'
							>
								Написать в Telegram
							</motion.a>
							<p className='text-white/70 text-sm'>@alakhmetov5</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Additional Contact Info */}
			<section className='py-16 md:py-24 relative'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto'>
						{[
							{
								icon: '📍',
								title: 'География работ',
								content: 'Казань и область',
								description: 'Выезжаем по всему городу',
							},
							{
								icon: '⏰',
								title: 'Время работы',
								content: 'Пн-Пт: 9:00-20:00',
								description: 'Сб-Вс: по договоренности',
							},
							{
								icon: '💬',
								title: 'Консультация',
								content: 'Бесплатно',
								description: 'Выезд и расчет стоимости',
							},
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 text-center hover:border-white/20 transition-all'
							>
								<div className='text-3xl md:text-4xl mb-4'>{item.icon}</div>
								<h3 className='text-lg md:text-xl font-light mb-2 text-white'>
									{item.title}
								</h3>
								<p className='text-white/90 mb-2 text-sm md:text-base font-medium'>
									{item.content}
								</p>
								<p className='text-xs md:text-sm text-white/60'>
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	)
}
