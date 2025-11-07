'use client';

import { motion, easeOut } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
	{
		id: 1,
		title: 'E-commerce Platform for Fashion Brand',
		description:
			'Developed a scalable e-commerce solution with custom product configurators and seamless payment integration.',
		image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=Fashion+E-commerce',
		link: '/case-studies/fashion-ecommerce',
	},
	{
		id: 2,
		title: 'AI-Powered Chatbot for Customer Support',
		description:
			'Implemented an intelligent chatbot using natural language processing to automate customer inquiries and improve response times.',
		image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=AI+Chatbot',
		link: '/case-studies/ai-chatbot',
	},
	{
		id: 3,
		title: 'Mobile Banking App with Biometric Authentication',
		description:
			'Designed and built a secure and user-friendly mobile banking application for iOS and Android, featuring biometric login.',
		image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=Mobile+Banking',
		link: '/case-studies/mobile-banking',
	},
	{
		id: 4,
		title: 'Data Analytics Dashboard for Logistics',
		description:
			'Created a real-time data visualization dashboard to track shipments, optimize routes, and reduce operational costs.',
		image: 'https://via.placeholder.com/600x400/000000/FFFFFF?text=Analytics+Dashboard',
		link: '/case-studies/analytics-dashboard',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: easeOut },
	},
};

export function CaseStudies() {
	return (
		<section className="py-16 md:py-24 bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial="hidden"
					animate="visible"
					variants={containerVariants}
				>
					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-5xl font-bold text-white mb-4"
					>
						Our Work & Case Studies
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-xl text-gray-300 max-w-3xl mx-auto"
					>
						Explore some of our recent projects and see how we've helped
						businesses succeed.
					</motion.p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					initial="hidden"
					animate="visible"
					variants={containerVariants}
				>
					{caseStudies.map((study) => (
						<motion.div
							key={study.id}
							variants={itemVariants}
							className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
							whileHover={{
								y: -5,
								boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
							}}
						>
							<img
								src={study.image}
								alt={study.title}
								className="w-full h-56 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-2xl font-semibold text-white mb-2">
									{study.title}
								</h3>
								<p className="text-gray-400 mb-4">
									{study.description}
								</p>
								<Button
									asChild
									variant="ghost"
									className="text-electric-blue hover:text-electric-blue/80 group-hover:translate-x-1 transition-transform"
								>
									<Link href={study.link}>
										View Project{' '}
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="text-center mt-16"
				>
					<Button
						asChild
						size="lg"
						className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-4 text-lg font-medium"
					>
						<Link href="/case-studies">
							View All Case Studies{' '}
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
