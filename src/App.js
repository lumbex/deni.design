// import mountImage from "./assets/protfolio-image.jpg";
// import logo from "./assets/airbnb-brands.svg";
import { ReactComponent as ReactLogo } from "./assets/deni.design-logo.svg";

import { ReactComponent as PortfolioPicture } from "./assets/portfolio-picture.svg";
import { ReactComponent as ConversationalBankingMockup } from "./assets/conversational-banking-mockup.svg";

import  MessageIcon  from "./components/icons/MessageIcon.js";
import  LinkedinIcon  from "./components/icons/LinkedinIcon";



function App() {
    // const backgroundImageStyle = {
        // backgroundImage: `url("${mountainImage}")`,
        // backgroundSize: "cover"
    // }
    const currentYear = new Date().getFullYear()
  return (
    <div className="App">
        <header>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                    <ReactLogo className="fill-white"/>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">About</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Work</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Speaking</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Other works</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>


        <section className="landing-section bg-gray text-center pt-[30vh] h-[90vh]">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Deni Afonja </h1>
            <p className="mb-6 text-lg font-normal text-deniblack lg:text-xl sm:px-16 xl:px-48 ">Product Designer</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center focus:ring-4">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0999 2.87495L10.6999 11.3C10.5999 11.4 10.4916 11.4706 10.3749 11.512C10.2582 11.554 10.1332 11.575 9.9999 11.575C9.86657 11.575 9.74157 11.554 9.6249 11.512C9.50824 11.4706 9.3999 11.4 9.2999 11.3L0.874902 2.87495C0.641569 2.64162 0.524902 2.34995 0.524902 1.99995C0.524902 1.64995 0.649902 1.34995 0.899902 1.09995C1.1499 0.849952 1.44157 0.724952 1.7749 0.724952C2.10824 0.724952 2.3999 0.849952 2.6499 1.09995L9.9999 8.44995L17.3499 1.09995C17.5832 0.866618 17.8706 0.749952 18.2119 0.749952C18.5539 0.749952 18.8499 0.874952 19.0999 1.12495C19.3499 1.37495 19.4749 1.66662 19.4749 1.99995C19.4749 2.33328 19.3499 2.62495 19.0999 2.87495Z" fill="#2F3135"/>
                </svg>
            </a>

        </section>

        <section class="about-section bg-white">
            <div class="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-40 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <p class="max-w-2xl mb-4 font-light text-deniblack lg:mb-8 md:text-lg lg:text-xl text-base">Hello, I’m Deni</p>
                    <p class="max-w-2xl mb-4 font-bold text-deniblack lg:mb-8 md:text-xl lg:text-xl text-lg">A product designer creating meaningful experiences for end-users </p>
                    <p class="max-w-2xl mb-4 font-light text-deniblack lg:mb-8 lg:text-xl text-base">I am user-obsessed and aim to drive impacts through the products I ship by making data-driven design decisions.</p>
                    <p class="max-w-2xl mb-4 font-light text-deniblack lg:mb-8 lg:text-xl text-base">Over the last two years, I have worked in the Fintech space solving challenges for businesses and users to enable borderless payment, personalized banking experiences and access to insights on margins of FX trades.</p>
                    <p class="max-w-2xl mb-4 font-light text-deniblack lg:mb-8 lg:text-xl text-base">Occasionally, you can find me exploring the next country on my bucket list, reading the next fiction movie or creating lifestyle content on Youtube.</p> 
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <PortfolioPicture className="w-full h-auto" />
                </div>                
            </div>
        </section>

        <section className="portfolio-preview bg-[#0C0D10] px-[4%] md:px-[8%] lg:px-[12%] py-4 md:py-32">
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col px-8 pt-8 pb-0 rounded relative w-full bg-[#FAFAFA] text-deniblack justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Conversational Banking</h4>
                        <p className="text-base mb-4">Re-imagining the banking landscape through AI-powered conversational chatbot solution for personalized banking experience and process automation</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Shipped</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <ConversationalBankingMockup className="" />
                    </div>
                </div>

                <div className="flex flex-col px-8 pt-8 pb-0 rounded relative w-full bg-[#212324] text-white justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Bulk Payment Solution</h4>
                        <p className="text-base mb-4">An enterprise payment application for bulk payment processing and pos payments.</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Shipped</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <ConversationalBankingMockup className="" />
                    </div>
                </div>

                <div className="flex flex-col px-8 pt-8 pb-0 rounded-sm relative w-full bg-[#212324] text-white justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Grocerist</h4>
                        <p className="text-base mb-4">Grocery list management application for easy planning and budgeting of grocery shopping.</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Personal</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <ConversationalBankingMockup className="" />
                    </div>
                </div>

                <div className="flex flex-col px-8 pt-8 pb-0 rounded relative w-full bg-[#FAFAFA] text-deniblack justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Retirement Planner</h4>
                        <p className="text-base mb-4">Re-imagine a professional adult’s transition into retirement</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Design Thinking Project</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <ConversationalBankingMockup className="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-8 pt-8 pb-0 rounded justify-between w-full bg-[#FAFAFA] text-deniblack mt-12">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">My Health</h4>
                        <p className="text-base mb-4">Re-imagining the banking landscape through AI-powered conversational chatbot solution for personalized banking experience</p>
                        <div className="project-state flex flex-row items-center">
                            <span class="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span class="text-xs">Design Thinking Project</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse">
                        <ConversationalBankingMockup className="" />
                    </div>
                </div>
        </section>

        <footer className="footer bg-white text-deniblack text-center pt-[35vh]">
            <h4 className="mb-2 text-xl">Let's Connect :) </h4>
            <div className="mb-2 flex flex-row justify-center gap-4 text-center">
                <a href="#"><LinkedinIcon /></a>
                <a href="mailto:hello@spleet.cash"><MessageIcon /></a>
            </div>
            <p className="mb-6 text-base font-normal text-deniblack">Deni Afonja © {currentYear}</p>
        
        </footer>


    </div>
  );
}

export default App;
