import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"


function GroceristProjectPage() {
    const bgRef = useRef(null), problemRef = useRef(null), goalRef = useRef(null), dProcessRef = useRef(null),
     uInterviewRef = useRef(null), iStatementRef = useRef(null), hEvaluationRef = useRef(null), 
     pPlanningRef = useRef(null), povRef = useRef(null),
     hmwsRef = useRef(null), mvpRef = useRef(null), uFlowRef = useRef(null),
     lofiRef = useRef(null), fDesingRef = useRef(null);

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    };

    const[showSidebar, setShowSidebar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowSidebar(window.scrollY > 150)
        };
        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    });
    
    return (
        <div className="product-page relative">

            <aside id="default-sidebar" className={ `${showSidebar? "wipe-in-right block": "hidden"} project-sidebar  fixed top-14 left-0 z-20 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 pl-8`} aria-label="Sidebar">
                <div className="h-[92vh] px-3 py-4 overflow-y-auto text-left">
                    <ul className="space-y-0 text-left">
                        <li>
                            <div className="p-0 text-sm font-normal w-full text-left">
                                Introduction
                            </div>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(bgRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Background, Role & Duration</button></li>
                                <li><button onClick={() => { handleClick(problemRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Problem</button></li>
                                <li><button onClick={() => { handleClick(goalRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Goal</button></li>
                                <li><button onClick={() => { handleClick(dProcessRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Design Process</button></li>
                            </ul>
                        </li>

                        <li>
                            <div className="p-1 text-sm font-normal w-full text-left">
                                Empathise
                            </div>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(uInterviewRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">User Interviews</button></li>
                                <li><button onClick={() => { handleClick(iStatementRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Insight Statements</button></li>
                                <li><button onClick={() => { handleClick(hEvaluationRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Heuristic Evaluation</button></li>
                            </ul>
                        </li>

                        <li>
                            <div className="p-1 text-sm font-normal w-full text-left">
                                Define
                            </div>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(pPlanningRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Product Planing</button></li>
                                <li><button onClick={() => { handleClick(povRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">POVs: Problem Statement</button></li>
                            </ul>
                        </li>

                        <li>
                            <div className="p-1 text-sm font-normal w-full text-left">
                                Ideate 
                            </div>

                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(hmwsRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">HMWs</button></li>
                                {/* <li><button onClick={() => { handleClick(mvpRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">MVP Matrix: Feature Prioritisation</button></li> */}
                                <li><button onClick={() => { handleClick(uFlowRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Information Architecture: User Flows</button></li>
                            </ul>
                        </li>

                        <li>
                            <div className="p-1 text-sm font-normal w-full text-left">
                                Prototype and Testing
                            </div>
                            
                            <ul className="pl-2 text-gray-500 font-normal font-sm">
                                <li><button onClick={() => { handleClick(lofiRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">LoFi Prototyping</button></li>
                                <li><button onClick={() => { handleClick(fDesingRef) }} className="py-1 pl-4 pr-2 hover:text-gray-400 w-full text-left">Final Design</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className={`p-4 sm:ml-64 transition-all duration-300 ease-wipe-in-rt ${showSidebar? "md:pl-12 sm:ml-64 wipe-in-right": "sm:ml-0"}`}>
                <div className="md:p-4">
                    <section ref={ bgRef } className="intro px-2">
                        <div className="breadcrumb">
                            <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link to="/" className="inline-flex items-center text-xs font-medium text-[#717987] hover:text-deniblack">
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
                                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight ">Grocerist</h1>
                                <p className="text-base">Mobile Application</p>
                            </div>

                            <div className="w-full md:w-2/3">
                                <p className="p-0 text-bas">A grocery shopping list management application for easy planning and budgeting of grocery shopping. </p>
                            </div>
                        </div>

                        <div className="product-mockup w-full">
                            <img src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675732551/deni.design/r-planner/grocerist-landing-mockup_ka8ecq.png" alt="project mockup preview" />
                        </div>
                    </section>

                    <section className="overview flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12 md:pr-8">
                        <div className="w-full md:w-1/2 block">
                            <h4 className="text-sm font-medium text-[#FB8500] mb-2">BACKGROUND</h4>
                            <h3 className="text-2xl font-bold mb-2">Overview</h3>
                            <p className="text-base mb-4">Grocery shopping can be fun yet so tasking and sometimes, a hassle; with the numerous items people have to pick up from the grocer and a possibility of one forgetting to pick up some. Thereby making multiple trips back to the grocer.  </p>
                            <p className="text-base mb-8">How then can people adequately and effectively plan this part of the lives by being able to keep track of items needed for their grocery shopping.</p>
                        </div>
                        <div className="w-full md:w-1/2 block">
                            <h4 className="text-sm font-medium text-[#FB8500] mb-2">ROLE & DURATION</h4>
                            <h3 className="text-2xl font-bold mb-2">Role: Sole Product Designer</h3>
                            <p className="text-base mb-6">I was responsible for:  User interface design and Prototyping</p>

                            <h3 className="text-2xl font-bold mb-2">Team</h3>
                            <p className="text-base mb-6">Personal Project.</p>

                            <h3 className="text-2xl font-bold mb-2">Duration</h3>
                            <p className="text-base mb-6">
                                1 week
                            </p>
                        </div>
                    </section>

                    <section ref={ problemRef } className="story flex flex-col text-deniblack font-base px-2 md:px-8">
                        <h2 className="text-3xl mt-4">The Current Challenge</h2>

                        <p className="text-base mb-4">
                            Banking companies receive a large daily influx of inquiry call with a thousand more customers waiting in line to speak with a representative. There is no 24/7 customer support available to customers and if they were to employ human agents for this, would be a rather expensive cost for most banking companies. 
                        </p>

                        <p className="text-base mb-4">
                            On the other hand, most banking application interface are either overly complex or outdated in their designs. Customers often times have to go through a maze to find how to perform tasks on their banking applications.
                        </p>

                        <p className="text-lg text-[#FB8500] mb-4">There is a lack of a personalized customer experience for customers. </p>
                    </section>

                    <section ref={ goalRef } className="problem-callout px-6 py-8 md:px-12 md:py-10 bg-[#5E3200] text-[#ffffff]">
                        <p className="text-[#FB8500] font-bold text-xl mb-1 alt-font">The Solution</p>
                        <p className="text-white text-base mb-1">A grocery budgeting app that helps people easily and effectively make lists of items needed for their grocery shopping while being able to make budgets and manage these budgets for each grocery shopping list. </p>
                    </section>

                    <section className="story flex flex-col text-deniblack font-base py-4 px-2 md:px-8 overflow-x-hidden">
                        <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fv21jGlWBr5pt3DAwebdJcX%2FGrocerist%3Fpage-id%3D13%253A278%26node-id%3D101%253A12397%26viewport%3D449%252C369%252C1%26scaling%3Dscale-down%26starting-point-node-id%3D101%253A12397%26show-proto-sidebar%3D1" title="figma prototype" className="border border-solid border-[rgba(0,0,0,0.1)] mb-4" width="800" height="450" allowfullscreen></iframe>                    
                        {/* Design Process */}
                        <h2 ref={dProcessRef} className="text-3xl mt-4 alt-font">Design Process</h2>
                        <p className="text-base mb-4">We followed all 5 stages of the design thinking process working on this project. </p>
                        <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699663/deni.design/grocerist/grocerist-design-process_vmw94t.png" alt="design process" />
                        
                        <h2 ref={dProcessRef} className="text-3xl mt-4 mb-2">Definition</h2>
                        <div className="side-by-side content-center flex flex-col md:flex-row gap-6 md:gap-10 text-deniblack px-2 md:pl-12 md:pr-[20%] mt-8">
                            <div className="w-full md:w-1/2 block">
                                <h4 className="text-xl mb-0">User goals</h4>
                                <ul className="w-full space-y-1 list-disc list-inside pl-3 md:pl-4 mt4 md:mt-4 mb-8 flex flex-col gap-4">
                                    <li>Create and manage multiple lists.</li>
                                    <li>Share list with friends and family.</li>
                                    <li>Create and manage budget for each list.</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center"> 
                                <h4 className="text-xl mb-0">User tasks</h4>
                                <ul className="w-full space-y-1 list-disc list-inside pl-3 md:pl-4 mt4 md:mt-4 mb-8 flex flex-col gap-4">
                                    <li>Create new list and enter items name/scan barcode, quantity, price etc. to add item to list.</li>
                                    <li>Use spendings to get insight if she’s still within budget by seeing amount spent on shopping.</li>
                                    <li>Use share link to invite friends and family to shop together.</li>
                                </ul>
                            </div>
                        </div>


                        {/* Empathize */}
                        <h2 ref={uInterviewRef} className="text-3xl mt-4 mb-2">Empathy: Persona</h2>    
                        <p className="text-base mb-4">In this stage, I did some user research to learn from users and uncover insights from potential users about their current grocery shopping habits. Then, I took a deep dive into understanding the user  (Sara) by creating a persona and articulating her journey in order to fulfil the app requirements and hence help Sara get her desired outcome.</p>
                        <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699663/deni.design/grocerist/groce-persona-1_ed6xqc.png" alt="persona" />

                        <h2 className="text-3xl mt-4 mb-2">Storyboard</h2>    
                        <p className="text-base mb-4">Scenario: future user end-end experience using Grocerist</p>
                        <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699662/deni.design/grocerist/groce-User-Journey_rdluwo.png" alt="Storyboard" />

                        <h2 ref={iStatementRef} className="text-3xl mt-4 mb-2">Design Exploration</h2> 

                        <div className="side-by-side content-center flex flex-col md:flex-row gap-6 md:gap-10 text-deniblack px-2 mt-8 mb-8">
                            <div className="w-full md:w-2/3 block">
                                <p className="text-base mb-4">In brainstorming ideas, I did a litle exploration by carrying out a Competitive Analysis. This was to check if the product already exists in the market and If Yes, how are users currently using it? Also, to understand the strengths and weaknesses of the other applications. </p>
                                <p className="text-base mb-4">This informed my user flow by helping me make decisions based on the knowledge of what is currently working well for users, rather than based on guesses. </p>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col justify-center"> 
                                <img className="my-6 h-auto w-[70%]" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699662/deni.design/grocerist/expolration-LOGOS_ottuhi.png" alt="exploration logos" />   
                            </div>
                        </div>
                    </section>

 
                    <section ref={hEvaluationRef} className="comparison flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12 md:pr-8 mb-6">
                        <div className="w-full md:w-1/2 block">
                            <div className="score-card rounded border border-solid border-[#E9CFB1] px-6 py-8 h-full">
                                <h4 className="text-xl text-[#FB8500] mb-4">Out of Milk</h4>
                                <p className="text-base text-[#FB8500]">Strength</p>
                                <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 mb-8 flex flex-col gap-2">
                                    <li>Can scan item barcodes for better in-shop experience</li>
                                    <li>Ability to add price to list items</li>
                                    <li>Ability to share to family and friends</li>
                                    <li>Good for meal planning</li>
                                </ul>
                            
                                <p className="text-base text-[#FB8500]">Weaknesses</p>
                                <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 flex flex-col gap-2">
                                    <li>Not entirely focused on grocery list making</li>
                                    <li>Manual calculation of total items price</li>
                                    <li>Can get overly complicated for someone looking for a simple grocery list application</li>
                                    <li>Can not help with monthly shopping budgeting</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 block">
                            <div className="score-card rounded border border-solid border-[#E9CFB1] px-6 py-8 h-full">
                                <h4 className="text-xl text-[#FB8500] mb-4">Bring!</h4>
                                <p className="text-base text-[#FB8500]">Strength</p>
                                <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 mb-8 flex flex-col gap-2">
                                    <li>Can create multiple lists for different needs</li>
                                    <li>Ability to add item image</li>
                                    <li>Access to recipe for meal preparation</li>
                                    <li>Ability to share list with family and friends</li>
                                </ul>
                            
                                <p className="text-base text-[#FB8500]">Weaknesses</p>
                                <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 flex flex-col gap-2">
                                    <li>Cannot include item price</li>
                                    <li>Can get overly complicated for someone looking for a simple grocery list application</li>
                                    <li>Can not help with monthly shopping budgeting</li>
                                </ul>
                            </div>
                        </div>
                    </section>  

                     <section className="comparison flex flex-col md:flex-row gap-6 text-deniblack px-2 md:pl-12 md:pr-8">
                        <div className="w-full md:w-1/2 block">
                            <div className="score-card rounded border border-solid border-[#E9CFB1] px-6 py-8 h-full">
                                <h4 className="text-xl text-[#FB8500] mb-4">AnyList </h4>
                                <p className="text-base text-[#FB8500]">Strength</p>
                                <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 mb-8 flex flex-col gap-2">
                                    <li>Great UX with autocompete for search feature</li>
                                    <li>Automatic item categorization</li>
                                    <li>Good for meal planning <br /></li>
                                    
                                </ul>
                            
                                <p className="text-base text-[#FB8500]">Weaknesses</p>
                                <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 flex flex-col gap-2">
                                    <li>Not entirely focused on grocery list making</li>
                                    <li>Can only share list via email to family and friends</li>
                                    <li>Can get overly complicated for someone looking for a simple grocery list application</li>
                                    <li>Can not add item price</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 block">
                            <div className="score-card rounded border border-solid border-[#E9CFB1] px-6 py-8 h-full">
                                <h4 className="text-xl text-[#FB8500] mb-4">Our Groceries</h4>
                                <p className="text-base text-[#FB8500]">Strength</p>
                                <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 mb-8 flex flex-col gap-2">
                                    <li>Can scan item barcode while in store</li>
                                    <li>Automatic item categorization</li>
                                    <li>Good for meal planning</li>
                                    <li>Can create multiple list</li>
                                    <li>Realtime simultaneous edit by all invited to list</li>
                                </ul>
                            
                                <p className="text-base text-[#FB8500]">Weaknesses</p>
                                <ul className="w-full space-y-1 list-disc list-inside pl-2 md:pl-2 mt-4 flex flex-col gap-2">
                                    <li>Cannot include item price</li>
                                    <li>Can not help with monthly shopping budgeting</li>
                                </ul>
                            </div>
                        </div>
                    </section>                    

                    <section className="story flex flex-col text-deniblack font-base px-2 md:px-8 overflow-x-hidden">    
                        <h2 ref={pPlanningRef} className="text-3xl mt-4 mb-2">Ideation</h2>
                        <p className="text-base mb-4">Before brainstorming ideas, I started out with identifying 3 key components to help me  articulate Sara’s journey and get the optimum user flow.</p>
                        <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-4 flex flex-col gap-4">
                            <li><span className="font-bold">Who is the user?</span> <br />Sara, a shopper who wants to have a list to keep track of grocery items she needs to buy at the grocery store without going over her budget for these items.</li>
                            <li ref={pPlanningRef}><span className="font-bold">What is the user’s goal?</span> <br />I framed this using a <span className="text-[#FF8000]">Point of view</span> otherwise known as a <span className="text-[#FF8000]">Problem statement</span>.</li>
                        </ul>

                        <img ref={povRef} className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699662/deni.design/grocerist/groce-ideatee_d4ya1i.png" alt="ideation" />

                        <ul ref={hmwsRef} className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 mb-8 flex flex-col gap-4">
                            <li><span className="font-bold">What are the steps the user needs to take to achieve this goal?</span> <br />I framed a “How Might We” question to help me properly brainstorm ideas to create a task flow for the goal previously defined.</li>
                        </ul>

                        <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675701694/deni.design/grocerist/caalloutt_ntdwcm.png" alt="problem quote" />

                        

                        {/* User flow */}
                        <h2 ref={uFlowRef} className="text-3xl mt-4 mb-2">User flow</h2>
                        <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699665/deni.design/grocerist/task_flow_1_hulmbb.png" alt="user flow" />


                        <h3 className="text-xl font-bold mb-4">Assumptions</h3>
                        <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li>Sara is tech savvy</li>
                            <li>Sara has good internet connectivity. So she can access the app anytime </li>
                            <li>Sara knows the names of items she wants to shop for and her phone can scan the items</li>
                            <li>Sara’s family and friends are tech savvy</li>
                        </ul>


                        <h3 className="text-xl font-bold mb-4">Tradeoffs</h3>
                        <p className="text-base mb-4">In order to help sara focus on the task in achieving her goals, these trade-offs were made: </p>
                        <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li><span className="font-bold">Whoever Sara shares a list with does not need to login or create an account</span> <br />The main aim of Sara sharing a list is for the person to be able to view it, hence a priority at the time. This can be achieved without the person having an account with Grocerist. Without having Grocerist, the user can view the list at the minimum soon as a link is shared.</li>
                            <li><span className="font-bold">Push notifications</span> <br />Allowing Sara to receive push notifications when items on her list are due for buying based on supply level. However, due to time constraints, this wasn’t explored. And she can still achieve her goals nonetheless.</li>
                        </ul>

                        <h3 className="text-xl font-bold mb-4">Constraints</h3>
                        <p className="text-base mb-4">In order to help me have one linear direction for the user flow and focus on achieving the main goals, I worked with the following constraints. But these can be added for later updates. </p>
                        <ul className="w-full space-y-1 list-disc list-inside pl-6 md:pl-10 mt4 md:mt-8 mb-8 flex flex-col gap-4">
                            <li><span className="font-bold">Adding items in a roll </span>- because Sara’s main goal is to create a list of items as quickly as possible, I made this the apparent task. While leaving room for customization with the edit button.</li>
                            <li><span className="font-bold">There’s no ability to compare prices </span>- this can be gotten later from asking users what stores they shop from and comparing across these stores.</li>
                        </ul>


                        <h2 ref={lofiRef} className="text-3xl mt-4 mb-4">Prototype</h2>
                        <p className="text-base mb-4">LoFi Prototype</p>
                        <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699662/deni.design/grocerist/groce-lofi_u3sh87.png" alt="lofi protype" />



                        <h3 ref={fDesingRef} className="text-xl font-bold mb-4">Final Design</h3>
                        <div className="hifi flex flex-col md:flex-row gap-10 px-2 md:pl-8">
                            <div className="w-full md:w-1/3 block">
                                <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699661/deni.design/grocerist/iphone_front_dttqfa.png" alt="Hifi 1" />
                            </div>
                            <div className="w-full md:w-1/3 block">
                                <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699661/deni.design/grocerist/iphone_front-2_iqaeiw.png" alt="Hifi 2" />
                            </div>
                            <div className="w-full md:w-1/3 block">
                                <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699661/deni.design/grocerist/iphone_front-4_ai6djj.png" alt="Hifi 3" />
                            </div>
                        </div>

                        <div className="hifi flex flex-col md:flex-row gap-10 px-2 md:pl-8">
                            <div className="w-full md:w-1/3 block">
                                <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699662/deni.design/grocerist/iphone_front-1_szssnb.png" alt="Hifi 4" />
                            </div>
                            <div className="w-full md:w-1/3 block">
                                <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699661/deni.design/grocerist/iphone_front-3_rfog5p.png" alt="Hifi 5" />
                            </div>
                            <div className="w-full md:w-1/3 block">
                                <img className="my-6" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1675699663/deni.design/grocerist/iphone_front-5_msegxr.png" alt="Hifi 6" />
                            </div>
                        </div>

                    </section>

                    
                </div>
            </div>
        </div>
    );
}

export default GroceristProjectPage;
