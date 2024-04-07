import Image from "next/image";

const About = () => {
    return ( 
        <main className=" mt-28 flex flex-col items-center">
            <section id="sect-1" className="flex flex-col items-center bg-gray-200 p-4 rounded-lg min-w">
                <h1 className="text-5xl font-bold mb-4 text-center leading-normal md:text-left">Download our Paperwhite</h1>
                <p className="max-w-64 text-center leading-relaxed md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi tempore fugit quia obcaecati iste nisi placeat, id impedit saepe eaque odit reiciendis doloremque hic quas. Itaque modi exercitationem maxime?</p>
            </section>

            <section id="sect-2" className="flex flex-col items-center mt-7 ">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4 md:text-left">Summary about the paperwhite</h2>
                    <p className="mb-10 leading-relaxed tracking-wider text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident aliquam magni? Vero quae, eveniet reiciendis vel omnis saepe perferendis incidunt commodi aliquid? Perspiciatis necessitatibus hic fuga numquam nemo id?</p>
                </div>
                <div className="flex items-center">
                    <Image src="/download.png" alt="image" width={350}  height={100} />
                </div>
            </section>

            <section id="sect-3" className="mt-10">
                <div>
                    <h2 className="text-xl text-center font-bold mb-10 leading-relaxed md:text-left">At Innolytics, Innovation research and real-time tracking system</h2>
                    <p className="mb-10 leading-relaxed tracking-wider text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus aspernatur, ut ea vel aut maxime! Molestias recusandae, fuga eius architecto nihil nam molestiae magni, earum ab dolorem maiores accusamus?</p>
                    <p className="mb-10 leading-relaxed tracking-wider text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab dignissimos itaque. Provident aspernatur cumque quaerat voluptatem, dolores iure deserunt inventore, modi aliquid vel, necessitatibus iusto autem voluptate sint libero?</p>
                </div>
            

                <form method="GET" className="bg-gray-200 p-7 rounded-lg">
                    <h3 className="font-bold mb-4 text-2xl">Download Whitepaper</h3>

                    <div className="mb-3">
                        <input className="w-full" type="text" id="name" placeholder="Name" required />
                        <span className="error"></span>
                    </div>

                    <div className="mb-3">
                        <input className="w-full"  type="email" id="email" placeholder="Email" required />
                        <span className="error"></span>
                    </div>

                    <div className="mb-20">
                        <input className="w-full"  type="text" id="companyName" placeholder="Company Name" required />
                        <span className="error"></span>
                    </div>

                    <button type="submit" className="w-full text-white bg-black p-4 rounded-lg hover:text-black hover:bg-white">Download</button>
                </form>
            </section>
        </main>
     );
}
 
export default About;