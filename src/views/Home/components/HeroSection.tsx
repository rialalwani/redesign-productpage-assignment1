import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import "../../../assets/styles/components/_herosection.css"


interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {

    
    return (
        <div className="! herosection w-full relative flex flex-col py-2 md:py-5 overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className='min-h-[90vh] flex items-center'>
                {/* Background video for larger screens */}
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block absolute top-0 left-0 min-w-full min-h-full object-cover z-[-10]"
                >
                    <source src={bgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

                {/* Background image for mobile */}
                <img
                    src={smallBG}
                    alt="background_image"
                    className="md:hidden h-full w-full object-cover absolute top-0 left-0 z-[-10]"
                />

                {/* Overlay to ensure text readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]"></div>

                <div className="relative z-10 text-white w-full flex flex-col lg:flex-row md:mt-6 lg:mt-0 lg:items-center lg: px-4 max-w-[1538px] mx-auto">
                    {/* Video Section */}
                    {/*<div className="lg:w-5/12 mt-8 lg:mt-0 lg:mb-0 mb-6">
                        <div className="relative overflow-hidden pt-[56.25%] rounded-lg shadow-lg">
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
                    </div>*/}

                    {/* Content Section */}
                    <div className="lg:w-full lg:pr-8">
                        <h1 className='text-white text-center text-primary mt-5'>Revolutionizing Medical Tourism with AI-Powered Solutions</h1>
                        <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize text-white text-center mt-5">
                            <span className="text-primary">AI front office </span> <br />
                            for healthcare agents
                        </h1>
                        <p style={{ lineHeight: '0.7' }} className="text-lg my-8 font-light text-center">
                            Create <span className="text-primary font-bold">AI Store</span>  in 2 min <br />
                            <br />
                            Scale with{' '}
                            <span className="font-bold text-primary">
                                Digital Marketing
                            </span>{' '}
                        </p>
                        <p className='text-center font-light'>Empower your healthcare facilitation with intelligent agents, seamless patient coordination, and personalized care — all at your fingertips.</p>
                        <div className='flex flex-wrap justify-around mt-5'>
                        <div className='mt-5 pt-5 ml-5 pl-5'>
                            <HcfSignupPopup popupButtonStatus buttonChildren={<Button block variant='solid' className='rounded-[5px]  max-w-[250px]'>Get Started</Button>} />
                        </div>
                        <div className="text-white flex gap-12 mt-8 flex-wrap">
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    2100<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">qualified doctors</p>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    1000<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">hospitals</p>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    800<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">Treatment Plans</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;