import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import { IoVolumeMuteOutline, IoVolumeHighOutline } from 'react-icons/io5';
import { useState } from 'react';
import { Button } from "@/components/ui"

const Home: React.FC = () => {
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const FqRef = useRef(null);
	const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const [isMuted, setIsMuted] = useState(true);

	const toggleMute = () => {
		if (isMuted)
			setIsMuted(false)
		else
			setIsMuted(true)
	}

	useEffect(() => {
		let lastScrollTop = 0; // Initialize lastScrollTop variable

		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollTop > lastScrollTop) {
				if (hcf) {
					hcf.classList.add("hcf-profile-fixed");
				}
			} else if (scrollTop < lastScrollTop) {
				if (hcf) {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}

			lastScrollTop = scrollTop;
		};


		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<div className='bg-[#ffffff]'>
				<div className="">
					<HeroSection
						scrollToSection={scrollToSection}
						featuresRef={FqRef}
						contactRef={contactRef}
						aboutRef={aboutRef}
					/>
					{/* <div className='bg-white'>
						<ClaimLandingSection />
					</div> */}
					<div className='flex flex-wrap justify-evenly mt-5 flex-row-reverse '>
						<div className='mt-10 pt-7'>
							<h1 style={{ textAlign: "left" }}>What is GoGetWell.ai?</h1>
							<p className='mt-5' style={{ textAlign: "left", lineHeight: "23px" }}>GoGetWell.ai is an AI-powered platform designed to transform<br></br> the medical tourism industry by addressing challenges such<br /> as disorganization and inefficiency.<br></br> <br />The company offers innovative solutions that enable<br></br> healthcare facilitators to modernize operations,<br></br> attract more patients, and deliver seamless,<br></br> personalized care.</p>
							{/*<Button className='rounded-[55px] bg-primary mt-3'>Get a Demo</Button>*/}
						</div>
						<div className="lg:w-5/12 mt-8 lg:mt-0 lg:mb-0 mb-6 pt-5">
							<div className="relative overflow-hidden pt-[56.25%] mt-5 rounded-lg shadow-lg">
								<iframe
									src={`https://www.youtube.com/embed/xQl8i2sO_Ls?autoplay=1&mute=${isMuted ? 1 : 0
										}&loop=1&playlist=xQl8i2sO_Ls&controls=0&showinfo=0&rel=0`}
									title="Product Demo Video"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="absolute top-0 left-0 w-full h-full"
								></iframe>
								<button
									onClick={toggleMute}
									className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
								>
									{isMuted ? (
										<IoVolumeMuteOutline size={24} />
									) : (
										<IoVolumeHighOutline size={24} />
									)}
								</button>
							</div>
						</div>
					</div>
					<div className='!bg-[#eff6ff] relative'>
						<FeaturesGrid />
					</div>
					<div className='!bg-white relative' ref={aboutRef}>
						<InfoSection />
					</div>
					<div className='bg-gradient-to-br from-indigo-50 to-purple-50'>
						<div className='relative' ref={FqRef}>
							<HomeFAQs />
						</div>
						<div className='relative' ref={contactRef}>
							<ContactForm />
						</div>
					</div>
					{/*<div className='bg-white'>
						<MainFooter />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Home;