export default function Home(){
    return(
        <div className="min-h-screen bg-gray-900 text-white  " >
            <nav className="flex flex-wrap justify-between items-center p-6 bg-gradient-to-r from-[#0f172a]  to-[#334155]">
                <div className="flex items-centre space-x-2">
                    <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center ">
                        <span className="text-4xl font-bold ">Roshani</span>
                    </div>
                    
                </div>
                <div className="flex flex-wrap justify-center items-center  space-x-6 sm:mt-0 sm:w-auto w-full sm:order-2">
                        <a href="#home" className="hover:text-pink-300 transition-shadow text-xl ">Home</a>
                        <a href="#AboutMe" className="hover:text-pink-300 transition-shadow text-xl  ">About Me</a>
                        <a href="#skills" className="hover:text-pink-300 transition-shadow text-xl ">Skills</a>
                        <a href="#project" className="hover:text-pink-300 transition-shadow text-xl ">Project</a>
                        <a href="#contact" className="hover:text-pink-300 transition-shadow text-xl ">Contact</a>
                    </div>
            </nav> 
            <section id="home" className="text-center py-20 px-6   ">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center ">
                        <img src="\roshani.jpeg" alt=""  className=" w-80 h-80 rounded-full mx-4 mt-4 object-cover border-4 border-pink-300" />

                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
                        Hi, I'm  <span className="text-pink-300">Roshani Singh</span>
                        </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Web Developer & AI/ML enthusiast
                    </p>
                    <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
                         I'm a passionate developer learning both Web Development and AI/ML. I build intuitive web interfaces and also work on intelligent systems involving machine learning, LLMs, and generative AI. 
                     </p>
                     <a href="\resume.pdf" className="inline-block bg-pink-300 text-white px-15 py-4 rounded-lg hover:bg-pink-400 transition-colors text-xl ">
                        Resume
                     </a>
                     
                </div>
            </section>

            <section id="AboutMe" className="py-20 px-6 bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] hover:text-black  ">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl text-center font-bold mb-16">About Me</h2>
                    <h3 className="text-3xl text-center mt-10">I am a passionate developer and AI/ML enthusiast
                        <p className="text-2xl text-gray-300"> I am currently making web applications and solving real world problems through AIML.
                            My journey started working with html, css and right now i am learning react,next.js and machine learning.
                        </p>
                        <p className="text-gray-300 text-2xl">I believe in writing clean and maintainable code .</p>
                    </h3>
                    
                </div>
            </section>

            <section id="skills" className="py-20 px-6 ">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl text-center font-bold mb-16">My Skills</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-80 gap-y-6">
                        <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  rounded-xl w-130 h-30 ">
                            
                            <h3 className="text-xl font-bold mt-8 mb-2">JavaScript</h3>
                            <p className="text-gray-300">Modern ES6+ JavaScript for dynamic web applications</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  rounded-xl w-130 h-30 ">
                            
                            <h3 className="text-xl font-bold mt-8 mb-2">JavaScript</h3>
                            <p className="text-gray-300">Modern ES6+ JavaScript for dynamic web applications</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  rounded-xl w-130 h-30 ">
                            
                            <h3 className="text-xl font-bold mt-8 mb-2">JavaScript</h3>
                            <p className="text-gray-300">Modern ES6+ JavaScript for dynamic web applications</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  rounded-xl w-130 h-30 ">
                            
                            <h3 className="text-xl font-bold mt-8 mb-2">JavaScript</h3>
                            <p className="text-gray-300">Modern ES6+ JavaScript for dynamic web applications</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  rounded-xl w-130 h-30 ">
                            
                            <h3 className="text-xl font-bold mt-8 mb-2">JavaScript</h3>
                            <p className="text-gray-300">Modern ES6+ JavaScript for dynamic web applications</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  rounded-xl w-130 h-30 ">
                            
                            <h3 className="text-xl font-bold mt-8 mb-2">JavaScript</h3>
                            <p className="text-gray-300">Modern ES6+ JavaScript for dynamic web applications</p>
                        </div>
                        
                    
                    </div>
                </div>
            </section>

        <section id="project" className="py-20 px-6 ">
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid cols-2 gap-y-8 gap-x-40">
                    <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155] rounded-xl overflow-hidden">
                        <div className="h-48 overflow-hidden">
                            <img src="\videorag.png" alt="Video Rag" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-center font-bold mb-2">Video Rag</h3>
                            <p className="text-gray-300 ">
                                AI-Powered Video Understanding & Question Answering System 
                            </p>
                            <div className="flex gap-4">
                            <a href="https://www.linkedin.com/posts/roshani-singh-143440323_ai-machinelearning-nlp-activity-7296823037268553728-G3Hr?" className="inline-flex items-center text-blue-400 hover:text-blue-300 "> View On LinkedIn</a>
                        </div>
                        </div>
                        
                        
                    </div>
                     <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155] rounded-xl overflow-hidden">
                        <div className="h-48 overflow-hidden">
                            <img src="\pmap.png" alt="Video Rag" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-center font-bold mb-2">PromptMap</h3>
                            <p className="text-gray-300 ">
                                 an AI-powered tool designed to revolutionize image generation! 
                            </p>
                            <div className="flex gap-4">
                            <a href="https://www.linkedin.com/posts/roshani-singh-143440323_ai-machinelearning-stablediffusion-activity-7307103380680683520-8Cf4?" className="inline-flex items-center text-blue-400 hover:text-blue-300 "> View On LinkedIn</a>
                        </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            </section>  
            <section id="contact" className="py-20 px-6" >
                <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl  font-bold mb-8"> Contact</h2> 
                        <p className="text-gray-300 mb-12 text-lg">
                            Have a project in mind? I'd love to hear about it. Let's chat and see how I can help bring your ideas to life.
                        </p>
                        <div className="grid md:grid-cols-3 gap-20 mb-12">
                            <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  p-6  rounded-xl">
                                <h3 className="font-bold mb-2">Phone</h3>
                                <p className="text-gray-300 ">roshanisingh7900@gmail.com</p>

                            </div>
                             <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  p-6  rounded-xl">
                                <h3 className="font-bold mb-2">Email</h3>
                                <p className="text-gray-300 ">+91 9599317951</p>
                                
                            </div>
                               <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155]  p-6  rounded-xl">
                                <h3 className="font-bold mb-2">Location</h3>
                                <p className="text-gray-300 ">New Delhi,INDIA</p>
                                
                            </div>

                        </div>
                        <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155] p-8 rounded-xl">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-1 gap-6">
                                    <input type="text" placeholder="Your Name"
                                    className="bg-gray-600 p-4 rounded-lg w-full text-white placeholder-gray-400"
                                    />
                                    <input type="email" placeholder="Your Email" className="bg-gray-600 p-4 rounded-lg w-full text-white placeholder-gray-400" />
                                    
                                    <input type="text" placeholder="Subject"
                                    className="bg-gray-600 p-4 rounded-lg w-full text-white placeholder-gray-400"
                                    />
                                    <button className="bg-pink-300 hover:bg-pink-500 px-8 py-3 rounded-lg font-bold">
                                         Send Message
                                    </button>
                                </div>
                            </div>
                        </div>

                    
                </div>
                </section>  
                <footer className="bg-gradient-to-r from-[#0f172a]  to-[#334155] py-8 px-6 ">
                    <div className="max-w-6xl mx-auto ">
                        
                        <div className="flex justify-center mb-4">
                            <div className="text-xl font-bold text-center">Roshani Singh</div>

                        </div>
                        <div className="flex justify-center space-x-6">
                            <a href="https://www.linkedin.com/in/roshani-singh-143440323?" className="px-12 py-4 rounded-lg bg-pink-300 hover:bg-pink-500 mt-4 ">LinkedIn</a>
                            <a href="https://github.com/Roshani1416" className="px-12 py-4 rounded-lg bg-pink-300 hover:bg-pink-500 mt-4 ">GitHub</a>
                        </div>
                        
                    </div>
                </footer>
        </div>
    )
}