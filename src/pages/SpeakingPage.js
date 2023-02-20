


function HomePage() {


  return (
    <div className="speaking-page px-8 md:px-[8%] py-12 mx-auto lg:py-30">
        <img className="mb-4 w-[40px] h-auto" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1676848156/deni.design/hello_drmkxg.png" alt="hi emoji" />
        <h1 className="text-3xl text-deniblack text-left mb-10 md:mb-16">
            Here are some of the design topics i’ve had the <br />
            opportunity to speak about at design bootcamps
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 text-base text-deniblack">
            <div class="bg-gray-100 p-4 w-full shadow-lg shadow-gray-500/50 rounded">
                <img className="w-full mb-4" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1676850715/deni.design/speaking-1_jnzfpn.png" alt="speeaking 1 img" />
                <p className="mb-12">In this session, I delivered a talk on how to design your products for mobile to the accelerator program students.mobile design should be about the tasks the user wants to carry out and how to ensure that the user experience incorporates that.</p>
                <p className="text-xl text-center text-[#717987]">JANUARY 21, 2021</p>
            </div>
            <div class="bg-gray-100 p-4 w-full shadow-lg shadow-gray-500/50 rounded">
                <img className="w-full mb-4" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1676850714/deni.design/speaking-2_sfsaof.png" alt="speeaking 2 img" />
                <p className="mb-12">In this session, I delivered a talk on brainstorming ideas and validating ideas. Many ideas look good on paper but fail in real life.
It is important to make sure you are building something people want and sre willing to pay for.</p>
                <p className="text-xl text-center text-[#717987]">FEBRUARY 07, 2021</p>
            </div>
            <div class="bg-gray-100 p-4 w-full shadow-lg shadow-gray-500/50 rounded">
                <img className="w-full mb-4" src="https://res.cloudinary.com/cloud-web-assets/image/upload/v1676850714/deni.design/speaking-3_dxmiwm.png" alt="speeaking 1 img" />
                <p className="mb-12">In this session, I delivered a talk on  getting started in Product Design, fundamentals of designers and the relationship between PMs and Designers. Walked through the design process taking reference from a real life scenario in “Founders” - a movie about how McDonald’s came to be.  Also walked through Airbnb’s case study and how Airbnb designed trust into their product. </p>
                <p className="text-xl text-center text-[#717987]">FEBRUARY 07, 2021</p>
            </div>
            
        </div>
    </div>
  );
}

export default HomePage;
