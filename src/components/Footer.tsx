'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface FooterProps {
	theme?: 'dark' | 'light' | 'beige'
}

export default function Footer({ theme = 'dark' }: FooterProps) {
	const getThemeClasses = () => {
		switch (theme) {
			case 'light':
				return {
					bg: 'bg-gray-100/80 backdrop-blur-xl border-gray-300/50',
					text: 'text-gray-900',
					textSecondary: 'text-gray-600',
					logo: 'bg-gray-200/60 border-gray-300/50 text-gray-900',
					link: 'text-gray-600 hover:text-gray-900',
					icon: 'bg-gray-200/60 border-gray-300/50 text-gray-700 hover:bg-gray-300/60',
				}
			case 'beige':
				return {
					bg: 'bg-white/30 backdrop-blur-xl border-amber-200/50',
					text: 'text-amber-900',
					textSecondary: 'text-amber-800/70',
					logo: 'bg-amber-200/60 border-amber-300/50 text-amber-900',
					link: 'text-amber-700 hover:text-amber-900',
					icon: 'bg-amber-100/60 border-amber-200/50 text-amber-700 hover:bg-amber-200/60',
				}
			default: // dark
				return {
					bg: 'bg-white/5 backdrop-blur-xl border-white/10',
					text: 'text-white',
					textSecondary: 'text-white/70',
					logo: 'bg-white/20 border-white/30 text-white',
					link: 'text-white/70 hover:text-white',
					icon: 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20',
				}
		}
	}

	const classes = getThemeClasses()

	return (
		<footer className={`py-8 md:py-12 border-t ${classes.bg}`}>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8'>
					{/* Logo and Brand */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='space-y-4'
					>
						<div className='flex items-center space-x-4'>
							<div
								className={`w-10 h-10 ${classes.logo} backdrop-blur-xl rounded-xl flex items-center justify-center border`}
							>
								<span className='font-light text-lg'>П</span>
							</div>
							<span className={`text-2xl font-extralight ${classes.text}`}>
								ПЛАТФОРМА
							</span>
						</div>
						<p
							className={`text-sm ${classes.textSecondary} leading-relaxed max-w-xs`}
						>
							Качественный ремонт квартир в Казани. Создаем пространства, в
							которых хочется жить.
						</p>
					</motion.div>

					{/* Contacts */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className='space-y-4'
					>
						<h3 className={`text-lg font-light ${classes.text} mb-4`}>
							Контакты
						</h3>
						<div className='space-y-3'>
							<a
								href='tel:+79053104508'
								className={`flex items-center space-x-3 ${classes.link} transition-colors group`}
							>
								<div
									className={`w-8 h-8 ${classes.icon} rounded-lg flex items-center justify-center border transition-all`}
								>
									<span className='text-sm'>📞</span>
								</div>
								<span className='text-sm'>+7 (905) 310-45-08</span>
							</a>
							<a
								href='https://t.me/alakhmetov5'
								target='_blank'
								rel='noopener noreferrer'
								className={`flex items-center space-x-3 ${classes.link} transition-colors group`}
							>
								<div
									className={`w-8 h-8 ${classes.icon} rounded-lg flex items-center justify-center border transition-all`}
								>
									<span className='text-sm'>✈️</span>
								</div>
								<span className='text-sm'>@alakhmetov5</span>
							</a>
							<a
								href='https://wa.me/79053104508'
								target='_blank'
								rel='noopener noreferrer'
								className={`flex items-center space-x-3 ${classes.link} transition-colors group`}
							>
								<div
									className={`w-8 h-8 ${classes.icon} rounded-lg flex items-center justify-center border transition-all`}
								>
									<span className='text-sm'>💬</span>
								</div>
								<span className='text-sm'>WhatsApp</span>
							</a>
							<a
								href='mailto:Platforma.construction.company@gmail.com'
								className={`flex items-center space-x-3 ${classes.link} transition-colors group`}
							>
								<div
									className={`w-8 h-8 ${classes.icon} rounded-lg flex items-center justify-center border transition-all`}
								>
									<span className='text-sm'>📧</span>
								</div>
								<span className='text-sm'>Email</span>
							</a>
						</div>
					</motion.div>
				</div>

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className={`pt-6 border-t ${
						theme === 'dark'
							? 'border-white/10'
							: theme === 'beige'
							? 'border-amber-200/50'
							: 'border-gray-300/50'
					} flex flex-col md:flex-row justify-between items-center gap-4`}
				>
					<p
						className={`text-sm ${classes.textSecondary} text-center md:text-left`}
					>
						© 2025 ООО «ПЛАТФОРМА». Все права защищены.
					</p>
					<div className='flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6'>
						<Link
							href='/portfolio'
							className={`text-sm ${classes.link} transition-colors`}
						>
							Портфолио
						</Link>
						<Link
							href='/services'
							className={`text-sm ${classes.link} transition-colors`}
						>
							Услуги
						</Link>

						<Link
							href='/contact'
							className={`text-sm ${classes.link} transition-colors`}
						>
							Контакты
						</Link>
						<Link
							href='/privacy'
							className={`text-sm ${classes.link} transition-colors text-center`}
						>
							Политика конфиденциальности
						</Link>
					</div>
				</motion.div>
			</div>
		</footer>
	)
}
