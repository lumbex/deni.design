import React, { useState, useEffect } from 'react';
// import { useSpring, animated } from '@react-spring/web';

export default function LandingSection() {
  const [show, setShow] = useState(true);
  //
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="landing-collapsible">
          {/*<button className="toggler" onClick={()=> setShow(!show)}>Toggle this : $show</button>*/}
          <div className={!show? "landing-section-parent show" : "landing-section-parent"}>
              <div className="landing-section bg-gray text-center pb-[30vh] pt-[35vh] animate__animated animate__fadeIn">
                  <h1 className="mb-2 text-3xl font-semibold leading-none tracking-tight text-deniblack"> Deni Afonja</h1>
                  <p className="mb-2 text-lg font-normal text-deniblack">Product Designer</p>
                  <button onClick={()=> setShow(false)} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center focus:ring-4">
                  {/*<button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center focus:ring-4">*/}
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.0999 2.87495L10.6999 11.3C10.5999 11.4 10.4916 11.4706 10.3749 11.512C10.2582 11.554 10.1332 11.575 9.9999 11.575C9.86657 11.575 9.74157 11.554 9.6249 11.512C9.50824 11.4706 9.3999 11.4 9.2999 11.3L0.874902 2.87495C0.641569 2.64162 0.524902 2.34995 0.524902 1.99995C0.524902 1.64995 0.649902 1.34995 0.899902 1.09995C1.1499 0.849952 1.44157 0.724952 1.7749 0.724952C2.10824 0.724952 2.3999 0.849952 2.6499 1.09995L9.9999 8.44995L17.3499 1.09995C17.5832 0.866618 17.8706 0.749952 18.2119 0.749952C18.5539 0.749952 18.8499 0.874952 19.0999 1.12495C19.3499 1.37495 19.4749 1.66662 19.4749 1.99995C19.4749 2.33328 19.3499 2.62495 19.0999 2.87495Z" fill="#2F3135"/>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
  );
}
