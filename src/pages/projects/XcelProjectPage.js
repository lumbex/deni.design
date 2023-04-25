import { useRef, useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

import { ReactComponent as ReactLogo } from "./../../assets/deni.design-logo.svg";



function RPlannerProjectPage() {
    const bgRef = useRef(null), problemRef = useRef(null), mySoluRef = useRef(null), dStatementRef = useRef(null), dProcessRef = useRef(null), 
     uInterviewRef = useRef(null),  eMapsRef = useRef(null), hEvaluationRef = useRef(null), 
     personaRef = useRef(null), sBoardRef = useRef(null), povRef = useRef(null), 
     hmwsRef = useRef(null), bStormingRef = useRef(null), ideaRef = useRef(null),
     rExperienceRef = useRef(null), solutionRef = useRef(null),
     feedbackRef = useRef(null), dIterationRef = useRef(null), reflectionRef = useRef(null);
    

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    };

    const[showSidebar, setShowSidebar] = useState(false)
    const[viewMore, setViewMore] = useState(false)

    const toggleViewMore = () => {
        setViewMore(!viewMore)
    }
    

    useEffect(() => {
        const handleScroll = () => {
            setShowSidebar(window.scrollY > 550)
        };
        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    });
    
    return (
        <div>
            <header className="app-header">
                <nav className="bg-white border-gray-200 px-8 py-2.5">
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
                            <li>
                                <NavLink to="/" className="block py-2 pl-3 pr-4 text-gray-700 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="block py-2 pl-3 pr-4 underline underline-offset-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Case Study</NavLink>
                            </li>
                            <li>
                                <NavLink to="/speaking" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Speaking</NavLink>
                            </li>
                            
                            <li>
                                <a href="https://drive.google.com/file/d/1H0dRUAl8I9z9BMskwrg9TzjC3H1_UsZI/view?usp=sharing" target="_blank" rel="noreferrer" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Resume</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="product-page relative">

                <aside id="default-sidebar" className={ `${showSidebar? "wipe-in-right block": "hidden"} project-sidebar fixed top-14 left-0 z-20 w-80 h-screen -translate-x-full sm:translate-x-0 pl-8 transition-all duration-500`} aria-label="Sidebar">
                    <div className="h-[88vh] px-3 py-4 overflow-y-auto text-left">
                        <ul className="space-y-0 text-left">
                            <li>
                                <div className="p-1 text-sm font-normal w-full text-left">
                                    Introduction
                                </div>

                                <ul className="pl-2 text-gray-500 font-normal font-sm">
                                    <li><button onClick={() => { handleClick(bgRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Background, Role & Duration</button></li>
                                    <li><button onClick={() => { handleClick(problemRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Challenge</button></li>
                                    <li><button onClick={() => { handleClick(mySoluRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Solution</button></li>
                                    <li><button onClick={() => { handleClick(dProcessRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Process</button></li>
                                </ul>
                            </li>

                            {/* <li>
                                <div className="p-1 text-sm font-normal w-full text-left">
                                    Empathise
                                </div>

                                <ul className="pl-2 text-gray-500 font-normal font-sm">
                                    <li><button onClick={() => { handleClick(uInterviewRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">User Interviews: transcripts</button></li>
                                    <li><button onClick={() => { handleClick(eMapsRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Empaty Maps</button></li>
                                    <li><button onClick={() => { handleClick(hEvaluationRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Heuristic Evaluation</button></li>
                                </ul>
                            </li>

                            <li>
                                <div className="p-1 text-sm font-normal w-full text-left">
                                    Define
                                </div>

                                <ul className="pl-2 text-gray-500 font-normal font-sm">
                                    <li><button onClick={() => { handleClick(personaRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Persona</button></li>
                                    <li><button onClick={() => { handleClick(sBoardRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Storyboard: current experience</button></li>
                                    <li><button onClick={() => { handleClick(povRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">POVs</button></li>
                                </ul>
                            </li>

                            <li>
                                <div className="p-1 text-sm font-normal w-full text-left">
                                    Ideate 
                                </div>

                                <ul className="pl-2 text-gray-500 font-normal font-sm">
                                    <li><button onClick={() => { handleClick(hmwsRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">HMWs</button></li>
                                    <li><button onClick={() => { handleClick(bStormingRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Idea Brainstorming</button></li>
                                    <li><button onClick={() => { handleClick(ideaRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Ideas</button></li>
                                </ul>
                            </li>

                            <li>
                                <div className="p-1 text-sm font-normal w-full text-left">
                                    Prototype and validation
                                </div>
                                
                                <ul className="pl-2 text-gray-500 font-normal font-sm">
                                    <li><button onClick={() => { handleClick(rExperienceRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Storyboard: re-imagined experience</button></li>
                                    <li><button onClick={() => { handleClick(solutionRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Solution</button></li>
                                </ul>
                            </li>
                            <li>
                                <div className="p-1 text-sm font-normal w-full text-left">
                                    Result and Reflection 
                                </div>
                                
                                <ul className="pl-2 text-gray-500 font-normal font-sm">
                                    <li><button onClick={() => { handleClick(feedbackRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Feedback</button></li>
                                    <li><button onClick={() => { handleClick(dIterationRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Iteration</button></li>
                                    <li><button onClick={() => { handleClick(reflectionRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Reflection</button></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </aside>

                {/* <div className={`p-4 sm:ml-64 transition-all duration-300 ease-wipe-in-rt ${showSidebar? "md:pl-12 sm:ml-64 wipe-in-right": "sm:ml-0"}`}> */}
                <div className="p-4">
                    <section ref={ bgRef } className="intro w-full px-2 sm:px-2 sm:w-4/5 mx-auto my-0">
                        <div className="py-4 flex flex-col md:flex-row text-deniblack">
                            <div className="w-full md:w-1/3">
                                <h1 className="mb-2 sm:mb-4 text-4xl font-extrabold leading-none tracking-tight ">XCEL</h1>
                                <p className="text-base">Mobile Application</p>
                            </div>

                            <div className="w-full md:w-2/3">
                                <p className="p-0 text-bas">A FINTECH application helping users perform major financial services like funds transfer; locally and internationally, mobile top-up, bills payment and access to loans from financial institutions.</p>
                            </div>
                        </div>

                        <div className="product-mockup w-full">
                            <img src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675732551/deni.design/r-planner/xcel-landing-mockup_vzz0um.png" alt="project mockup preview" />
                        </div>

                    </section>
                    <div className="md:p-4 w-full px-2 sm:px-0 sm:w-3/5 mx-auto my-0">

                        <section className="overview flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12 md:pr-8 my-8">
                            <div className="w-full md:w-1/2 block">
                                <h4 className="text-sm font-medium text-[#FB8500]">BACKGROUND</h4>
                                <h3 className="text-lg font-bold">Overview</h3>
                                <p className="text-base mb-2">With the hassle of waiting long queue lines in banks and the lack of an efficient international mobile money transfer service, XCEL recognized a gap to fill to bring financial services to the finger tips of users.</p>
                                <p className="text-base mb-4">XCEL mobile app gives users ability to make quick fund transfers both locally and internationally, top-up their mobile phones, pay bills(cable, electricity, and more) all from the convenience of their mobile phones. All while being able to use the app to reach financial goals through creating of savings plans in the pots feature.</p>
                            </div>
                            <div className="w-full md:w-1/2 block">
                                <h4 className="text-sm font-medium text-[#FB8500]">ROLE & DURATION</h4>
                                <h3 className="text-lg font-bold">Role: Sole Product Designer</h3>
                                <p className="text-base mb-6">
                                    {/*<span className="font-bold"></span> <br /> */}
                                    I was responsible for:  User interface design, Research, Interaction design and Prototyping.
                                </p>

                                <h3 className="text-lg font-bold">Duration</h3>
                                <p className="text-base mb-6">
                                    June 2020 - April 2021.
                                </p>
                            </div>
                        </section>

                        {/* Prototype Iframe */}


                        <section ref={ problemRef } className="story flex flex-col text-deniblack font-base px-2 md:px-8">
                        
                            <h2 className="text-3xl mt-4 alt-font font-bold">The Problem</h2>
                            
                            <p className="text-base mb-2">After launching in December 2019, users were able to make fund transfers and add money tot heir XCEL wallet. </p>
                            <p className="text-base text-blue-600 mb-2">However, the daily active user was around only 6% despite the high number of downloads. 43% of downloads resulted in a drop off rate at onboarding, bringing the customer retention rate to only 15%.</p>
                        </section>

                        <section ref={ dStatementRef } className="problem-callout px-6 py-8 md:px-12 md:py-10 bg-[#162C62]">
                            <p className="text-white font-bold text-xl mb-1">The Goal</p>

                            <blockquote className="text-xl italic font-semibold mx-10">
                                <p className="text-white text-lg">"How might we improve the user experience such that it increases the customer retention and number of daily active users."</p>
                            </blockquote>
                        </section>


                        <section ref={mySoluRef} className="story flex flex-col text-deniblack font-base px-2 md:px-8 overflow-x-hidden">
                            {/* Design Process */}
                            <h2 ref={dProcessRef} className="text-3xl mt-4 alt-font font-bold">Design Process</h2>
                            <p className="text-base mb-4">We followed all 5 stages of the design thinking process working on this project. </p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724806/deni.design/r-planner/r-p-design-process_eauac2.png" alt="design process" />

                            <h3 className="text-xl font-semibold mb-2">Discover</h3>
                            <p className="text-base mb-6">Reimagine an older adult(a Professional)’s early stage experience while preparing to transition to retirement</p>

                            <h2 className="text-3xl mt-2 alt-font font-bold">Current Challenge</h2>
                            <p className="text-base mb-4">XCEL is an AI-based banking chatbot integrated into banking applications serving as the user’s personal assistant, a financial advisor, customer support. BankBot uses natural language algorithm to understand what users enter as input while also using chat prompts to minimize typing for users. Features include</p>
                            
                            <ul class="w-full space-y-1 list-disc list-outside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                                <li><span className="font-bold">Funds transfer services</span> -  LugahBot can help users perform transactions such as transferring funds to saved beneficiaries or new beneficiaries. LugahBot is also able to pull up user’s transaction history</li>
                                <li><span className="font-bold">Financial advisor</span> -  LugahBot can act as a financial advisor for customers. Providing them with insights to help better save and plan their funds.</li>
                                <li><span className="font-bold">Personalized Recommendations and Product Knowledge</span>-  banking companies can use LugahBot to offer a more personalized offerings to their customers by delivering tailored contents to users based on preferences while also educating customers on new products and services available.</li>
                            </ul>
                        </section>

                        <hr className="mt-12 " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RPlannerProjectPage;
