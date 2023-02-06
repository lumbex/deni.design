import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"


function ProjectPage() {
    const bgRef = useRef(null), problemRef = useRef(null), dStatementRef = useRef(null),
     mySoluRef = useRef(null), dProcessRef = useRef(null), empathizeRef = useRef(null), uInterviewRef = useRef(null),
     iStatementRef = useRef(null), hEvaluationRef = useRef(null), defineRef = useRef(null), eMapsRef = useRef(null),
     personaRef = useRef(null), povRef = useRef(null), ideateRef = useRef(null), bStormingRef = useRef(null),
     sBoardRef = useRef(null), pValidationRef = useRef(null), iDesignRef = useRef(null), pIterationRef = useRef(null), iValidationRef = useRef(null),
     solutionRef = useRef(null), dDecisionsRef = useRef(null), fDesignRef = useRef(null), tNotesRef = useRef(null),
     learnedRef = useRef(null);
    

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    };

    const[showSidebar, setShowSidebar] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            setShowSidebar(window.scrollY > 700)
            console.log(window.screenY)
        };

        window.addEventListener("scroll", handleScroll)

        return() => window.removeEventListener("scroll", handleScroll)
    });
    
    return (
        <div className="product-page relative">

            <aside id="default-sidebar" className={ `${showSidebar? "wipe-in-right block": "hidden"} project-sidebar  fixed top-14 left-0 z-20 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 pl-8`} aria-label="Sidebar">
                <div class="h-[92vh] px-3 py-4 overflow-y-auto text-left">
                    <ul class="space-y-2 text-left">
                        <li>
                            <button className="p-2 text-base font-normal hover:text-gray-500 w-full text-left">
                                Introduction
                            </button>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(bgRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Background, Role & Duration</button></li>
                                <li><button onClick={() => { handleClick(problemRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Problem</button></li>
                                <li><button onClick={() => { handleClick(dStatementRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Statement</button></li>
                                <li><button onClick={() => { handleClick(mySoluRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Solution</button></li>
                                <li><button onClick={() => { handleClick(dProcessRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Process</button></li>
                            </ul>
                        </li>

                        <li>
                            <button className="p-2 text-base font-normal hover:text-gray-500 w-full text-left">
                                Empathise
                            </button>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(uInterviewRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">User Interviews</button></li>
                                <li><button onClick={() => { handleClick(iStatementRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Insight Statements</button></li>
                                <li><button onClick={() => { handleClick(hEvaluationRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Heuristic Evaluation</button></li>
                            </ul>
                        </li>

                        <li>
                            <button className="p-2 text-base font-normal hover:text-gray-500 w-full text-left">
                                Define
                            </button>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(eMapsRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Empathy Maps</button></li>
                                <li><button onClick={() => { handleClick(personaRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Persona</button></li>
                                <li><button onClick={() => { handleClick(povRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">POVs: Problem Statement</button></li>
                            </ul>
                        </li>

                        <li>
                            <button className="p-2 text-base font-normal hover:text-gray-500 w-full text-left">
                                Ideate 
                            </button>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                {/* <li><button onClick={() => { handleClick(Ref) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">HMWs</button></li> */}
                                <li><button onClick={() => { handleClick(bStormingRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Ideas Brainstorming</button></li>
                                <li><button onClick={() => { handleClick(sBoardRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Storyboards</button></li>
                            </ul>
                        </li>

                        <li>
                            <button className="p-2 text-base font-normal hover:text-gray-500 w-full text-left">
                                Prototype and validation
                            </button>
                            
                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(iDesignRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Initial Design</button></li>
                                <li><button onClick={() => { handleClick(pIterationRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Prototype Iteration</button></li>
                                <li><button onClick={() => { handleClick(iValidationRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Idea Validation</button></li>
                            </ul>
                        </li>
                        <li>
                            <button className="p-2 text-base font-normal hover:text-gray-500 w-full text-left">
                                Solution 
                            </button>
                            
                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(dDecisionsRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Insights: Design Decisions</button></li>
                                <li><button onClick={() => { handleClick(fDesignRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Final Designs</button></li>
                            </ul>
                        </li>
                        <li>
                            <button className="p-2 text-base font-normal hover:text-gray-500 w-full text-left">
                                Testing
                            </button>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(tNotesRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Notes from testing</button></li>
                            </ul>
                        </li>
                        <li>
                            <button className="p-2 text-base font-normal hover:text-gray-500 w-full text-left">
                                Reflection
                            </button>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(learnedRef) }} class="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">What I learned</button></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </aside>

            <div className={`p-4 sm:ml-64 transition-all duration-300 ease-wipe-in-rt ${showSidebar? "md:pl-12 sm:ml-64 wipe-in-right": "sm:ml-0"}`}>
                <div class="md:p-4">
                    <section ref={ bgRef } className="intro px-2">
                        <div className="breadcrumb">
                            <nav class="flex" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                                <li class="inline-flex items-center">
                                <Link to="/" class="inline-flex items-center text-sm font-medium text-[#717987] hover:text-deniblack">
                                    <svg className="fill-[#717987] mr-2" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM17 7L1 7V9L17 9V7Z" fill="#717987"/>
                                    </svg>
                                    Back to projects
                                </Link>
                                </li>
                            </ol>
                            </nav>
                        </div>
                        
                        <div className="py-4 flex flex-col md:flex-row text-deniblack">
                            <div className="w-full md:w-1/3">
                                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight ">MyHealth</h1>
                                <p className="text-base">Web Application</p>
                            </div>

                            <div className="w-full md:w-2/3">
                                <p className="p-0 text-bas">A patient-centered unified solution designed to help patients be more actively involved in their health care journey and keep their entire care team in the know through access to information like aftercare summary, pre-op explainer videos and more.</p>
                            </div>
                        </div>

                        <div className="product-mockup w-full">
                            <img src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675154466/deni.design/project-mockup_d5ziwq.png" alt="project mockup preview" />
                        </div>

                        <div className="prototype-link flex flex-row-reverse my-6">
                            <a href="#" target="_blank" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-30 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Link to prototype</a>
                        </div>
                    </section>

                    <section className="overview flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12 md:pr-8">
                        <div className="w-full md:w-1/2 block">
                            <h4 className="text-xl text-blue-600 mb-2">BACKGROUND</h4>
                            <h3 className="text-2xl font-bold mb-2">Overview</h3>
                            <p className="text-base mb-4">
                                This project was conducted as part of the project requirement for my Design Thinking course. We worked with PFAs (Patient Family Advisors) who were spokesmen of patients at the St Joseph hospitals but also, had themselves been patients at one time or the other.
                            </p>
                            <p className="text-base mb-8">
                                The scope of this project was to talk to PFAs and identify health challenges we could reimagine a new experience for to create more meaningful experiences for patients.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 block">
                            <h4 className="text-xl text-blue-600 mb-2">ROLE & DURATION</h4>
                            <h3 className="text-2xl font-bold mb-2">Role: UI/UX Designer</h3>
                            <p className="text-base mb-6">
                                This project was conducted as part of the project requirement for my Design Thinking course. We worked with PFAs (Patient Family Advisors) who were spokesmen of patients at the St Joseph hospitals but also, had themselves been patients at one time or the other.
                            </p>

                            <h3 className="text-2xl font-bold mb-2">Team</h3>
                            <p className="text-base mb-6">
                                I worked along side two other classmates who were from mechanical engineering to conduct interviews and document our research findings
                            </p>

                            <h3 className="text-2xl font-bold mb-2">Duration</h3>
                            <p className="text-base mb-6">
                                3 weeks - design thinking class project
                            </p>
                        </div>
                    </section>


                    <section ref={ problemRef } className="story flex flex-col text-deniblack font-base px-2 md:px-8">
                    
                        <h2 className="text-3xl mt-4">The Current Challenge</h2>

                        <p className="text-base mb-4">
                            The current healthcare system is challenging for most patients particularly those undergoing a medical procedure or health challenge. During this process, patients we spoke to highlighted how they didn’t feel like a part of their health care journey even though they would love to be experts in their own medical health.  
                        </p>

                        <p className="text-base mb-4">
                            From the interviews, here are some of the challenges we discovered patients have with the current health care system:
                        </p>

                        
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-8 mb-4 flex flex-col gap-4">
                            <li>Lack of aftercare summary piece - patients want to know what was discusses during their doctor visits especially for intense visits where they get overloaded with information that is ahrd for them to retain.</li>
                            <li>Language barrier - speaking to the PFAs, a lot of international patients find it hard to communicate in english and worse, comprehend English written texts. This makes it hard for them to make proper use of available health tools</li>
                            <li>Silo system of hospital - speaking to the PFAs, we discovered that the hospital system works in silos. Consequently, the entire care team of a patient aren’t well-informed of patient’s progress some times. Also, there is no way to share patient’s medical history if perhaps a patient moves to a new city</li>
                            <li>Patients aren’t made to feel like a part of the process - patients show resistance in seeking medical care because of the communication gap in the health system; doctor’s communicating with them in medical terminologies which half the time, they do not understand. This atimes, prevent them from continually seeking help as they don’t feel empathized with.</li>
                        </ul>
                    </section>

                    <section ref={ dStatementRef } className="problem-callout px-6 py-8 md:px-12 md:py-10 bg-[#CEDDFF]">
                        <p className="text-blue-600 text-base mb-1">Design Statement:</p>
                        <p className="text-deni-black text-lg md:text-2xl text-left md:text-center">Reimagine the patient health learning experience going through a knee replacement surgery</p>
                    </section>

                    <section ref={mySoluRef} className="story flex flex-col text-deniblack font-base px-2 md:px-8 overflow-x-hidden">
                        {/* Solution */}
                        <h2 className="text-3xl mt-4">The Solution: <span className="font-normal">MyHealth</span></h2>

                        <p className="text-base mb-4">My health is a web platform providing users with information relating to their health conditions. </p>

                        <p className="text-base mb-4">Features designed for include:  </p>

                        
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 mb-8 flex flex-col gap-4">
                            <li><span className="font-bold">Medical Notes</span> -  a comprehensive aftercare summary notes detailing what was discussed during a doctor’s appointment/visit</li>
                            <li><span className="font-bold">Medication Calendar</span> - A visual calendar detailing when and how prescribed medications should be used as well as symptoms or signs patients should watch out for </li>
                            <li><span className="font-bold">AR Interactive Wayfinding Indoor Map </span>- an interactive indoor map to help alleviate the stress of the day by helping patients find their way around the hospital whether they are going in for a surgery or running late for a doctor’s appointment.</li>
                        </ul>
                        
                        {/* Design Process */}
                        <h2 ref={dProcessRef} className="text-3xl mt-4">Design Process</h2>
                        <p className="text-base mb-4">We followed all 5 stages of the design thinking process working on this project. </p>
                        <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675257648/deni.design/my-health/my-health-dp_lregwg.png" alt="design process" />


                        {/* Empathize */}
                        <h2 ref={ empathizeRef } className="text-3xl mt-4">Empathize</h2>

                        <h3 ref={uInterviewRef} className="text-xl font-bold mb-2">User Interviews: remote interviews</h3>
                        <p className="text-base mb-8">We sort out to get an in-depth understanding of the current end-to-end user experience with the healthcare system in Canada, the services and health tools available to them. We interviewed a total of 7 users and eventually narrowed down to 3 major users whose pain points we were trying to solve for. </p>

                        <h4 className="text-xl text-deniblack mb-2 font-bold">Key takeaways from our main 3 user interviews</h4>
                        
                        <h4 className="text-xl text-blue-600 mb-0">Interviewee 1: Sahar</h4>    
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-8 mb-8 flex flex-col gap-4">
                            <li>It is important for a patient to feel involved with their healthcare and to empower them with knowledge</li>
                            <li>Patients need to be properly informed of the risks post-surgery, what to do and when to do it.</li>
                            <li>Wishes the current healthtool: Dovetail system would provide more aftercare tools and information about what is happening to them, what to do after surgery, and complications</li>
                            <li>Surgery comes with anxiety, navigating to the surgery is an added stress that adds to the day </li>
                            <li>Kept notes on a notepad and recorded questions about what they needed to do, after surgery it was difficult to retain information </li>
                        </ul>

                        <h4 className="text-xl text-blue-600 mb-0">Interviewee 2: Debra</h4>    
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>A lack of confidence in the resources and current capabilities of the medical system, everything in the healthcare system functions in silos and fails to work together.</li>
                            <li>Nurses and doctors use a lot of jargon, and this can be confusing for the patients and leave them feeling left out or lost in their healthcare. Health talk is a tool she teaches nurses that focuses on providing information at a level everyone can understand.</li>
                            <li>It is critical to provide tools so that a patient can “own their health,” this includes tools to overcome language barriers and confusion caused by medical terms or gaps in understanding.</li>
                            <li>People think Doctors are up on a pedestal and cannot be questioned. Consequently, patients who are not outspoken and have no family with them tend to not ask questions about the why, how, and what not even when they need to know.</li>
                        </ul>

                        <h4 className="text-xl text-blue-600 mb-0">Interviewee 3: Nancy</h4>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 mb-12 flex flex-col gap-4">
                            <li>There are misconceptions and misinformation about medications and healthcare needs, this causes fear and can lead to further issues or complications.</li>
                            <li>Medical staff, especially nurses in environments like the ER, are always in a busy state, with very little downtime, and need to develop their own tools to cope. Nurses do their job and then move on, there is little time to do anything else.</li>
                            <li>The healthcare system can be difficult to navigate, it takes years of being in the system to fully understand what tool is best to help with what condition.</li>
                        </ul>


                        <h3 ref={iStatementRef} className="text-xl font-bold mb-2">Insights from interviews</h3>
                        <p className="text-base mb-4"> We synthesized the insights we discovered and categorized them into clusters with each cluster highlighting the insights under each.</p>
                        
                        <h4 className="text-xl text-blue-600 mb-0">Cluster 1: Information Dearth</h4>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>There is a heightened sense of anxiety going into and coming out of surgery and half the time patients are not well-informed as to what to expect before and after. </li>
                            <li>Patients are met with a lot of signs and symptoms post-op which often times they overlook due to lack of proper information post operation.  </li>
                            <li>Patients want to be expert in their own medical condition to help them feel more like a part of the process in their health procedures(e.g surgeries)</li>
                        </ul>

                        <h4 className="text-xl text-blue-600 mb-0">Cluster 2: Communication gap/Language barrier</h4>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>Patients want access to tools customized to their needs and situation(s).</li>
                            <li>In the medical environment there are communication gaps that exist between staff and caregivers due to changeovers in shifts leaving a lot of information not communicated.</li>
                            <li>People go to where there is an abundance of like-minded individuals like them. Hence patients are sometimes hesitant to go to clinics if there is uncertainty about if they will be able to communicate easily with the doctors or nurses.</li>
                        </ul>

                        <h4 className="text-xl text-blue-600 mb-0">Cluster 3: Healthcare distrust</h4>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>People think doctors are on a pedestal and should not be questioned even when it involves their health</li>
                            <li>Patients push back in seeking medical help because of the lack of compassion from medical professionals</li>
                            <li>Patients are not made to feel like they are part of the process. Consequently, they show resistance to seeking medical help</li>
                            <li>The time between when care is needed and when it is given is usually long unless a patient is dying or has a pre-existing life-threatening condition. So, patients push back on going to the clinic at times.</li>
                            <li>Some people are "stoic" and do not admit their actual pain level often out of fear or feeling of seeming overly dramatic to the doctors because unless the hospital has collected enough records on a patient, they do not believe the patient’s issue is as serious as they make out.</li>
                        </ul>


                        {/* Heurstic Analysis */}
                        <h3 ref={hEvaluationRef} className="text-xl font-bold mb-2">Heurstic Evaluation and Analysis of Dovetale</h3>
                        <p className="text-base mb-4">Conducted a heuristic evaluation of the website specifically in terms of aesthetic and design, functionality for patients, help and documentation, and navigation. Also analyzed its strengths and weaknesses.</p>
                        
                        <div className="key flex flex-row">
                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#EB5757] rounded-full mr-1 flex-shrink-0"></span>Not available</span>
                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#6FCF97] rounded-full mr-1 flex-shrink-0"></span>Good</span>
                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#56CCF2] rounded-full mr-1 flex-shrink-0"></span>Decent</span>
                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#E9CFB1] rounded-full mr-1 flex-shrink-0"></span>Poor</span>
                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#BDBDBD] rounded-full mr-1 flex-shrink-0"></span>Ineffective</span>
                        </div>

                        <div class="table relative overflow-x-hidden md:overflow-x-auto shadow-sm sm:rounded-lg mt-6 mr-0 md:mr-[20%] border rounded">
                            <table class="w-full text-sm text-left text-gray-500">        
                                <tbody>
                                    <tr class="border-b border-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap bg-gray-50  ">
                                            Overall aesthetic and design
                                        </th>
                                        <td class="px-6 py-4">
                                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#56CCF2] rounded-full mr-1 flex-shrink-0"></span></span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap bg-gray-50  ">
                                            Ease of use
                                        </th>
                                        <td class="px-6 py-4">
                                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#56CCF2] rounded-full mr-1 flex-shrink-0"></span></span>
                                        </td>
                                    </tr>
                                    
                                    <tr class="border-b border-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap bg-gray-50  ">
                                            Help and documentation
                                        </th>
                                        <td class="px-6 py-4">
                                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#BDBDBD] rounded-full flex-shrink-0"></span></span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap bg-gray-50  ">
                                            Access to Doctor’s notes    
                                        </th>
                                        <td class="px-6 py-4">
                                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#EB5757] rounded-full mr-1 flex-shrink-0"></span></span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap bg-gray-50  ">
                                            Clear medication table
                                        </th>
                                        <td class="px-6 py-4">
                                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#BDBDBD] rounded-full flex-shrink-0"></span></span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap bg-gray-50  ">
                                            Ability to share and download past medical history
                                        </th>
                                        <td class="px-6 py-4">
                                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#EB5757] rounded-full mr-1 flex-shrink-0"></span></span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap bg-gray-50  ">
                                            Shared information outside SJHH care team
                                        </th>
                                        <td class="px-6 py-4">
                                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#EB5757] rounded-full mr-1 flex-shrink-0"></span></span>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap bg-gray-50  ">
                                            Multi-lingual support
                                        </th>
                                        <td class="px-6 py-4">
                                            <span class="flex items-center text-sm font-base mr-4"><span class="flex w-2.5 h-2.5 bg-[#EB5757] rounded-full mr-1 flex-shrink-0"></span></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        {/* Empathy Maps */}
                        <h2 ref={eMapsRef} className="text-3xl mt-8">Empathy Maps</h2>
                        <p className="text-base mb-4">After the user interviews, we compiled the information and insights discovered, and organized them using Empathy maps for each user.</p>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675257944/deni.design/my-health/Empathy_Map_-_A_an5kdp.png" alt="Empathy Map" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675257943/deni.design/my-health/Empathy_Map_-_B_joun4q.png" alt="Empathy Map" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675257943/deni.design/my-health/Empathy_Map_-_C_xsizdi.png" alt="Empathy Map" />


                        {/* Define */}
                        <h2 ref={defineRef} className="text-3xl mt-4">Define</h2>

                        <h3 ref={personaRef} className="text-xl font-bold mb-2">Persona</h3>
                        <p className="text-base mb-8">We created two personas that encompassed who our users are both mainstream and extreme users. </p>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291913/deni.design/my-health/Persona_-_mainstream_huyziw.png" alt="Persona Mainstream" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291909/deni.design/my-health/Persona_-_disabilty_mv4s8f.png" alt="Persona Disablility" />
                        

                        <h3 ref={povRef} className="text-xl font-bold mb-2">Problem Statement</h3>
                        <p className="text-base mb-8">Before brainstorming ideas, we needed to understand what the user’s goal is now that we have an understanding of who they are. For this, we framed their goal using POV or problem statement. <br />We defined different problem statements for both our mainstream user and extreme users.</p>
                        <p className="text-base mb-8">We wanted to ensure that in designing a solution and creating a meaningful experience for users, the design solution could serve as many people as possible without excluding certain user groups from experiencing our solution. To do this, we accounted for the case of extreme users interacting with our solution. What design decisions could we make to make their experience the same as that of our mainstream users?</p>
                        <p className="text-base mb-8">Our extereme users include:</p>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>Users who are visually impaired: partial loss of vision, total loss of vision or color blind</li>
                            <li>Users who are not “tech savvy”: users who do not like to use digital technologies due the perceived complication around the use thereof</li>
                            <li>Users who are language impaired: cannot communicate or understand the default language of most applications which is usually English.</li>
                        </ul>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291909/deni.design/my-health/POVS_1_av6e1n.png" alt="POVs" />
                        

                        <h3 ref={ideateRef} className="text-xl font-bold mb-2">Ideate</h3>
                        <p className="text-base mb-4">To help brainstorm ideas, we turned the POVs from the define stage into HMW statements and branched off ideas using the HMW questions. </p>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291909/deni.design/my-health/my-health-ideate-1_y9ubb3.png" alt="ideate" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291909/deni.design/my-health/my-health-ideate-2_qlgb6k.png" alt="ideate" />
                        
                        <h3 ref={bStormingRef} className="text-xl font-bold mb-2">Ideas from brainstorming</h3>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>A software/portal that can provide information such as a user portfolio, previous medical history, detailed notes on visits, tips and tricks for care and recovery, and a customer support chat</li>
                            <li>An app that allows people to be aware of which practice facility to go to depending on their situation (ER, urgent care, walk-in, etc.)</li>
                            <li>Doctor-patient simulator game that allows a visual experience for patients to understand how care may be given depending on the situation</li>
                        </ul>
                        




                        <h3 className="text-xl font-bold mb-2">Idea selection</h3>
                        <p className="text-base mb-4"> We decided to go with <span className="text-blue-600">Idea 1: the MyHealth</span> app for the following reasons: </p>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>From talking to users, one major insight that kept re-occurring in every interview was a dearth of information. There was the concerning question of patients asking; so, what do I do? How do I know this about the healthcare system or my health condition? All of 29 | P a g e these showed that patients wanted to know things about their health, but the gap was in the lack of access to tools providing this information and no open direct line of communication with their doctors</li>
                            <li>At the core, patients needed a health information system that was personalized to their individual needs and situations.</li>
                            <li>MyHealth was the closest we could get to help provide if not all the answers to patient’s concerns, but at least some while also giving them an open line of communication with their entire care team</li>
                        </ul>
                        
                        <h3 ref={sBoardRef} className="text-xl font-bold mb-2">Storyboard</h3>
                        <p className="text-base mb-4"><span className="font-bold">Scenario:</span> Current end-end aftercare health learning experience for a knee replacement surgery </p>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291911/deni.design/my-health/my-health-toon-1_btsqzf.png" alt="Scenario 1" />
                        <p className="text-base mb-4"><span className="font-bold">Scenario:</span>  Future reimagined end-end aftercare health learning experience for a knee replacement surgery</p>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291910/deni.design/my-health/my-health-toon-last_jw6ltj.png" alt="Scenario 2" />

                        



                        {/* Prototype */}
                        <h2 ref={pValidationRef} className="text-3xl mt-4">Prototype</h2>
                        <p className="text-base mb-4"> Due to time constraints, we went straight to hi-fi after fleshing out the major features and touch points of the application and using the storyboard to visualize what we want from the user experience.</p>
                        
                        <h3 ref={iDesignRef} className="text-xl font-bold mb-2">Initial prototype</h3>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291910/deni.design/my-health/my-health-onboarding_ylqogc.png" alt="onboarding prototype" />
                        <p className="text-base mb-4"><span className="font-bold">Preferences Onboarding Screen:</span> serves to accommodate selected preferences patients might need, including those related to languages and enables the screen texts to be read out to </p>

                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291910/deni.design/my-health/my-health-dashboard_q3n3p4.png" alt="dashboard prototype" />
                        <p className="text-base mb-4"><span className="font-bold">Home/Dashboard:</span> this is the first landing page for patients which shows the most recent activities on their accounts, their prescriptions, recent doctor visits, attached notes, and a calendar to preview their appointments at a glance </p>
                        
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291910/deni.design/my-health/doctors-note-preferences-3_mjxzqx.png" alt="Doctors notes prototype 1" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291911/deni.design/my-health/redesign_3_orfgzi.png" alt="Doctors notes prototype 2" />
                        <p className="text-base mb-4"><span className="font-bold">Doctor’s Notes:</span> on selecting a doctor’s notes from the table of notes above (see the picture before), a user can view the detailed doctor’s notes from a visit. The doctor’s note includes information discussed during the patient’s visit, medications prescribed, and a comment section for patients to drop questions that might have after going through the notes they could not ask during the earlier visit. </p>
                        
                        <h3 ref={pIterationRef} className="text-xl font-bold mb-2">Prototype iteration</h3>
                        <p className="text-sm mb-4"> We tested the above prototype with Sahar to validate the idea and allow for refinements that might help make the solution more meaningful to the patients.<br/>We made changes to our prototype based on the feedback and new insights gathered from testing with Sahar </p>
                        <p className="text-sm text-blue-600 mb-4"> New Insight </p>
                        <p className="text-sm text-deni-black mb-4"> Many patients do not know what to expect or what medications to discontinue or continue as well as symptoms to look out for post-surgery. Consequently, many patients tend to overlook symptoms that show up post-surgery which eventually cause more harm. </p>

                        <p className="text-sm text-blue-600 mb-4"> Redesigned doctor’s notes page </p>
                        <p className="text-sm text-deni-black mb-4"><span className="font-bold">Before:</span> under the current medication, the prescribed doctor’s medications were listed according to names with little instructions on when to use them. </p>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291912/deni.design/my-health/doctore-note-preferences-4_xtsj2j.png" alt="Doctors notes prototype 3" />
                        <p className="text-sm text-deni-black mb-4"><span className="font-bold">After:</span> After the new insights we discovered, we redesigned the Current Medication section to be more detailed and presented the medication in form of a calendar with more visuals and use of plain, easy language to help patients understand what is to be done with each medication and what the medication looks like. </p>

                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291911/deni.design/my-health/redesign_2_kd5ind.png" alt="Doctors notes prototype 4" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291911/deni.design/my-health/redesing_kzcm2m.png" alt="Doctors notes prototype 5" />

                        
                        <h3 ref={iValidationRef} className="text-xl font-bold mb-2">Idea Validation: feedback from initial testing with Sahar (user)</h3>
                        <p className="text-base mb-4">Here are some of the suggestions and comments made by one of the users: </p>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>After testing the initial prototype with Sahar, she explained how we have managed to capture a lot of the features she had hoped Dovetail would have provided but fell short on.</li>
                            <li>Sahar had a positive reaction to the guide for the software (helping onboard inexperienced users in getting familiar with the app) and verified that the service would be able to be translated into multiple languages.</li>
                            <li>Suggested to use of symbols to remind patients when to take their meds, for example, a sun rising in the morning, and a moon for the night. She explained that being able to have your medication schedule easily laid out like this for the patient, especially one that just came out of surgery, helps prevent confusion and ensure that they follow what they need to. After surgery, there are wait periods for taking some medication and others need to be taken in infrequent periods.</li>
                            <li>People are given papers for everything they must take and what they are supposed to do, and this can result in a lack of information being retained and issues with the patient. Having a detailed list of key steps and medications will help, also a list of potential signs to watch out for such as blood clots. Creating a single platform that allows for all of this will be a useful tool for patients, especially for surgeries, and can raise awareness of post-surgery risks.</li>
                        </ul>

                        <h3 ref={dDecisionsRef} className="text-xl text-blue-600 font-bold mb-2">Final prototype: insights that drove final decisions</h3>
                        <p className="text-base mb-4">Using the initial feedback gotten from Sahar, we made more adjustments to the prototype. Here are some insights that drove the decisions made to make refinements to the final prototype:</p>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>Patients are already stressed about hospital visits and worse on surgery day, navigating the hospital area/specified room should be the least of their problems.</li>
                            <li>When patients feel like they have a say in their health care and as a part of the healthcare process, they show less resistance in seeking medical help and are more adherent to medications because they have a full understanding of why they do certain things relating to their health and why certain things are happening.</li>
                            <li>Patients do not want to feel alone in their health journey and are better comforted when information relating to their health comes directly from their care team instead of relying on the internet to give them updated information about their health condition. E.g., a guide as to what happens during a knee replacement surgery will be helpful, coming directly from the doctor in a digital format as opposed to a booklet which is not easily shareable among their care team.</li>
                            <li>Post-operative care is as important to patients as the pre-operative care sessions and patients want their entire care team carried along with shared information.</li>
                        </ul>


                        {/* Solution */}
                        <h2 ref={solutionRef} className="text-3xl mt-4"><span className="font-bold">Solution:</span> MyHealth</h2>
                        <p className="text-base mb-4">MyHealth is an end-to-end solution that focuses on involving patients in their healthcare journey by empowering them with the information they need to know as it relates to their individual medical situations or needs via an online platform. </p>
                        <img ref={fDesignRef} className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291911/deni.design/my-health/redesign_2_kd5ind.png" alt="Solution screen 1" />
                        <p className="text-base mb-4"><span className="font-bold">Doctor’s Notes:</span> After the new insights we discovered, we redesigned the doctor’s notes page to include a customizable surgery information guide that helps patients understand what happens during a typical surgery, in this case, knee replacement surgery, and the next steps after their procedure. </p>
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291912/deni.design/my-health/Preferences_2_idkbpy.png" alt="Solution screen 2" />                
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291914/deni.design/my-health/Preferences_3_nuny5j.png" alt="Solution screen 3" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291912/deni.design/my-health/Preferences_4_gtfqgm.png" alt="Solution screen 4" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291914/deni.design/my-health/Preferences_5_qs6mgm.png" alt="Solution screen 5" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291913/deni.design/my-health/Preferences_6_karzgw.png" alt="Solution screen 6" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291914/deni.design/my-health/Preferences_7_laszd2.png" alt="Solution screen 7" />
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291913/deni.design/my-health/Preferences_8_ti1x0l.png" alt="Solution screen 8" />
                        <p className="text-base mb-4"><span className="font-bold">Pre-surgery guide:</span> This guide helps patients be expert about their health; particularly when they have an upcoming surgery. This guide aims to detail to the patient what typically happens during the surgery. That way, patients understand fully well what happens going into surgery. The guide employ the use of objects as an alternative representation of body part so patients aren’t terrified with the visual representation of the guide. <br />The guide can be further improved by detailing how Doctors prepare for a patient’s surgery; to further instil a sense of trust between the patient and the care team. </p>
                        
                        <img className="my-6 md:mr-[20%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675291916/deni.design/my-health/my-health-wayfinder_z62u0d.png" alt="AR wayfinder" />
                        <h3 className="text-xl font-bold mb-2">AR Interactive Wayfinder </h3>
                        <p className="text-base mb-4">This serves as a hospital indoor map using real scenarios and pictures of the hospital layout to help patients find their way around the hospital, especially on the day of their surgery appointment and even regular visits. This is an approach to helping patients feel more in control. Moreso, the hospital should not feel like a maze to patients as this will only make already anxious patients even more anxious. </p>
                        <p className="text-base mb-4">The highlighted blue area shows the path to walk through, the flashing arrow uides users marking out walk path, turning directions, and doors/elevators to go through. </p>
                        <p className="text-base mb-4"><span className="font-bold">How it will work:</span> The indoor map is sent as a link or QR code embedded in appointment reminder messages sent a day before the patient’s appointment. </p>
                    
                        <h3 ref={tNotesRef} className="text-2xl font-bold text-blue-600 mt-4 mb-2">Testing: notes from testing with Sahar</h3>
                        <p className="text-sm mb-4">Sahar felt comfortable walking through the prototype. She particularly liked the terminologies section included in the doctor's notes. She thought it was a good way to help patients and doctors clarify meanings of terminologies and acronyms used during conversations. </p>
                        <p className="text-sm mb-4">The Medication calendar feature also stood out to her. It was easy for her to read and understand what each medication was. She mentioned that the use of plain language was helpful to her and reckons it will be helpful for people with language barriers so they can easily copy the words and get the verbatim translation in a translation tool. Also mentioned was the visual display and short description of what each medication looked like. Seeing that, she thought it would give her a thorough differentiation between all the medications she had to use. She nodded her head at intervals when she understood what was on each screen on the prototype. </p>

                        <p className="text-sm text-gray-600 mb-4"> “... there’s this aftercare summary piece that is missing. I want a summary; this is the aftercare summary I would love. I love this idea, but the one challenging piece is getting the medical professionals onboard to use it. But i think it’s too valuable for them to not buy into this because it is an incredibly valuable tool you are proposing. Especially the key terminology - I think that’s brilliant.” Sahar </p>

                        <h3 ref={learnedRef} className="text-2xl font-bold text-blue-600 mt-4 ">Reflection: what I learned</h3>
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt-2 mb-8 flex flex-col gap-4">
                            <li>From testing with Sahar, I learned that seeking out feedback early was immensely helpful in helping to decide if we were on the right path and more importantly if we were designing a meaningful experience for patients by addressing a concern.</li>
                            <li>In interviewing and iterating through prototypes, I learned that being  data driven is necessary in making creative decisions and producing a viable solution. Consequently, a designer should always be open to iterate through several prototype to get to the final deliverable</li>
                            <li>Interviewing patients that have used the existing solutions helped provide a better understanding of the barriers they have faced so far, what positives and negatives they have seen, and tools that they feel are missing or under-utilized.</li>
                        </ul>

                        {/* Builder */}
                        <h2 className="text-3xl mt-4">Define</h2>
                        <h3 className="text-xl font-bold mb-2">r</h3>
                        <h4 className="text-xl text-blue-600 mb-0">d</h4>
                        <p className="text-base mb-4">  </p>
                        <p className="text-base mb-4"><span className="font-bold"></span>  </p>
                        <p className="text-sm mb-4">  </p>

                        <img className="my-6 md:mr-[20%]" src="" alt="POVs" />
                        <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li></li>
                        </ul>

                    </section>
                </div>
            </div>

            
    
            
        </div>
    );
}

export default ProjectPage;
