import Head from "next/head";
import {
    AiFillLinkedin, AiOutlineMail, AiFillGithub, AiFillPhone,
} from "react-icons/ai";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {useState} from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() { const [darkMode, setDarkMode] = useState(true); return ( <div className={darkMode ? "dark" : "" }>
    <Head>
        <title>HDenes</title>
        <meta name="description" content="Horváth Dénes - Junior szoftverfejlesztő" />
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
        <link rel="manifest" href="./favicon/site.webmanifest" />
        <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
    <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <h1 className="font-burtons text-xl">HDenes</h1>
                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
                    </li>
                    <li>
                        <a className="bg-gradient-to-r from-cyan-500 text- to-fuchsia-500 text-white px-4 py-2 border-none rounded-md ml-8" href="/denes_horvath_resume.pdf" target="_blank"> Download CV </a>
                    </li>
                </ul>
            </nav>
            <div className="text-center p-10 py-10">
                <h2 className="text-5xl py-2 text-fuchsia-600 font-medium dark:text-fuchsia-400 md:text-6xl"> Dénes Horváth </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl"> Junior developer </h3>
                <div className="text-5xl flex justify-center gap-16 pt-12 py-3 text-gray-600 dark:text-gray-400">
                    <a href="https://github.com/HDenes8" target="_blank" rel="noreferrer" aria-label="GitHub link">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/denes-horvath/" target="_blank" rel="noreferrer" aria-label="LinkedIn link">
                        <AiFillLinkedin />
                    </a>
                    <a href="mailto:denes.horvath.email@gmail.com" aria-label="Mail link">
                        <AiOutlineMail />
                    </a>
                    <a href="tel:+36306504405" target="_blank" rel="noreferrer" aria-label="Telefonszám">
                        <AiFillPhone />
                    </a>
                </div>
                <div className="mx-auto bg-gradient-to-b from-fuchsia-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                    <Image src={deved} layout="fill" objectFit="cover" alt="kep" />
                </div>
            </div>
        </section>
        <section>
            <div>
            <h3 className="text-3xl py-1 dark:text-white ">About me 👈</h3>
<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> My name is <span className="text-fuchsia-500"> Dénes Horváth</span>, and I am studying software development at the University of Szeged. I am highly motivated and results-oriented in the field, aiming to acquire and understand as much as possible. Currently, during my studies, I actively participate in various phases of product development, such as planning, coding, and testing, applying prescribed quality, safety, and architectural principles in the processes of design, coding, and other development activities. </p>
<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> From a technological perspective, I am currently working with: </p>
<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> <span className="text-fuchsia-500"> HTML5, CSS3/SCSS, JavaScript (ES6) </span> </p>
<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> <span className="text-fuchsia-500"> React, WordPress, C#, Java, Git </span> </p>
<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> I enjoy multimedia tasks, such as image editing (Figma/Photoshop) and document editing (Microsoft Office suite).</p>
</div>
<div className="lg:flex gap-10">
    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        <Image src={design} width={100} height={100} alt="image"/>
        <h3 className="text-lg font-medium pt-8 pb-2  "> Website and Application Development </h3>
        <h4 className="py-4 text-fuchsia-600"> What I Use</h4>
        <p className="text-gray-800 py-1"> React</p>
        <p className="text-gray-800 py-1"> Wordpress</p>
        <p className="text-gray-800 py-1"> HTML5, CCS3/SCSS, JS (ES6)</p>
        <p className="text-gray-800 py-1"> Bootstrap 4/5</p>
        <p className="text-gray-800 py-1"> GIT</p>
    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={code} width={100} height={100} alt="image" />
        <h3 className="text-lg font-medium pt-8 pb-2 "> Hobby Projects </h3>
        <h4 className="py-4 text-fuchsia-600">Where I Draw Inspiration</h4>
        <p className="text-gray-800 py-1"> Udemy courses</p>
        <p className="text-gray-800 py-1"> Bootcamps</p>
        <p className="text-gray-800 py-1"> CMS systems</p>
        <p className="text-gray-800 py-1"> Layouts</p>
        <p className="text-gray-800 py-1"> Applications</p>
    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={consulting} width={100} height={100} alt="image" />
        <h3 className="text-lg font-medium pt-8 pb-2 ">Other</h3>
        <h4 className="py-4 text-fuchsia-600">What I Also Do</h4>
        <p className="text-gray-800 py-1"> Computer maintenance (PC/laptop)</p>
        <p className="text-gray-800 py-1"> Phone maintenance</p>
        <p className="text-gray-800 py-1"> System administration tasks</p>
        <p className="text-gray-800 py-1"> Knowledge of Microsoft Office suite</p>
    </div>
</div>
</section>
<section className="py-10">
<div>
    <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> The portfolio is currently under <span className="text-fuchsia-500">construction</span> and <span className="text-fuchsia-500">development</span>...✌️ </p>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> The images shown here are for <span className="text-fuchsia-500">testing</span> purposes only. ❗️ </p>

            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1 ">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web1} alt="kep"/>
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web2} alt="kep"/>
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web3} alt="kep"/>
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web4} alt="kep"/>
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web5} alt="kep"/>
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web6} alt="kep"/>
                </div>
            </div>
        </section>
    </main>
</div> ); }
