import { useRef, useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { ReactComponent as ReactLogo } from "./../../assets/deni.design-logo.svg";



function RPlannerProjectPage() {
    const bgRef = useRef(null), problemRef = useRef(null), mySoluRef = useRef(null), dProcessRef = useRef(null), 
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
                                    {/* <li><button onClick={() => { handleClick(mySoluRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Solution</button></li> */}
                                    <li><button onClick={() => { handleClick(dProcessRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Process</button></li>
                                </ul>
                            </li>

                            <li>
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
                            </li>
                        </ul>
                    </div>
                </aside>

                <div className="p-4">
                    <section ref={ bgRef } className="intro w-full px-2 sm:px-2 sm:w-4/5 mx-auto my-0">
                        <div className="py-4 flex flex-col md:flex-row text-deniblack">
                            <div className="w-full md:w-1/3">
                                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight ">R-Planner</h1>
                                <p className="text-base">Mobile Application</p>
                            </div>

                            <div className="w-full md:w-2/3">
                                <p className="p-0 text-bas">A retirement planning application that helps retiring professionals transition better into retirement financially, mentally and socially. Helping them to be well-prepared for this new phase.</p>
                            </div>
                        </div>

                        <div className="product-mockup w-full">
                            <img src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675732550/deni.design/r-planner/r-planner-landing_pdf4w7.png" alt="project mockup preview" />
                        </div>

                    </section>
                    <div className="md:p-4 w-full px-2 sm:px-0 sm:w-3/5 mx-auto my-0">
                        <section className="overview flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12 md:pr-8 my-8">
                            <div className="w-full md:w-1/2 block">
                                <h4 className="text-lg text-blue-600 mb-2">BACKGROUND</h4>
                                <h3 className="text-2xl font-bold mb-2">Overview</h3>
                                <p className="text-base mb-4">
                                    Retirement can both be a thing of joy and despair depending on who’s experiencing it and how prepared people are for this new “phase”. In this design project, I had conversations with older adults who were thinking to retire and were already retired. With the conversations, I wanted to dig deeper into understanding their transition into the retirement phase, especially the early stages for those who are already retired. Also to understand what people who are looking to retire envision retirement would be like.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 block">
                                <h4 className="text-lg text-blue-600 mb-2">ROLE & DURATION</h4>
                                <h3 className="text-2xl font-bold mb-2">Role: Sole Product Designer</h3>
                                <p className="text-base mb-6">
                                    I was responsible for: Product direction, User Research, User interface design, Prototyping, and Testing.    
                                </p>

                                <h3 className="text-2xl font-bold mb-2">Team</h3>
                                <p className="text-base mb-6">
                                    I worked along side two other classmates who were from mechanical engineering to conduct interviews and document our research findings
                                </p>

                                <h3 className="text-2xl font-bold mb-2">Duration</h3>
                                <p className="text-base mb-6">
                                    2 weeks
                                </p>
                            </div>
                        </section>


                        <section ref={ problemRef } className="story flex flex-col text-deniblack font-base px-2 md:px-8">
                        
                            <h2 className="text-3xl mt-4 alt-font font-bold">Design Challenge</h2>
                            <p className="text-base mb-4">
                                Reimagine an older adult(a Professional)’s early stage experience while preparing to transition to retirement
                            </p>

                            <h2 className="text-3xl mt-4 alt-font font-bold">The Solution: <span className="font-normal">R-planner</span></h2>

                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675732550/deni.design/r-planner/the-Solution1_vkykml.png" alt="solution-1" />

                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675732550/deni.design/r-planner/the-Solution2_mepzq2.png" alt="solution-2" />


                            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJ4tNTCVYBTqAWSBDMMAJ7M%2FLugahbank%3Fpage-id%3D1%253A2%26node-id%3D2%253A107%26viewport%3D1697%252C337%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A107" title="figma prototype" className="border border-solid border-[rgba(0,0,0,0.1)] mb-4" width="800" height="450" allowfullscreen></iframe>


                        </section>


                        <section ref={mySoluRef} className="story flex flex-col text-deniblack font-base px-2 md:px-8 overflow-x-hidden">
                            {/* Design Process */}
                            <h2 ref={dProcessRef} className="text-3xl mt-4 alt-font font-bold">Design Process</h2>
                            <p className="text-base mb-4">We followed all 5 stages of the design thinking process working on this project. </p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724806/deni.design/r-planner/r-p-design-process_eauac2.png" alt="design process" />


                            {/* Empathize */}
                            <h2 className="text-3xl mt-4 alt-font font-bold">Empathize</h2>

                            <h3 ref={uInterviewRef} className="text-xl font-semibold mb-2">User Interviews: remote interviews</h3>
                            <p className="text-base mb-8">I sort out to get an in-depth understanding of what retirement looks like for people. I spoke to a total of 3 users. 2 retired adults at different stages of retirement and 1 adult who was planning to retire soon. </p>

                            <h4 className="text-xl text-deniblack mb-2 font-bold">Interview transcripts and stories from all 3 user interviews</h4>
                            
                            <h4 className="text-lg text-blue-600 font-semibold my-4">Interviewee 1: Dr Akintide</h4>    
                            
                            <ol class="w-full space-y-1 list-decimal list-inside pl-2 mb-2 flex flex-col gap-2">
                                <li>Tell me a little about your background and work history.
                                    <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                        <li>I was a recipient of the British Canadian Legion which allowed me to go to University to study in Nigeria. After school, I became a teacher and worked in Public Service for 25 years before I decided to leave Nigeria. I moved  to the US and got a job at the United Nations and CAFRAB; an institution under the UN representing Nigeria on the board in Morocco for 3 years. From there, I worked in New York State for 17 years which was where I retired from. I travelled the world quite a little bit. <span className="text-blue-600">“So when I was preparing for retirement, I was preparing for a life that would enable me to travel all over the world like I used to and that’s what I’m doing”</span>. After putting in 17 years, in addition to the 25 years I had served in Nigeria, I was getting tired and could feel that age was taking its toll on me. “I could feel I was getting old and didn’t want to die on the job”. I just wanted to give myself a break and retire and give myself a good life.</li>                                
                                    </ol>
                                </li>
                                <li>What was you definition of a good life at the time? Did you already have a picture of the life you wanted? How did you envision retirement?
                                    <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                        <li>I was lucky when I was working. I was always given nice postings. The kind of postings that I had, has enabled me to travel all over the world. So because my job came with exploring my interest in travelling, it made things easier for me. Also, I had financial leverage that helped me plan to afford the retirement life I wanted. Exactly what I wanted to be doing is what I got. After retirement, I went to Monaco and there are a few places around the world I haven’t been to. <span className="text-blue-600">”So that is the kind of life I wanted and I was able to plan towards it early on”</span>. Also, before retirement, I was able to save some money diligently that I could draw from to achieve what I wanted going into retirement.</li>
                                    </ol>
                                </li>
                                <li>After you left the job you had been in for 17 years, how did you feel?
                                    <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                        <li>There were moments when I felt idle and would have been lost if not for some of the decisions I made early on. While I was working with the UN, I decided to go back to the university even though I already had a Ph.D. But I did it to maintain my pride and ego as a person. <span className="text-blue-600">”I took the degree to have something to fall back on later on after I retired”</span>. I attended the university part-time because I had a full-time job. <span className="text-blue-600">”As I was planning to retire from my daytime job, I knew I had an opportunity as a licensed therapist to be able to do some work on the side as a licensed therapist”</span></li>                                
                                    </ol>
                                </li>
                                <li>What were some of the things of concern for you as you were approaching retirement?
                                    <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                        <li><span className="text-blue-600">”When you are planning to retire, a lot of things cross your mind. One of my fears was my health”</span>. For example, I didn’t have blood pressure before but after retirement, my primary Physician found out that my blood pressure was heightened and they put me on medication for that. I don’t know why and after some time again, I had another health challenge. I had terrible back pain and I had to do surgery; a very intrusive back surgery.</li>                                
                                        <li>I am lucky it didn’t affect me mentally. I am still mentally alert and maybe I am mentally alert because I have things, I write. I love to write and I am still writing. <span className="text-blue-600">”I enjoy writing, that’s what keeps me going and has helped me manage the retirement phase. If I don’t have something to do with my life, I will die very quickly”</span>. </li>
                                    </ol>
                                </li>
                                <li>Can you talk a little more about your last statement and why that is important for you? Having something to do with your life?
                                    <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                        <li>Yes, If I don’t have something that I am addressing myself to at any given time, I don’t think I will last. So, I have something to look forward to or do, that’s what keeps me going. Retirement is like leaving certainty for uncertainty. So one might feel a loss of self or identity. Because you don’t know what will happen. I went through that phase myself.</li>
                                        <li>It is important to me because it is a way to exercise my heart and my brain. Because I know that if you don’t stimulate your brain, it will die. My friends wonder how I manage to still write but I tell them I never stop. It is very important for me to be engaged. To have something doing. If I don’t have something to do or planned out, I’m going to be sick.</li>
                                        <li><span className="text-blue-600">”It has become part of my routine and I do not want to break that routine”</span>. The day I break that routine, death is not too far away from me at that point.</li>
                                    </ol>
                                </li>
                                <li>What was that phase like for you?
                                    <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                        <li>It was difficult for me. <span className="text-blue-600">”Mental sanity is necessary and people need a way to maintain that as they go into retirement”</span>. Retirement is not something people should go into without planning. There’s a preparation phase. The preparation for retirement is really important and people need to not just be financially prepared for it but also mentally prepared. You have to find out your financial preparedness and also what you want to use all the time you have to do. Else, idle time might take a toll on your mental sanity and sometimes even, your health. <span className="text-blue-600">”All these idea of developing Blood pressure is all because of all the difficulty we put on ourselves that we have not planned very well”</span>. But I went into it with a leap of faith and belief that my health will hold up. I also had a goal to explore travelling as an interest.</li>                                
                                        <li>For me, my time is fully engaged and I have something to look forward to. Only because I started writing.</li>
                                    </ol>
                                </li>
                                <li>What would have made your transition into retirement better?
                                    <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                        <li>I think I was a little lucky because I am a planner. But I have friends who struggled in the early stages due to a lack of knowledge and adequate planning. There was no way to physically visualize what life going into retirement would be like, but I was taking mental notes and ideas of what I would like to do. Maybe If I had adequately documented these mental notes, the initial difficult phase would have been more bearable. But I went into it with a leap of faith like I said and battled it out till I eventually figured out what my plans for this new life.</li>                                
                                    </ol>
                                </li>
                            </ol>  

                            <div className={`prototype-link flex-row justify-center my-6 ${viewMore? "hidden" : "flex"}`}>
                                <button onClick={toggleViewMore} class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-30 font-medium rounded-lg text-xs px-5 py-2.5 text-center">
                                    View More Transcripts
                                </button>
                            </div>

                            <div className={`block h-fit transition-all duration-300 ease-wipe-in-rt ${viewMore? "block" : "hidden"}`}>
                                <h4 className="text-lg text-blue-600 font-semibold my-4">Interviewee 2: Philip Usman</h4>    
                                <ol class="w-full space-y-1 list-decimal list-inside pl-2 mb-2 flex flex-col gap-2">
                                    <li>Tell me a little about your background and work history. 
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>I read journalism and got a job with punch soon after graduation. Worked there for a year, quit and became a Canadian resident. I knew I didn’t want to work for someone else. I wanted to do my own business. So from Humber college, I started selling cars to my classmates. That grew into me having to open my own office and that’s how I started a company called Philmen Enterprises in Toronto. I had employees and people working for me. It was a good business.</li>
                                        </ol>
                                    </li>
                                    <li>Tell me about your journey into retirement when you started thinking about retirement
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>For one, at the beginning when I started, I kind of knew what I wanted to do and how long I wanted to be in business for or anything. I love life. I wanna work and at the same time, I want to enjoy the fruits of that labour. So I knew I wanted to do whatever it took to be successful and I knew I wanted to retire at some point. And thankfully, after a long long while, I was able to go into retirement.</li>
                                        </ol>
                                    </li>
                                    <li>How did you feel retiring so early at 40 and what plans did you make towards that, if any?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>For me, I set a goal. My goal was to retire at 40. Even when I was in my 20s, I knew I wanted to retire at 40. Anything past 40, I probably would not have loved it. I love the saying, quit while you are still on top. So, knowing that 40 was looming, I decided to put some things in place. And one of those things was to return to my home country and try to give back. Started a little business there. It was more about giving back. I also thought about what else could I do to sustain myself here in retirement. “<span className="text-blue-600">When you are retired, you don’t want to be retired and not be able to sustain it and then run back to work</span>”. I was fortunate to have been knowledgeable and able to plan ahead because that’s what most people don’t have. They go into retirement and have to worry, about where their next meal is going to come from.</li>
                                        </ol>
                                    </li>
                                    <li>How did you feel about leaving your job once you knew you were retiring?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>There was a lot of attachment like anything. When you have a business and love what you do, the business becomes family. And it’s a question of what am I going to do once I shut it down. It’s going to affect my customers. Some of them trusted me so much that they thought, there must be a way to keep the business going. So before retirement, I tried a little bit to step aside a little and have some of the people I trained to do the business in my stead. But at times, it didn’t feel 100% like the way I would have done it. So at the time, it felt like there was no way I could go into retirement and still keep the business going. <span className="text-blue-600">It was hard but I was ready to make the transition, I had to do what I had to do.</span></li>
                                        </ol>
                                    </li>
                                    <li>How was the transition for you, especially the early stages? How were you feeling at the time?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>Like I said before making the decision in itself, was hard. But the thought of what I would be doing, I had somehow thought about it but honestly, for a little while, I was idle. I was like, what the heck did I just do? <span className="text-blue-600">I had some regrets. But then again, I knew I had to find a way to keep myself busy. I love to see places, I enjoy having things to look forward to. And that’s what I decided to do to channel the idleness.</span></li>
                                        </ol>
                                    </li>
                                    <li>What did you think contributed to the early stage of idleness?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>Because business was all I had done for so long, I didn’t know anything else. So the new reality was strange to me initially. Many times, I would be by myself or I had to wait for them to finish work just so we could all hang out. Other times, I would call them and they would be like, oh, I’m busy. But I understood because I was once like that. I was so passionate about what I was doing. So I respected that they were now putting in their own time. But like they say, <span className="text-blue-600">it’s lonely at the top.</span></li>
                                        </ol>
                                    </li>
                                </ol>

                                <h4 className="text-lg text-blue-600 font-semibold my-4">Interviewee 3: Eng. Jay</h4>    
                                <ol class="w-full space-y-1 list-decimal list-inside pl-2 mb-2 flex flex-col gap-2">
                                    <li>What comes to mind when you hear the word retirement?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li><span className="text-blue-600">The first thing that comes to mind is FEAR</span>. Fear in terms of preparation. I think I was lucky. I lived with my uncle and one day, my uncle and his friend, they were both executive directors. They had just retired and were talking, saying “Now that we have retired we can’t be looking for contracts like before and the finances have changed”. This made me wonder if they had not set aside things to keep themselves together. That was a warning for me, so I kept that. So in the course of my career, I was really focused on tangible assets but that was due to my background training. Some people get lucky working with well-established organizations and do not need to put their finances in order because their gratuity covers that. But not too many people are that lucky. There are a lot of people who struggle to adjust to retirement due to the financial capacity to keep up. This is why some people change their age just to keep working, which leads people to do all sorts. <span className="text-blue-600">The fear is when I leave this job, how do I survive?</span></li>
                                        </ol>
                                    </li>
                                    <li>Why do you think people are more focused on the financial aspect of retirement transition?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>So some people think differently and retire for different reasons. Some are forced to retire, some retire for health reasons, and others because they are bored or feel financially confident about their life after retirement. Some are lucky and have good retirement packages but people who still have young kids feel the burden more to keep working and having an income coming in to sustain the family.</li>
                                        </ol>
                                    </li>
                                    <li>Have you given thought to the mental aspect of retirement?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>Yes, which is one of the reasons I have reconsidered my retirement plans severally. Because, the question is, what will I be doing? What will my life be like? <span className="text-blue-600">We have more people who want to keep working after retirement than just stay idle</span>. Because also, staying idle you die early. There’s no movement from morning till night. And of course, as you grow older, there might be some other medical conditions because your mind or body is not actively engaged. My friend who is retired, called me the other day and was complaining of how idle he has become and has been looking for a new outlet to have something that gets him to go out there or engage his time. <span className="text-blue-600">Except for those who do not know what to do, or have ideas or someone to help them plan, everyone wants to keep busy even after retirement.</span></li>
                                        </ol>
                                    </li>
                                    <li>In preparing for retirement partly, what are some measures you put in place?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>Structuring the job as much as I can, making people responsible for some actions and aligning what people need to do is better. As much as possible, taking the pressure off. But for me to go sit down somewhere, that is almost impossible.</li>
                                        </ol>
                                    </li>
                                    <li>How or why do you think health deteriorates in retirement?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li><span className="text-blue-600">Whatever you keep stationary rotten</span>. It’s left for us to know our limits but even if you have all the money you need around you, you stay at home, it is worse. Just get busy, and meet people. Anything to keep you engaged but not overstretch yourself.</li>
                                        </ol>
                                    </li>
                                    <li>What do you think about the transition to retirement?
                                        <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                            <li>I think that area is very very critical here. It is a complete change of lifestyle. You get busy and suddenly you are just staying at home. Some people end up having to support chores because they are not doing anything and their partners feel they have to contribute something at home one way or the other. So transiting is very critical. Some companies know that you are retiring in 5 years time, try to bring some skills to you or ask what your next steps are. But still, if they are not well-grounded or have a picture of what this means, they lose it while trying to adjust to this new lifestyle. Because when you are working, in a structured environment especially, you are pampered. There are some risks you are not exposed to. But the moment you retire, you are exposed to every risk. </li>
                                            <li><span className="text-blue-600">The question is: how are people prepared to handle retirement? And it varies from person to person, from gender to gender.</span></li>
                                            <li>For instance, if a man was contributing a certain amount before retirement but after retirement, he is only able to drop a lesser amount and might even be consistent. All of these form part of transiting which is more about planning here. <span className="text-blue-600">If he doesn’t transit well, he’s going to crash.</span></li>
                                        </ol>
                                    </li>
                                </ol>

                                <div className="prototype-link flex flex-row justify-center my-6">
                                    <button onClick={toggleViewMore} class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-30 font-medium rounded-lg text-xs px-5 py-2.5 text-center">
                                        View Less Transcripts
                                    </button>
                                </div>
                            </div>

                            <h4 className="text-lg text-blue-600 font-semibold mb-2 mt-4">Key takeaways from interviews</h4>    
                            <ul ref={hEvaluationRef} class="w-full space-y-1 list-disc list-inside pl-2 flex flex-col gap-2 mb-4">
                                <li>After speaking to all of these users, it was clear that retirement meant different things to different people. Most people mostly dread going into retirement for the lack of financial preparedness. </li>
                                <li>80% of people say they would rather plan for retirement from day 1 of working. Also, a lot of people do not realize the mental preparedness needed to transition effectively into retirement thereby causing a loss of identity for them when in retirement and some even finding the need to fill their idle time with more meaningful activity. </li>
                                <li>Others wanted to transition into retirement feeling accomplished but they spent so long dedicating their time to their jobs they don’t have a tangible memory to look back on that gives them this sense of accomplishment with the work they’ve done s far.</li>
                            </ul>

                            <h3 ref={eMapsRef} className="text-xl font-bold mb-2">Empathy Maps</h3>
                            <p className="text-base mb-4">After the user interviews, I compiled the information and insights discovered, and organized them using Empathy maps for each user. </p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724808/deni.design/r-planner/Empathy_Map_-_A_w3y8sj.png" alt="akitite" />
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724807/deni.design/r-planner/Empathy_Map_-_b_xnwxuc.png" alt="jay" />
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724807/deni.design/r-planner/Empathy_Map_-_c_stftkk.png" alt="philip" />

                            <h2 ref={personaRef} className="text-3xl mt-2 alt-font font-bold">Define</h2>
                            <p className="text-base mb-4">Created a persona to put more perspective into the type of user I was solving this challenge for and to understand more about the user's challenges. After this, I framed the user scenarios in form of a problem statement to better understand their challenges from their point of view.</p>
                            <h3 className="text-xl font-semibold mb-2">Persona</h3>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724805/deni.design/r-planner/Persona_-_mainstream_h9b7xo.png" alt="POVs" />

                            <h3 ref={sBoardRef} className="text-xl font-semibold mb-2">Storyboard</h3>
                            <p className="text-base mb-4">I created a storyboard to visualize the user’s current scenario before going on to ideate on possible solutions</p>
                            <h4 className="text-xl text-blue-600 mb-0">Current User Scenario</h4>

                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724806/deni.design/r-planner/Storyboard__current_1_ioso1h.png" alt="POVs" />

                            <h4 ref={povRef} className="text-xl font-semibold mb-0">Problem statement</h4>
                            <p className="text-base mb-4"> Using the storyboard and insights gathered from the user interviews, I created actionable problem statements based on a deeper understanding of the user needs and insights learnt about them. </p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724805/deni.design/r-planner/POVss_1_gon72q.png" alt="POVs" />

                            <h2 ref={hmwsRef} className="text-3xl mt-4 alt-font font-bold">Ideate</h2>
                            <p className="text-base mb-4"> To better help me brainstorm ideas, I framed the user challenges using the HMW questions and branched out ideas that could answer these questions. </p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724804/deni.design/r-planner/hmw_dzqkpr.png" alt="ideate" />

                            <h2 ref={bStormingRef} className="text-3xl mt-4 alt-font font-bold">Brainstorming Ideas</h2>
                            <p className="text-base mb-4">To help me brainstorm ideas, I categorized the areas of concern of the users I interviewed as it relates to transitioning into the retirement phase. </p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724805/deni.design/r-planner/Dark_Green_Simple_Company_Business_Idea_Mindmap_1_u89n32.png" alt="brainstorming ideas" />


                            <h4 ref={ideaRef} className="text-xl font-bold mb-0">Ideas</h4>
                            <p className="text-base mb-4">Then I came up with ideas that could address some of these concerns. </p>

                            <ol class="w-full space-y-1 list-decimal list-inside pl-2 mb-6 flex flex-col gap-2">
                                <li><span className="text-blue-600">Origami Retirement Advent Calendar Box</span>
                                    <p className="text-base mb-4">This serves to give retirees something to look forward to each calendar day based on the number of days included in the box. Can be used as a way to challenge retirees to find new purpose with daily mini challenges to do to explore their interests. Works as a DIY before retirement or a souvenir/gift given to retiring adults. </p>
                                    <img className="my-4" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724804/deni.design/r-planner/Origami_1_wfijbq.png" alt="ongami" />
                                </li>
                                <li><span className="text-blue-600">Retirement Scenario Analysis (Tool):</span>
                                    <p className="text-base mb-1">A self-assessment tool that can help people decide and know if they are financially prepared for retirement while taking into consideration different scenarios including uncertainties. The user answers some questions and the tool uses that to simulate several scenarios to give an answer to the question: </p>
                                    <p className="text-base mb-2"><span className="text-blue-600">How financially secured or prepared am I today, if I decide to retire now? </span></p>
                                    <img className="my-4" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724803/deni.design/r-planner/Analysis_tool_1_blhp4q.png" alt="safe" />
                                </li>
                                <li><span className="text-blue-600">Retirement Persona</span>
                                    <p className="text-base mb-2"><span className="text-blue-600">Meet Nino</span>: Nino is a personalized social robot that can help users discover what a day in their life as retired persons would be like. Users answer a series of questions and at the end, Nino presents them with a Persona of what their retirement life might look like. Nino also has the extended capability to offer nutritional and health tips as well as companionship - being able to form and hold conversations with its users to keep them engaged and active by asking Nino day-day questions and planning out their days.</p>
                                    <img className="my-4" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724805/deni.design/r-planner/Retrirement_persona_-_Nino_1_aytz2g.png" alt="roborts" />
                                </li>
                                <li><span className="text-blue-600">Mentor-Skill Sharing App/Platform</span>
                                    <p className="text-base mb-1">A platform where retiring employees who are subject matter experts can mentor and share their experiences with young employees of the company. That way, the retiring employees still feel connected to their profession and are able to still have their sense of identity by having this side opportunity.</p>
                                    <p className="text-base mb-1">This is also an opportunity to give back or create new outlets for themselves to explore mentorship as a side career and stay relevant with their experiences through knowledge sharing</p>
                                </li>
                                <li><span className="text-blue-600">Retirement Planner App</span>
                                    <p className="text-base mb-1">Imagine an App that users looking to retire soon can use to plan what to do in retirement. It provides a form of vision board for them to envision what retirement might look like for them before retirement. Users can select categories of what areas of their lives they will like to visualize and set goals for. </p>
                                    <p className="text-base mb-1">It also includes a <span className="text-blue-600">financial planner accountability tool called Pots</span>. Users can use this feature to plan and save towards a financial goal while using the application as an accountability tool to see their savings progress at a glance. </p>
                                    <p className="text-base mb-1">The app will also have a <span className="text-blue-600">social engagement feature called Buddy</span>: Buddy is a tie system that the application uses to match users on the app to other retired users on the app. Each user has the decision to make whether to get “introduced” to other retired users on the app or not. “Intros” are done weekly and you can choose to opt-in for intros every week or only weeks you are interested in.</p>
                                </li>
                                <li><span className="text-blue-600">Employee Retirement Counselling Session and Workshop</span>
                                    <p className="text-base mb-4">This is an approach that companies can adopt to help employees prepare for retirement and make the transition easy so they are mentally prepared for this new phase.  </p>
                                </li>
                            </ol>


                            <h2 ref={rExperienceRef} className="text-3xl mt-2 alt-font font-bold">Prototyping</h2>
                            <p className="text-base mb-4">Based on the insights uncovered from all the users I interviewed, I decided to prototype solutions 4 and 5 to validate the idea and test with the users. </p>

                            <h2 className="text-xl mt-4 font-semibold">Storyboard</h2>

                            <h3 className="text-xl mb-2 text-blue-600">Reimagined Experience: </h3>
                            <p className="text-base mb-2">Extreme user case: the future experience of a professional going into retirement</p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724803/deni.design/r-planner/Storyboard__NEW_znqtvg.png" alt="storyboard" />


                            <h3 className="text-2xl mb-2 alt-font font-bold">Solutions: selected ideas</h3>
                            <h4 className="text-lg text-blue-600 mb-1 font-semibold">1. Mentor-Skill Sharing App/Platform:</h4>
                            <p className="text-base mb-2">Explored this design solution as an option based on insights discovered during interviews with all users.</p>

                            <p className="text-base mb-1">Insight:</p>
                            <p className="text-xs mb-2">Professionals after working for so long develop a form of attachment to their job as it gives them some form of gratification. Consequently, it’s harder for them to retire and often look for new outlets of finding another gratification by having an “encore job” </p>


                            <h4 className="text-lg font-semibold mb-2">Solution exploration: <span className="text-blue-600">Circle</span></h4>
                            <p className="text-base mb-2">Circle gives professionals who are subject matter experts a way to stay relevant and feel like they are still making contributions to their jobs while also using this as an opportunity to give back or create new outlets for themselves to explore mentorship as a side career and stay relevant with their experiences through knowledge sharing</p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724805/deni.design/r-planner/Circle_1_xnfyy2.png" alt="circle screens" />
                            
                            <p className="text-base mb-4"><span className="font-semibold text-base">How It Works</span>: Professionals download the app or it can be integrated into their previous company’s communication platform. Retired professionals are matched with young employees in the company in their line of work, based on calendar availability. Once a retired professional confirm his availability, a link is shared and the meeting is added to both parties’ calendar for a reminder on the set day of the meeting.</p>


                            <h4 className="text-lg text-blue-600 mb-1 font-semibold">2. Retirement Planner</h4>
                            <p className="text-base mb-2">Explored this design solution as an option based on insights discovered during interviews with all users.</p>

                            <p className="text-base mb-1 mt-4">Insight:</p>
                            <p className="text-xs mb-2">People love to be in control. They primarily feel anxious about retirement because it is leaving certainty for uncertainty. But they are less anxious about retirement when they have an idea of what to expect and are well-prepared for the new phase.</p>


                            <h4 ref={solutionRef} className="text-lg font-semibold mt-8 mb-2">Solution exploration: <span className="text-blue-600">Buddy</span></h4>
                            <p className="text-base mb-2">Buddy is a retired professional’s companion. It’s a retired professional's first step in getting prepared to make the transition to retirement. It puts more visuals into the user’s retirement perspective, helps the user envision what their main retirement goals would be like, draw up a savings plan for accountability financially and also “introduces” users to other retired users on the platform to keep them socially engaged and open to new connections. </p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724802/deni.design/r-planner/Buddy_1_frlbtj.png" alt="mood log" />
                            

                            <h3 className="text-xl font-bold text-blue-600 mb-2">Features</h3>
                            <p className="text-base mb-2"><span className="font-bold">Home Page</span>: Users can log their daily moods each day of the week by tapping on each emoji as it applies to how they are feeling on a certain day. Basically helps them mentally to acknowledge their emotions, especially during the initial phase of retirement.</p>
                            <p className="text-base mb-2"><span className="font-bold">Buddy</span>: retired people love to talk about their past experiences and past stories. Why not share that with fellow retirees? Users can participate in weekly “intros” during which they get introduced to a particular retired user and have access to explore communication with a user they are matched with over the course of the week. The conversation occurs outside the app and can be explored further in real life.</p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724802/deni.design/r-planner/Buddy_2_oo5dnw.png" alt="pots" />
                            
                            <p className="text-base mb-2"><span className="font-bold">Pots</span>: Finances are some of the constraints when it comes to going into retirement. Although, most people depend on their pension only for some to find out they should have had other savings plans going into retirement to afford certain lifestyles. Hence, Pots. Pots can be used by users to create yearly financial retirement side savings plans and be accountable as they contribute to their virtual pots by ticking off days in which they save on the app.</p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724802/deni.design/r-planner/Buddy_3_g80t3s.png" alt="vision board" />
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724802/deni.design/r-planner/Buddy_4_z7kk72.png" alt="family" />
                            <p className="text-base mb-2"><span className="font-bold">Vision Board</span>: What would it be like if adults making the transition into retirement could visualize what their retirement goals might be and plan accordingly? Users get to select targeted areas of their lives they will like to focus on during retirement and a visual representation of what that might look like is formed for them to put visual perspective into this new phase.</p>

                            <h3 ref={feedbackRef} className="text-2xl mb-2 alt-font font-bold">Feedback</h3>
                            <p className="text-base mb-1"><span className="text-blue-600">Dr Akintide</span> </p>
                            <p className="text-base mb-2">I feel excited about using a tool like this. “I really like the vision board. It’s interesting that I can envision the kind of retirement life I want. Sort of a manifestation thing. I can somewhat catch a glimpse of what my life in retirement would be like while having something to look forward to. This was something missing in our days”</p>
                            
                            <p className="text-base mb-1"><span className="text-blue-600">Mr Philips</span> </p>
                            <p className="text-base mb-2">“The most exciting feature to me is that I get to meet someone new every week and have that to look forward to. You know when you are old and retired, you are more open and not closed off to meeting other people like you”</p>
                            
                            <p className="text-base mb-1"><span className="text-blue-600">Mr Jay</span> </p>
                            <p className="text-base mb-2">“As I said before, retirement planning should start from day 1. I like the idea that companies can adopt this because personally, as a career-focused person, I believe companies should help their retiring employees prepare for retirement as early as 5 years prior. While also ensuring they have smooth handover for people who will be taking over from them”.
    I like that the platform is also a way to help professionals give back and share their experiences to train younger people.</p>

                            <h3 className="text-2xl mt-8 mb-2 alt-font font-bold">Design Iteration</h3>
                            <p className="text-base mb-2">After testing with Mr. Philip, Mr. Jay and Dr. Akintide, here were some of the new ideas and questions raised.</p>

                            <ol class="w-full space-y-1 list-[lower-alpha] list-inside pl-4 flex flex-col gap-1 mt-1">
                                <li><span className="text-blue-600">Ability to download the vision board</span>: Dr. Akintide said he would love to have this pasted somewhere in his bedroom as a way to envision the life he wants going into retirement.</li>
                                <li><span className="text-blue-600">Ability to see the emoji log as a weekly calendar view</span>: Mr. Philips thought it would be nice to sort of see how his emotions progress in a week, especially at the initial phase of his retirement. Also, to explore adding more “life” to the emojis</li>
                                <li><span className="text-blue-600">Ability to set goals for each category listed on the vision board</span>: Mr. Philips asked if he would be able to set actionable goals for each category in his vision board for better planning and realization of the board.</li>
                            </ol>

                            <h4 ref={dIterationRef} className="text-xl mb-0">Design iterations of the above screens</h4>
                            <p className="text-base text-blue-600 mb-1">Redesigned Vision Board Screens</p>
                            <p className="text-base mb-1">Added the ability to download and set goals for each category listed on the vision board</p>
                        
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724802/deni.design/r-planner/Design_iteration_zi6esx.png" alt="vison board" />

                            <p className="text-base text-blue-600 mb-1">Redesigned Emoji Log on Home Screen</p>
                            <p className="text-base mb-1">Ability to see emoji log as weekly calendar view and improved visual presentation</p>
                            <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675724801/deni.design/r-planner/emoji_app_screen_yrhaqf.png" alt="buddy request" />

                            

                            <h3 ref={reflectionRef} className="text-2xl text-blue-600 mb-0 alt-font font-bold">Reflection</h3>
                            <ul class="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-2 mb-8 flex flex-col gap-4">
                                <li>The project helped me to learn more about the process of a design thinking framework. Also learned how to empathize with users in a better way and listen for stories that could lead to gems or key insights I didn’t know before.</li>
                                <li>Testing my designs, I learned that seeking out feedback early helped me design more meaningful solutions. I was able to take feedback and use that to iterate on the designs based on feedback the users provided.</li>
                                <li>Overall, I learnt that while my ideas might not necessarily solve the entire aspects of the challenge, striving to make at least one part of the experience better in some ways, is always a good strategy</li>
                            </ul>  

                        </section>

                        <hr className="mt-16 " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RPlannerProjectPage;
