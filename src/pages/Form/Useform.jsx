
export default function Useform({name, linkedin, github, img, prof, setName, setlinkedin, setgithub, handlesubmit, setimg, setprof}){
    return(
        <>
        <div style={{display:"flex", justifySelf:"center"}}>
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold px-4" style={{ fontFamily: "Segoe UI" }}>Almost <span style={{color:"#38BDF8", fontStyle:"italic" }}>There!</span></h1>
        </div>
        <div style={{display:"flex", marginTop:"100px"}}>
            <div style={{width:"50%"}}>
                <img src="/images/Forms-bro.png" alt="" style={{height:"700px"}}/>
            </div>
            <div style={{width:"50%"}}>
                <div style={{height:"100%"}} className="w-full max-w-md mx-auto mt-12 px-6 py-8 bg-[#111827] rounded-2xl shadow-lg border border-[#1F2937]">
                    <h2 className="text-white text-3xl font-bold text-center mb-6">
                        Enter Your <span className="text-[#38BDF8] italic">Details</span>
                    </h2>

                    <form className="space-y-6"   onSubmit={handlesubmit}>
                        {/* Full Name */}
                        <div>
                        <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 bg-[#1F2937] text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8] placeholder-gray-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>

                        {/* LinkedIn */}
                        <div>
                        <label className="block text-white text-sm font-medium mb-2">LinkedIn Profile</label>
                        <input
                            name="linkedin"
                            type="url"
                            placeholder="https://linkedin.com/in/yourprofile"
                            className="w-full px-4 py-2 bg-[#1F2937] text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8] placeholder-gray-400"
                            value={linkedin}
                            onChange={(e) => setlinkedin(e.target.value)}
                            />
                        </div>

                        {/* GitHub */}
                        <div>
                        <label className="block text-white text-sm font-medium mb-2">GitHub Profile</label>
                        <input
                            name="github"
                            type="url"
                            placeholder="https://github.com/yourhandle"
                            className="w-full px-4 py-2 bg-[#1F2937] text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8] placeholder-gray-400"
                            value={github}
                            onChange={(e) => setgithub(e.target.value)}
                        />
                        </div>

                        {/* Profession */}
                        <div>
                        <label className="block text-white text-sm font-medium mb-2">Profession</label>
                        <input
                            name="prof"
                            type="text"
                            placeholder="Your Profession"
                            className="w-full px-4 py-2 bg-[#1F2937] text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8] placeholder-gray-400"
                            value={prof}
                            onChange={(e) => setprof(e.target.value)}
                        />
                        </div>


                        <div>
                        <label className="block text-white text-sm font-medium mb-2">Photograph</label>
                        <input
                            name="image"
                            type="file"
                            accept="image/*"
                            className="w-full px-4 py-2 bg-[#1F2937] text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8] placeholder-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#38BDF8] file:text-white hover:file:bg-[#0ea5e9] transition-all duration-300"
                            onChange={setimg}
                        />
                        </div>


                        {/* Submit Button */}
                        <button
                        type="submit"
                        className="w-full mt-4 px-6 py-3 rounded-full border border-transparent text-white font-semibold text-lg tracking-wide backdrop-blur-md bg-[#38BDF8] hover:border-[#38BDF8] hover:shadow-[0_0_15px_#38BDF8] transition-all duration-300 ease-in-out"
                       
                        >
                        Submit
                        </button>
                        
                    </form>
                    </div>

        </div>
        </div>
        </>
    )
}