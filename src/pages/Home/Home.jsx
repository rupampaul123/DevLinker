import { Link } from "react-router-dom";
import Particles from "../../components/Particles";
import Stepper, { Step } from "../../components/Stepper";
import { Footer1 } from "../../components/Footer";


export default function Home() {
  return (
    <>
    <div className="relative w-full h-[100vh] min-h-[500px]">
      {/* Particle Background Layer */}
      <Particles
        particleColors={["#38BDF8", "#E879F9"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Foreground Text Layer */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
        style={{ pointerEvents: "none" }}
      >
        <h1
          className="text-white text-4xl md:text-6xl lg:text-8xl font-bold"
          style={{ pointerEvents: "auto" }}
        >
          Dev<span style={{color:"#38BDF8"}}>Linker</span>
        </h1>
        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold my-6">
          Create Your Own Portfolio Card
        </p>
      </div>
    </div>
    <div className="md:flex flex-row sm:flex flex-col" style={{marginTop:"100px", display:"flex"}}>
        <div className="md:w-1/2 sm:w-full lg:w-1/2">
            <img src="\images\Resume-bro (1).png" alt="" style={{height:"700px"}}/>
        </div>
        <div style={{width:"50%",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{marginRight:"5px"}}>
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold" style={{ fontFamily: "Segoe UI" }}>Create Your Own Portfolio Card with just a  
                <span style={{color:"#38BDF8", fontStyle:"italic" }}> Click!</span></h1>
            </div>
        </div>
    </div>
    



     <div className="md:flex flex-row sm:flex flex-col" style={{marginTop:"100px", display:"flex"}}>
        <div style={{width:"50%",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{}}>
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold px-4" style={{ fontFamily: "Segoe UI" }}>Just<span style={{color:"#38BDF8", fontStyle:"italic" }}> 3</span> Steps and Your Card is 
                <span style={{color:"#38BDF8", fontStyle:"italic" }}> Ready!</span></h1>
            </div>
        </div>
         <div className="md:w-1/2 sm:w-full lg:w-1/2">
            <img src="\images\Process-rafiki.png" alt="" style={{height:"700px"}}/>
        </div>
    </div>
    <div style={{display:"flex", marginTop:"50px"}}>
        <div style={{width:"100%", height:"100%"}}>
                    <Stepper
                            initialStep={1}
                            onStepChange={(step) => {
                                console.log(step);
                            }}
                            onFinalStepCompleted={() => console.log("All steps completed!")}
                            backButtonText="Previous"
                            nextButtonText="Next"
                            >
                            <Step>
                                <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold" style={{ fontFamily: "Segoe UI" }}>Submit Your <span style={{color:"#38BDF8", fontStyle:"italic" }}>LinkedIn</span> Account Link </h2>
                                <p>Check out the next step!</p>
                            </Step>
                            <Step>
                                <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold" style={{ fontFamily: "Segoe UI" }}>Submit your<span style={{color:"#38BDF8", fontStyle:"italic" }}> Github</span> Account Link</h2>
                                <p>Custom step content!</p>
                            </Step>
                            <Step>
                                <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold" style={{ fontFamily: "Segoe UI" }}>Give <span style={{color:"#38BDF8", fontStyle:"italic" }}>Info</span>  to be displayed on the Card</h2>
                            </Step>
                            <Step>
                                <h2 className="text-[#38BDF8] text-4xl md:text-6xl lg:text-8xl font-bold" style={{ fontFamily: "Segoe UI" }}>Boom!</h2>
                                <p>You made it!</p>
                            </Step>
                        </Stepper>
        </div>
    </div>
                <div style={{display:"flex", justifySelf:"center",marginBottom:"50px"}}>
                        <Link to="/Form"><button className="mt-8 px-6 py-3 rounded-full border border-transparent text-white font-semibold text-lg tracking-wide backdrop-blur-md bg-[#38BDF8]
                        hover:border-[#38BDF8] hover:shadow-[0_0_15px_#38BDF8] transition-all duration-300 ease-in-out">
                        Get Started
                        </button></Link>
                </div>
                
    <Footer1/>
    </>
  );
}
