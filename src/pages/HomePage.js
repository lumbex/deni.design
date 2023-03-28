
import { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as ReactLogo } from "./../assets/deni.design-logo.svg";



function HomePage() {

    const aboutRef = useRef(null)
    const caseStudiesRef = useRef(null)
    const[activeSection, setActiveSection] = useState("about")

    // const activeSection = "case-study"
    const scrollToAbout = () => {
        setActiveSection("about");
        aboutRef.current?.scrollIntoView({behavior: "smooth"})
    }
    const scrollToCaseStudies = () => {
        setActiveSection("case-study");
        caseStudiesRef.current?.scrollIntoView({behavior: "smooth"})
    }

    const[sticky, setSticky] = useState(false)


   
    // const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 400)
            window.scrollY > 1000 ? setActiveSection("case-study"): setActiveSection("about")
        };
        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    });

  return (
    <div className="home-page">
        <header className="app-header">
            <nav className={`${sticky ? "fixed w-full z-40 top-0 left-0 shadow": "" } bg-white border-gray-200 px-8 py-2.5`}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                        <ReactLogo className="fill-white"/>
                    </Link>

                    {/* Current path: {location} */}
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-xs text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="app-nav-ul flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-medium md:border-0 md:bg-white ">
                        {/* <li>activeSection: {activeSection}</li> */}
                        <li onClick={scrollToAbout}>
                            <Link to="#" className={` ${activeSection === "about"? "text-blue-700": "text-gray-700" } block py-2 pl-3 pr-4 hover:text-blue-700 rounded md:bg-transparent md:p-0 `} aria-current="page">About</Link>
                            
                        </li>
                        <li onClick={scrollToCaseStudies}>
                            <Link to="#" className={` ${activeSection === "case-study"? "text-blue-700": "text-gray-700" }  block py-2 pl-3 pr-4 hover:text-blue-700 rounded md:bg-transparent md:p-0 `} aria-current="page">Case Studies</Link>
                        </li>
                        <li>
                            <NavLink to="/speaking" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Speaking</NavLink>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1H0dRUAl8I9z9BMskwrg9TzjC3H1_UsZI/view?usp=sharing" target="_blank" rel="noreferrer" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        <section className="landing-section bg-gray text-center pt-[30vh] h-[90vh]">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-deniblack md:text-5xl lg:text-6xl">Deni Afonja </h1>
            <p className="mb-6 text-lg font-normal text-deniblack lg:text-xl sm:px-16 xl:px-48 ">Product Designer</p>
            <button onClick={ scrollToAbout } href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center focus:ring-4">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0999 2.87495L10.6999 11.3C10.5999 11.4 10.4916 11.4706 10.3749 11.512C10.2582 11.554 10.1332 11.575 9.9999 11.575C9.86657 11.575 9.74157 11.554 9.6249 11.512C9.50824 11.4706 9.3999 11.4 9.2999 11.3L0.874902 2.87495C0.641569 2.64162 0.524902 2.34995 0.524902 1.99995C0.524902 1.64995 0.649902 1.34995 0.899902 1.09995C1.1499 0.849952 1.44157 0.724952 1.7749 0.724952C2.10824 0.724952 2.3999 0.849952 2.6499 1.09995L9.9999 8.44995L17.3499 1.09995C17.5832 0.866618 17.8706 0.749952 18.2119 0.749952C18.5539 0.749952 18.8499 0.874952 19.0999 1.12495C19.3499 1.37495 19.4749 1.66662 19.4749 1.99995C19.4749 2.33328 19.3499 2.62495 19.0999 2.87495Z" fill="#2F3135"/>
                </svg>
            </button>

        </section>

        <section ref={aboutRef} class="about-section bg-white">
            <div class="grid max-w-screen-xl px-8 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-40 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <p class="max-w-2xl mb-4 font-light text-deniblack lg:mb-8 md:text-lg lg:text-xl text-base">Hello, I’m Deni</p>
                    <p class="max-w-2xl mb-4 font-bold text-deniblack lg:mb-8 md:text-xl lg:text-xl text-lg">A product designer creating meaningful experiences for end-users </p>
                    <p class="max-w-2xl mb-4 text-deniblack lg:mb-8 lg:text-xl text-base">I am user-obsessed and aim to drive impacts through the products I ship by making data-driven design decisions.</p>
                    <p class="max-w-2xl mb-4 text-deniblack lg:mb-8 lg:text-xl text-base">Over the last two years, I have worked in the Fintech space solving challenges for businesses and users to enable borderless payment, personalized banking experiences and access to insights on margins of FX trades.</p>
                    <p class="max-w-2xl mb-4 text-deniblack lg:mb-8 lg:text-xl text-base">Occasionally, you can find me exploring the next country on my bucket list, reading the next fiction movie or creating lifestyle content on Youtube.</p> 
                </div>
                <div class="mt-6 lg:mt-0 lg:col-span-5 flex">
                    <img className="w-full h-auto" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1680008898/deni.design/deni-port_wvannw.png" alt="Deni Afonja's Profile" />
                </div>                
            </div>
        </section>

        <section ref={caseStudiesRef} id="portfolioPreview" className="portfolio-preview bg-[#0C0D10] px-8 md:px-[8%] lg:px-[12%] py-16 md:py-32">
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12">
                <Link to="/projects/lugah" className="flex flex-col px-8 pt-8 pb-0 rounded relative w-full bg-[#FAFAFA] text-deniblack justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Conversational AI</h4>
                        <p className="text-base mb-4">Re-imagining the banking landscape through AI-powered conversational chatbot solution for personalized banking experience and process automation</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Shipped</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <img className="" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675551086/deni.design/my-health/conversational-banking-mockup_kkmidj.svg" alt="conversational banking app" />
                    </div>
                </Link>

                <Link to="/projects/xcel" className="flex flex-col px-8 pt-8 pb-0 rounded relative w-full bg-[#212324] text-white justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Borderless Payment Solution - Redesign</h4>
                        <p className="text-base mb-4">Redesign of a fintech payment application for funds transfer; locally and internationally , mobile top-up and loans</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Shipped</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <img className="" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675439440/deni.design/my-health/borderless-payment-mockup_jdiv2q.svg" alt="xcel mockup preview" />
                    </div>
                </Link>

                <Link to="/projects/grocerist" className="flex flex-col px-8 pt-8 pb-0 rounded-sm relative w-full bg-[#212324] text-white justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Grocerist</h4>
                        <p className="text-base mb-4">Grocery list management application for easy planning and budgeting of grocery shopping.</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Personal</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <img  className="" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675154607/deni.design/grocerist-mockup_q7shuw.svg" alt="Grocerist app" />
                    </div>
                </Link>

                <Link to="/projects/r-planner" className="flex flex-col px-8 pt-8 pb-0 rounded relative w-full bg-[#FAFAFA] text-deniblack justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Retirement Planner</h4>
                        <p className="text-base mb-4">Re-imagine a professional adult’s transition into retirement - helping adults prepare for transition into retirement</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Design Thinking Project</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <img src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675720076/deni.design/retirement-planner-mockup_a99fpv.svg" alt="R planner app" className="" />
                    </div>
                </Link>
            </div>
            <Link to="/projects/my-health" className="flex flex-col px-8 pt-8 md:pb-0 rounded justify-between w-full bg-[#FAFAFA] text-deniblack mt-6 md:mt-12">
                <div>
                    <h4 className="text-2xl font-bold mb-6">My Health</h4>
                        <p className="text-base mb-4">A patient-centered approach in making Canadian patients experts in their own health through provision of health tools linked across their entire care team and healthcare providers</p>
                    <div className="project-state flex flex-row items-center">
                        <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span class="text-xs">Design Thinking Project</span>
                    </div>
                </div>

                <div className="flex flex-row-reverse">
                    <img src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675439440/deni.design/my-health/my-health-mockup_lwjn9o.svg" alt="my health app" />
                </div>
            </Link>
        </section>
    </div>
  );
}

export default HomePage;
