'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	const isActive = (path: string) => pathname === path

	return (
		<>
			{/* Main Header */}
			<motion.header
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
				className='fixed top-4 left-4 right-4 z-40 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[2rem] shadow-[0_8px_32px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:rounded-[2rem] before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-white/10 before:opacity-50'
			>
				<div className='flex items-center justify-between px-6 md:px-12 py-4 md:py-5 relative z-10'>
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ type: 'spring', stiffness: 400, damping: 25 }}
						className='flex items-center space-x-4'
					>
						<Link href='/' className='flex items-center space-x-4'>
							<div className='w-10 h-10 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]'>
								<span className='text-white font-light text-lg'>R</span>
							</div>
							<span className='text-2xl md:text-3xl font-extralight tracking-[0.02em] text-white/95'>
								REHOME
							</span>
						</Link>
					</motion.div>

					{/* Navigation */}
					<nav className='hidden md:flex items-center space-x-8 lg:space-x-12'>
						<Link
							href='/'
							className='text-white/90 hover:text-white text-sm font-light transition-colors'
						>
							Главная
						</Link>
						<Link
							href='/portfolio'
							className='text-white/90 hover:text-white text-sm font-light transition-colors'
						>
							Портфолио
						</Link>
						<Link
							href='/services'
							className='text-white/90 hover:text-white text-sm font-light transition-colors'
						>
							Услуги
						</Link>

						<Link
							href='/reviews'
							className='text-white/90 hover:text-white text-sm font-light transition-colors'
						>
							Отзывы
						</Link>
						<Link
							href='/contact'
							className='text-white/90 hover:text-white text-sm font-light transition-colors'
						>
							Контакты
						</Link>
					</nav>

					<div className='flex items-center space-x-4'>
						<motion.a
							href='/contact'
							whileHover={{ scale: 1.02, y: -1 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 400, damping: 25 }}
							className='hidden md:block bg-white/15 backdrop-blur-xl text-white px-6 py-2.5 rounded-full text-sm font-light border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]'
						>
							Обсудить
						</motion.a>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className='md:hidden p-3 relative z-50'
							aria-label='Toggle menu'
						>
							<div className='w-7 h-7 flex flex-col justify-between'>
								<span
									className={`w-full h-0.5 bg-white transition-all duration-300 ${
										isMobileMenuOpen ? 'rotate-45 translate-y-3' : ''
									}`}
								></span>
								<span
									className={`w-full h-0.5 bg-white transition-all duration-300 ${
										isMobileMenuOpen ? 'opacity-0' : ''
									}`}
								></span>
								<span
									className={`w-full h-0.5 bg-white transition-all duration-300 ${
										isMobileMenuOpen ? '-rotate-45 -translate-y-3' : ''
									}`}
								></span>
							</div>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className='md:hidden border-t border-white/20 bg-black/30 backdrop-blur-xl rounded-b-[2rem] overflow-hidden'
						>
							<div className='px-6 py-6'>
								<div className='flex flex-col space-y-6'>
									<Link
										href='/'
										onClick={() => setIsMobileMenuOpen(false)}
										className={`text-lg transition-colors ${
											isActive('/')
												? 'text-white font-medium'
												: 'text-white/80 hover:text-white'
										}`}
									>
										Главная
									</Link>
									<Link
										href='/portfolio'
										onClick={() => setIsMobileMenuOpen(false)}
										className={`text-lg transition-colors ${
											isActive('/portfolio')
												? 'text-white font-medium'
												: 'text-white/80 hover:text-white'
										}`}
									>
										Портфолио
									</Link>
									<Link
										href='/services'
										onClick={() => setIsMobileMenuOpen(false)}
										className={`text-lg transition-colors ${
											isActive('/services')
												? 'text-white font-medium'
												: 'text-white/80 hover:text-white'
										}`}
									>
										Услуги
									</Link>

									<Link
										href='/reviews'
										onClick={() => setIsMobileMenuOpen(false)}
										className='text-lg transition-colors text-white/80 hover:text-white'
									>
										Отзывы
									</Link>
									<Link
										href='/contact'
										onClick={() => setIsMobileMenuOpen(false)}
										className={`text-lg transition-colors ${
											isActive('/contact')
												? 'text-white font-medium'
												: 'text-white/80 hover:text-white'
										}`}
									>
										Контакты
									</Link>
									<Link
										href='/contact'
										onClick={() => setIsMobileMenuOpen(false)}
										className='bg-white/20 backdrop-blur-xl text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-white/30 transition-all text-left border border-white/20'
									>
										Обсудить
									</Link>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.header>
		</>
	)
}
