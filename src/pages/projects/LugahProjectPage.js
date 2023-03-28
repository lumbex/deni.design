import { useRef, useState, useEffect } from "react"

import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as ReactLogo } from "./../../assets/deni.design-logo.svg";



function LugahProjectPage() {
    const bgRef = useRef(null), problemRef = useRef(null), dStatementRef = useRef(null), mySoluRef = useRef(null), dProcessRef = useRef(null),
     empathizeRef = useRef(null), uResearchRef = useRef(null), uInterviewRef = useRef(null), iStatementRef = useRef(null), hEvaluationRef = useRef(null), 
     defineRef = useRef(null),
     personaRef = useRef(null), povRef = useRef(null), bStormingRef = useRef(null),
     sBoardRef = useRef(null), iDesignRef = useRef(null), pIterationRef = useRef(null), iValidationRef = useRef(null),
     tNotesRef = useRef(null),
     learnedRef = useRef(null), hProtoypeRef = useRef(null);    

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    };

    const[showSidebar, setShowSidebar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowSidebar(window.scrollY > 500)
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
                                <NavLink to="#" className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Case Study</NavLink>
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

<aside id="default-sidebar" className={ `${showSidebar? "wipe-in-right block": "hidden"} project-sidebar  fixed top-14 left-0 z-20 w-80 h-screen -translate-x-full sm:translate-x-0 pl-8 transition-all duration-500`} aria-label="Sidebar">
    <div className="h-[92vh] px-3 py-4 overflow-y-auto text-left">
        <ul className="space-y-0 text-left">
            <li>
                <div className="p-1 text-sm font-normal w-full text-left">
                    Introduction
                </div>

                <ul className="pl-2 text-gray-500 font-normal font-sm">
                    <li><button onClick={() => { handleClick(bgRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Background, Role & Duration</button></li>
                    <li><button onClick={() => { handleClick(problemRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Problem</button></li>
                    <li><button onClick={() => { handleClick(dStatementRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Statement</button></li>
                    <li><button onClick={() => { handleClick(mySoluRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Solution</button></li>
                    <li><button onClick={() => { handleClick(dProcessRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Process</button></li>
                </ul>
            </li>

            <li>
                <div className="p-1 text-sm font-normal w-full text-left">
                    Empathise
                </div>

                <ul className="pl-2 text-gray-500 font-normal font-sm">
                    <li><button onClick={() => { handleClick(uResearchRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Research</button></li>
                    <li><button onClick={() => { handleClick(uInterviewRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">User Interviews</button></li>
                    <li><button onClick={() => { handleClick(iStatementRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Insight Statements</button></li>
                    <li><button onClick={() => { handleClick(hEvaluationRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Heuristic Evaluation</button></li>
                </ul>
            </li>

            <li>
                <div className="p-1 text-sm font-normal w-full text-left">
                    Define
                </div>

                <ul className="pl-2 text-gray-500 font-normal font-sm">
                    <li><button onClick={() => { handleClick(personaRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Product Planing</button></li>
                    <li><button onClick={() => { handleClick(povRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">POVs: Problem Statement</button></li>
                </ul>
            </li>

            <li>
                <div className="p-1 text-sm font-normal w-full text-left">
                    Ideate 
                </div>

                <ul className="pl-2 text-gray-500 font-normal font-sm">
                    {/* <li><button onClick={() => { handleClick(Ref) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">HMWs</button></li> */}
                    <li><button onClick={() => { handleClick(bStormingRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Ideas Brainstorming</button></li>
                    <li><button onClick={() => { handleClick(sBoardRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Storyboards</button></li>
                </ul>
            </li>

            <li>
                <div className="p-1 text-sm font-normal w-full text-left">
                    Prototype and Testing
                </div>
                
                <ul className="pl-2 text-gray-500 font-normal font-sm">
                    <li><button onClick={() => { handleClick(iDesignRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Sketch</button></li>
                    <li><button onClick={() => { handleClick(pIterationRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Decisions</button></li>
                    <li><button onClick={() => { handleClick(hProtoypeRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">HiFi Prototype</button></li>
                    <li><button onClick={() => { handleClick(iValidationRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Userbility Testing</button></li>
                </ul>
            </li>
            
            <li>
                <div className="p-1 text-sm font-normal w-full text-left">
                    Result and Reflection
                </div>

                <ul className="pl-2 text-gray-500 font-normal font-sm">
                    <li><button onClick={() => { handleClick(tNotesRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Results and Impact</button></li>
                    <li><button onClick={() => { handleClick(learnedRef) }} className="py-0 pl-4 pr-2 hover:text-gray-400 w-full text-left">Reflection</button></li>
                </ul>
            </li>
        </ul>
    </div>
</aside>

{/* <div className={`p-4 sm:ml-64 transition-all duration-300 ease-wipe-in-rt ${showSidebar? "md:pl-12 sm:ml-64 wipe-in-right": "sm:ml-0"}`}> */}
<div className="p-4">
    <section ref={ bgRef } className="intro px-2 w-4/5 mx-auto my-0">                        
        <div className="py-4 flex flex-col md:flex-row text-deniblack">
            <div className="w-full md:w-1/3">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight ">Lugah</h1>
                <p className="text-sm">Mobile Application</p>
            </div>

            <div className="w-full md:w-2/3">
                <p className="p-0 text-bas">Conversational AI-based chatbot solution for the banking sector to help improve customer support, automate processes and provide better personal banking experiences to customers.</p>
            </div>
        </div>

        <div className="product-mockup w-full">
            <img src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675154466/deni.design/project-mockup_d5ziwq.png" alt="project mockup preview" />
        </div>
    </section>
    <div className="md:p-4 w-3/5 mx-auto my-0">
        

        <section className="overview flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12 md:pr-8 my-8">
            <div className="w-full md:w-1/2 block">
                <h4 className="text-sm font-medium text-[#FB8500] mb-2">BACKGROUND</h4>
                <h3 className="text-2xl font-bold mb-2">Overview</h3>
                <p className="text-sm mb-4">Bank call centers receive a large daily influx of inquiry calls, queries, transaction requests etc. with a thousand  more customers waiting in line to get a turn to speak to a human agent without knowing when they’ll be next. </p>
                <p className="text-sm mb-8">The scope of this project was to talk to PFAs and identify health challenges we could reimagine a new experience for to create more meaningful experiences for patients. </p>                        
            </div>
            <div className="w-full md:w-1/2 block">
                <h4 className="text-sm font-medium text-[#FB8500] mb-2">ROLE & DURATION</h4>
                <h3 className="text-2xl font-bold mb-2">Role: Sole Product Designer</h3>
                <p className="text-sm mb-6">
                    I was responsible for: Product direction, User Research, User interface design, Prototyping, and Testing.
                </p>

                <h3 className="text-2xl font-bold mb-2">Team</h3>
                <p className="text-sm mb-6">
                    1 Project Manager, 1 Data Scientist Scrum masters, 3 Software Engineers, 1 UI/UX Designer, 1 DevOp.
                </p>

                <h3 className="text-2xl font-bold mb-2">Duration</h3>
                <p className="text-sm mb-6">
                    5weeks: September - October ‘21
                </p>
            </div>
        </section>

        <section ref={ problemRef } className="story flex flex-col text-deniblack font-base px-2 md:px-8">
        
            <h2 className="text-3xl mt-4 alt-font font-bold">The Current Challenge</h2>

            <p className="text-sm mb-4">
                Banking companies receive a large daily influx of inquiry call with a thousand more customers waiting in line to speak with a representative. There is no 24/7 customer support available to customers and if they were to employ human agents for this, would be a rather expensive cost for most banking companies. 
            </p>

            <p className="text-sm mb-4">
                On the other hand, most banking application interface are either overly complex or outdated in their designs. Customers often times have to go through a maze to find how to perform tasks on their banking applications.
            </p>

            <p className="text-lg text-[#FB8500] mb-4">There is a lack of a personalized customer experience for customers. </p>

    
        </section>

        <section ref={ dStatementRef } className="problem-callout px-6 py-8 md:px-12 md:py-10 bg-[#5E3200] text-[#ffffff]">
            <p className="text-[#FB8500] font-bold text-xl mb-1">The Goal</p>
            <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-10 mt-4 mb-8 flex flex-col gap-4">
                <li>Reduce bank costs:  allowing chatbot handle basic questions and issues and option to connect to bank agents in cases that require human intervention. Thereby relieving the pressure and inquiry volume for call centers. </li>
                <li>Deliver personalized and engaging mobile banking experience to users by allowing them perform their financial tasks in a conversational manner. </li>
            </ul>

            <blockquote className="text-xl italic font-semibold">
                <p>"How might we make digital banking more personalised and provide 24/7 support to customer queries"</p>
            </blockquote>
        </section>

        <section ref={mySoluRef} className="story flex flex-col text-deniblack font-base px-2 md:px-8 overflow-x-hidden">
            {/* Solution */}
            <h2 className="text-3xl mt-4 alt-font font-bold">The Solution: <span className="font-normal">LugahBot</span></h2>

            <p className="text-sm mb-4">LugahBot is an AI-based banking chatbot integrated into banking applications serving as the user’s personal assistant, a financial advisor, customer support. BankBot uses natural language algorithm to understand what users enter as input while also using chat prompts to minimize typing for users.</p>
            <p className="text-sm mb-4"> Features include:</p>

            
            <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 mb-8 flex flex-col gap-4">
                <li><span className="font-bold">Funds transfer services</span> -  LugahBot can help users perform transactions such as transferring funds to saved beneficiaries or new beneficiaries. LugahBot is also able to pull up user’s transaction history</li>
                <li><span className="font-bold">Financial advisor</span>-  LugahBot can act as a financial advisor for customers. Providing them with insights to help better save and plan their funds.</li>
                <li><span className="font-bold">Personalized Recommendations and Product Knowledge</span>-  banking companies can use LugahBot to offer a more personalized offerings to their customers by delivering tailored contents to users based on preferences while also educating customers on new products and services available.</li>
            </ul>

            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJ4tNTCVYBTqAWSBDMMAJ7M%2FLugahbank%3Fpage-id%3D1%253A2%26node-id%3D2%253A107%26viewport%3D1697%252C337%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A107" title="figma prototype" className="border border-solid border-[rgba(0,0,0,0.1)] mb-4" width="800" height="450" allowfullscreen></iframe>
            
            {/* Design Process */}
            <h2 ref={dProcessRef} className="text-3xl mt-4 alt-font font-bold">Design Process</h2>
            <p className="text-sm mb-4">We followed all 5 stages of the design thinking process working on this project. </p>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675561800/deni.design/lugah/design-proces-Image_ycs90f.png" alt="design process" />


            {/* Empathize */}
            <h2 ref={ empathizeRef } className="text-3xl mt-4 mb-2">Empathize</h2>    

            <h3 ref={uResearchRef} className="text-xl font-bold mb-2 alt-text alt-font font-bold">Research</h3>
            <p className="text-sm mb-8">My research goal was to get an in-depth understanding of the current customer banking experience using their banking application chatbots, the shortcomings of these chatbots and their experience with banking companies customer supports. The information gathered from this was going to help form my design decisions and identify key requirements of customers in creating a better user experience for them.</p>
            <h4 className="text-xl text-[#FB8500] mb-0">Some questions I seeked out to answer were:</h4>    
            <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-8 mb-8 flex flex-col gap-4">
                <li>How do people generally feel about chatbots?</li>
                <li>What currently works for them in using a chatbot application; ui elements, style, icons etc.</li>
                <li>Major tasks customers perform on their banking applications</li>
                <li>What makes a banking experience stress-free and effective for customers?</li>
            </ul>

            <h4 className="text-xl text-blue-600 mb-2">Competitive Analysis of nigerian bank chatbots</h4>    
            <p className="text-sm mb-4">I wanted to take a look at the existing chatbots offered by the banking companies in Nigeria to identify any gaps or shortcomings within these existing applications and areas of improvement I could target in creating a more meaningful experience for customers. </p>
            <p className="text-sm mb-8">I conducted a competitive analysis across 2 different bank chatbots. I identified the strengths and weaknesses of all 3 and identified the key services offered by all chatbots. </p>
            
            <h4 className="text-xl text-[#FB8500] mb-0">The chatbots were tested on the following</h4>    
            <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-8 mb-8 flex flex-col gap-4">
                <li>Multi-lingual support</li>
                <li>How quickly they respond and effectively answer questions</li>
                <li>Personality and customization</li>
                <li>Level of security and establishment of trust</li>
                <li>Available functionality</li>
                <li>Platform availability</li>
            </ul>
        </section>

        <section className="comparison flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12 md:pr-8 ">
            <div className="w-full md:w-1/2 block">
                <div className="score-card rounded border border-solid border-[#E9CFB1] px-6 py-8">
                    <h4 className="text-xl text-[#FB8500] mb-4">UBA - Leo</h4>
                    <p className="text-sm text-[#FB8500]">Strength</p>
                    <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 mb-8 flex flex-col gap-2">
                        <li>Leo is a male chatbot ; personable and humane</li>
                        <li>Some level of functionality; can detect customer’s account number, check account balance and card top-up</li>
                        <li>Can process customer’s complaint and queries</li>
                        <li>Timely response</li>
                    </ul>
                
                    <p className="text-sm text-[#FB8500]">Weaknesses</p>
                    <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 flex flex-col gap-2">
                        <li>Limited to only messaging application platforms like Facebook and Whatsapp</li>
                        <li>Lack of multi-lingual support and Nigerian local language</li>
                        <li>No verification sign on from customers; thereby reducing level of trustworthiness</li>
                        <li>Limited functionalities</li>
                        <li>Delayed handoff to agents</li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-1/2 block">
                <div className="score-card rounded border border-solid border-[#E9CFB1] px-6 py-10">
                    <h4 className="text-xl text-[#FB8500] mb-4">Fidelity Bank - Ivy</h4>
                    <p className="text-sm text-[#FB8500]">Strength</p>
                    <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 mb-8 flex flex-col gap-2">
                        <li>Ivy is a female chatbot with cartoon character ; more personable and described as a “cool babe”</li>
                        <li>High level of functionality; locate nearest ATM, account balance, account opening, bill payment, FX rates.</li>
                        <li>Can process customer’s complaint and queries</li>
                    </ul>
                
                    <p className="text-sm text-[#FB8500]">Weaknesses</p>
                    <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 flex flex-col gap-2">
                        <li>Limited to only messaging application platforms like Facebook</li>
                        <li>Lack of multi-lingual support and Nigerian local language</li>
                        <li>No verification sign on from customers; thereby reducing level of trustworthiness</li>
                        <li>Delayed response</li>
                        <li>Delayed handoff to agents</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="story flex flex-col text-deniblack font-base px-2 md:px-8 overflow-x-hidden">    
            <h3 ref={uInterviewRef} className="text-xl font-bold mb-4 alt-font font-bold mt-8">Customer Interviews</h3>
            <p className="text-sm mb-8">Target users: banking customers across all age groups</p>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674772/deni.design/lugah/customer-interview-1_gkq7nw.png" alt="Customer interview" />
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674772/deni.design/lugah/customer-interview-2_wxumth.png" alt="Customer interview 2" />
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674772/deni.design/lugah/customer-interview-3_e7sihw.png" alt="Customer interview 3" />

            <h3 ref={iStatementRef} className="text-xl mt-4 mb-2 alt-font font-bold">Findings and Insights</h3>
            <p className="text-sm mb-4">After speaking to some users and doing my online research, and analyzing the gathered information from the online research and user interviews, to help have a linear direction, I categorized the insights into these 2 categories.</p>
            
        </section>

        <section className="comparison flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12">
            <div className="w-full md:w-1/2 block">
                <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674645/deni.design/lugah/l-findings-tasks_jyki1t.png" alt="bot experience" />
            </div>
            <div className="w-full md:w-1/2 block">
                <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674644/deni.design/lugah/l-findings-design_lqk0ng.png" alt="interface design" />
            </div>
        </section>

        <section className="story flex flex-col text-deniblack font-base px-2 md:px-8 overflow-x-hidden">
            {/* Heurstic Analysis */}
            <h3 ref={hEvaluationRef} className="text-xl font-bold mb-2">Key Takeaways</h3>
            <p className="text-sm mb-4">After conducting the research and speaking to some customers, here are some of the key takeaways which will inform my design decisions.</p>
            
            <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                <li>97% of task users want to carry out are centered around: fund transfers, account balance viewing, transaction history and rectification of card debit issues</li>
                <li>There’s a lack of trust - customers are skeptical to release personal information to chatbots except the transaction is happening within the bank application interface.</li>
                <li>Expectation mismatch - chatbots are often times too stiff for customers thereby leaving a gap in not making the conversations fluid.</li>
            </ul>



            {/* Define */}
            <h2 ref={defineRef} className="text-3xl mt-4 mb-4">Define</h2>

            <h3 ref={personaRef} className="text-xl font-bold mb-2 alt-font mt-10">Product Planning</h3>
            <p className="text-sm mb-8">After analyzing the information gathered from my research and with a clear understanding of the problem we were trying to solve for, I came up with a whiteboard shared with the team and stakeholders. This whiteboard was to help set the product direction, come up with the userflow and enable us have a linear direction as we work on our MVP(minimum viable product).</p>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674645/deni.design/lugah/l-planning-chatbot_ahacx9.png" alt="Chatbot Planing" />
            


            <h3 ref={povRef} className="text-xl font-bold mb-2 alt-font mt-10">Problem Statement</h3>
            <p className="text-sm mb-8">Before brainstorming ideas, what challenge or problem we were solving for</p>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675680996/deni.design/lugah/lugah-problem-pov_iwgcc6.png" alt="POVs" />

        

            <h3 ref={bStormingRef} className="text-xl font-bold mb-2 alt-font mt-10">Ideate</h3>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674644/deni.design/lugah/l-HMWs_sem4c4.png" alt="ideate" />
            
            


            <h3 className="text-xl font-bold mb-2 ">Minimum Viable Product</h3>
            <p className="text-sm mb-4">After the product planning and votes on the proposed features, due to the limited time we had before presentation of our first demo at the GITEX2021, we decided to come up with an MVP matrix. This was to help with feature prioritisation and to provide a basic version of the mobile application. </p>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674645/deni.design/lugah/l-MVP_fffde1.png" alt="POVs" />
            
            <p className="text-sm mb-2">Features prioritized include </p>
            <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt2 md:mt-4 mb-8 flex flex-col gap-4">
                <li><span className="font-bold">Funds transfer services</span>-  LugahBot can help users perform transactions such as transferring funds to saved beneficiaries or new beneficiaries. LugahBot is also able to pull up user’s transaction history</li>
                <li><span className="font-bold">Financial advisor</span>-  LugahBot can act as a financial advisor for customers. Providing them with insights to help better save and plan their funds.</li>
                <li><span className="font-bold">Personalized Recommendations and Product Knowledge</span>-  banking companies can use LugahBot to offer a more personalized offerings to their customers by delivering tailored contents to users based on preferences while also educating customers on new products and services available.</li>
            </ul>
                                    

            <h3 ref={sBoardRef} className="text-xl font-bold mb-2 alt-font mt-10">Structuring User Flow</h3>
            <p className="text-sm mb-4">Once we finalized on the core  features we wanted to include in the demo, I came up with two possible user flows depending on the “why” a user might use the chatbot application. This was to help us map out the optimal path for users to get them started off with whatever their need might be.</p>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674644/deni.design/lugah/LUGA_Enterprise_1_levlif.png" alt="user flow" />
            
            <img ref={iDesignRef} className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674646/deni.design/lugah/lugah-sketch_cpbbdz.png" alt="Sketch" />


            {/* The Solution */}
            <h2 ref={pIterationRef} className="text-3xl mt-4 alt-font mt-10">The Solution</h2>
            <p className="text-sm mb-4">After several meetings and iterations to the flow, I came up with the high fidelity prototype design. I centered my design around simplicity and functionality. My design choices branched out from the main point being:</p>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675682462/deni.design/lugah/solution-quote_igdy4n.png" alt="the solution" />
            <p className="text-sm mb-4">Design decisions made in designing the solution include:</p>
            <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt2 md:mt-4 mb-8 flex flex-col gap-4">
                <li><span className="font-bold">Hybrid interface</span>- part conversational, part point and click. This is to give users some control, even though they will be talking to a robot, the experience didn’t need to totally feel that way. So I <span className="text-[#FB8500]">incorporated stop gaps</span> for users to confirm or cancel certain processes. That way, users still feel in control.</li>
                <li><span className="font-bold">Diverse age group reach and accessibility</span>-  from my research, I discovered that the younger generations preferred instant messaging over voice communication while the elderly may have trouble typing their requests. So I optimized my design to accommodate both preferences by providing an option for voice interface as well as a typing area.</li>
            </ul>

            <img ref={hProtoypeRef} className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674643/deni.design/lugah/lugah-onboarding-hifi_ulzhfp.png" alt="Hifi 1" />


            <div className="side-by-side content-center flex flex-col md:flex-row gap-6 md:gap-10 text-deniblack px-2 md:pl-12  mt-8">
                <div className="w-full md:w-1/2 block">
                    <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674643/deni.design/lugah/lugah-Chat_affapn.jpg" alt="Hifi 2" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center"> 
                    <div>
                        <h3 className="text-xl font-bold mb-2">Customer Onboarding</h3>
                        <p className="text-sm mb-4">Lugahbot onboards customers easily and allows easy upload of all documents required for customers to open an account with a bank.</p>
                    </div>
                </div>
            </div>

            <div className="side-by-side content-center flex flex-col md:flex-row gap-6 md:gap-10 text-deniblack px-2 md:pl-12  mt-8">
                <div className="w-full md:w-1/2 block">
                    <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674644/deni.design/lugah/lugah-Chat-faqs_yw6z1l.jpg" alt="Hifi 3" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center"> 
                    <div>
                        <h3 className="text-xl font-bold mb-2">FAQs</h3>
                        <p className="text-sm mb-4">Lugahbot is able to provide customers with answers to any information they require or need clarification on. While also red0recting them to a knowledge base system for more information incase needed.</p>
                    </div>
                </div>
            </div>

            <div className="side-by-side content-center flex flex-col md:flex-row gap-6 md:gap-10 text-deniblack px-2 md:pl-12  mt-8">
                <div className="w-full md:w-1/2 block">
                    <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674643/deni.design/lugah/lugah-Funds-Transfer_bnnjlx.png" alt="Hifi 4" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center"> 
                    <div>
                        <h3 className="text-xl font-bold mb-2">Funds Transfer</h3>
                        <p className="text-sm mb-4">Lugahbot is able to help customers make fast and secure fund transfer to any beneficiary, both new and saved ones.</p>
                    </div>
                </div>
            </div>

            <div className="side-by-side content-center flex flex-col md:flex-row gap-6 md:gap-10 text-deniblack px-2 md:pl-12  mt-8">
                <div className="w-full md:w-1/2 block">
                    <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675674643/deni.design/lugah/lugah-financial-advisor_brhztr.png" alt="Hifi 5" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center"> 
                    <div>
                        <h3 className="text-xl font-bold mb-2">Financial Advisor</h3>
                        <p className="text-sm mb-4">Money matters can require serious planning and this is why LugahBot is also able to help. By answering a few questions, and based on answers provided, LugahBot can act as a financial advisor for customers. Providing them with insights to help better save and plan their funds.</p>
                    </div>
                </div>
            </div>
            

            <h2 ref={iValidationRef} className="text-3xl mb-2 alt-font mt-10">Usability Testing</h2>
            <p className="text-sm mb-4">At the GITEX Expo, I had the application tested by some users and a UX Researcher from a Fintech companies as a potential solution for onboarding older adults on their digital banking app. </p>
            <p className="text-sm mb-4">What worked for them:</p>
            <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                <li><span className="font-bold">Fluid conversation and easy conversation prompts</span>-  users liked the conversation prompts because it made the conversation faster and didn’t have to go around looking for task buttons</li>
                <li><span className="font-bold">Chatbot prompt replies</span>-  users liked that the chatbot was prompt in its replies without keeping them waiting</li>
                <li><span className="font-bold">Aesthetic interface with easy information</span>-  users liked that the interface was simple yet functional. They could see their most recent transaction while still being able to reply the chatbot and collapse it at will.</li>
                <li><span className="font-bold">Easy onboarding</span>-  the UX researcher found the user onboarding experience smooth adn could see how conversational onboarding could be beneficial to the older generation who didn’t like going through a series of steps to create a banking account on their application</li>
            </ul>
            <p className="text-sm mb-4">Improvement opportunities </p>
            <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                <li><span className="font-bold">Smooth agent handoffs</span>-  some users wondered how the conversation would be handed off to an agent smoothly without them having to notice the difference and how that might affect the customer’s experience</li>
                <li><span className="font-bold">Separate home interface</span>-  some users wondered if it would be better to have a separate home interface without jumping right into the chatbot interface and in cases the conversation abruptly ends.</li>
            </ul>


            <h2 ref={tNotesRef} className="text-3xl mb-2 alt-font mt-10">Result and Impact</h2>
            <p className="text-sm mb-4">After the beta testing done at the GITEX Expo and having some Fintech companies and bank representatives use the app to get feedback and suggested improvements, we collated the results and proceeded to release the first version of the application in November as an enterprise solution with more updates to be made as we engage businesses on the platform.</p>
            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675559591/deni.design/lugah/ResultNumbers_kfnesd.png" alt="result and impact" />
                                    
            <h2 ref={learnedRef} className="text-3xl mb-2 alt-font mt-10">Reflections</h2>
            <p className="text-sm mb-4">Despite being my first time working on conversation interfaces, I was happy for the opportunity to lead the product direction for such a product that we went on to demo at the Dubai GITEX Expo. Here are some of the learnings I took away from working on this product:</p>
            <ul className="w-full space-y-1 list-decimal list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                <li><span className="font-bold">Prioritize and work with a linear flow</span> <br /> Using a MVP matrix to know which features to move ahead with and which to drop will go a long way in helping to make sure you have a linear direction in designing your product for initial launch. This will also help with meeting tight deadlines while still being able to deliver a quality product with good enough features to get the product out there.</li>
                <li><span className="font-bold">Minimalism</span> <br /> Minimalism is key in making sure users are not overwhelmed by the interface design and worst still, confused as to what to do. Knowing the why and who of the product will ensure that we are designing for the right people and also solving their problem(s).</li>
                <li><span className="font-bold">Data-driven decisions</span> <br /> Research is key to launching any product: making sure there’s a market/deman for it, knowing similar solutions that exist and critically analyzing the existing solution to make informed decisions in designing your product. This will not only save costs but also time and energy invested in the product.</li>
                <li><span className="font-bold">Feedback</span> <br /> Before getting a final product out there, several iterations happen. Iterations take a lot of time and can involve so many back and forths. One thing that will save a lot of time and these back and forths is getting feedback at every stage of the product design. Make sure all key players: stakeholders and team members are carried along through it all and adequate testing of solutions are done.</li>
            </ul>

        </section>
    </div>
</div>
</div>
        </div>
        
    );
}

export default LugahProjectPage;
