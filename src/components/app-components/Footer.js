import  MessageIcon  from "./../../components/icons/MessageIcon";
import  LinkedinIcon  from "./../../components/icons/LinkedinIcon";

export default function AppFooter() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer bg-white text-deniblack text-center pt-[15vh]">
            <h4 className="mb-2 text-xl">Let's Connect :) </h4>
            <div className="mb-2 flex flex-row justify-center gap-4 text-center">
                <a href="https://www.linkedin.com/in/adenikeafonja/" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
                <a href="mailto:afonja.adenikeo@gmail.com"><MessageIcon /></a>
            </div>
            <p className="mb-6 text-base font-normal text-deniblack">Deni Afonja © {currentYear}</p>
        </footer>
    );
  };