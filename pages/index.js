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
                        <a className="bg-gradient-to-r from-cyan-500 text- to-fuchsia-500 text-white px-4 py-2 border-none rounded-md ml-8" href="/denes_horvath_resume.pdf" target="_blank"> Önéletrajz letöltése </a>
                    </li>
                </ul>
            </nav>
            <div className="text-center p-10 py-10">
                <h2 className="text-5xl py-2 text-fuchsia-600 font-medium dark:text-fuchsia-400 md:text-6xl"> Horváth Dénes </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl"> Junior szoftverfejlesztő </h3>
                <div className="text-5xl flex justify-center gap-16 pt-12 py-3 text-gray-600 dark:text-gray-400">
                    <a href="https://github.com/HDenes8" target="_blank">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/denes-horvath/" target="_blank">
                        <AiFillLinkedin />
                    </a>
                    <a href="mailto:denes.horvath.email@gmail.com?subject=Üzenet">
                        <AiOutlineMail />
                    </a>
                    <a href="tel:+36306504405" target="_blank">
                        <AiFillPhone />
                    </a>
                </div>
                <div className="mx-auto bg-gradient-to-b from-fuchsia-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                    <Image src={deved} layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
        <section>
            <div>
                <h3 className="text-3xl py-1 dark:text-white ">Rólam / Amivel foglalkozom 👈</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> Engem  <span className="text-fuchsia-500"> Horváth Dénes</span>-nek hívnak és szoftverfejlesztőnek tanulnok a Szegedi Tudományegyetemen. A szakmával kapcsolatban nagyon motivált és eredményorientált vagyok, célom, hogy minél több mindent elsajátítsak és megértsek. Jelenlegi tanulmányaim során aktívan veszek részt a termékfejlesztés különböző fázisaiban, mint a tervezés, kódolás és tesztelés, valamint az előírt minőségi, biztonsági és architekturális elveket alkalmazom a tervezés, kódolás és egyéb fejlesztési tevékenységek során. </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> Technológia szempontból jelenleg ezekkel foglalkozom: <span className="text-fuchsia-500"> HTML5,CSS3/SCCS,JavaScript(ES6),React,Wordpress,C#,Java,Git. </span> </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> Szeretem a multimédiás feladatokat, mint például képszerkesztés(Figma/Photoshop),videóvágás(Davinci Resolve),dokumentum szerkesztés(Microsoft Office csomag).</p>

            </div>
            <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                    <Image src={design} width={100} height={100} />
                    <h3 className="text-lg font-medium pt-8 pb-2  "> Weblap és applikáció készítés </h3>
                    <h4 className="py-4 text-fuchsia-600">Amit használok</h4>
                    <p className="text-gray-800 py-1">React</p>
                    <p className="text-gray-800 py-1">Wordpress</p>
                    <p className="text-gray-800 py-1">HTML5,CCS3/SCSS,JS(ES6)</p>
                    <p className="text-gray-800 py-1">Bootstrap 4/5</p>
                    <p className="text-gray-800 py-1">GIT</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <Image src={code} width={100} height={100} />
                    <h3 className="text-lg font-medium pt-8 pb-2 "> Hobbi projektek </h3>
                    <h4 className="py-4 text-fuchsia-600">Amiből ötletet merítek</h4>
                    <p className="text-gray-800 py-1">Udemy kurzusok</p>
                    <p className="text-gray-800 py-1">Bootcamp-ek</p>
                    <p className="text-gray-800 py-1">CMS rendszerek</p>
                    <p className="text-gray-800 py-1">Layoutok</p>
                    <p className="text-gray-800 py-1">Applikációk</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <Image src={consulting} width={100} height={100} />
                    <h3 className="text-lg font-medium pt-8 pb-2 ">Egyéb</h3>
                    <h4 className="py-4 text-fuchsia-600">Amivel foglalkozok még</h4>
                    <p className="text-gray-800 py-1">Számítógép karbantartás (pc/laptop)</p>
                    <p className="text-gray-800 py-1">Telefon karbantartás</p>
                    <p className="text-gray-800 py-1">Rendszergazdai feladatok ellátása</p>
                    <p className="text-gray-800 py-1">Microsoft Office csomag ismerete</p>
                </div>
            </div>
        </section>
        <section className="py-10">
            <div>
                <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> Portfólió jelenleg még <span className="text-fuchsia-500"> feltöltés </span> és <span className="text-fuchsia-500">fejlesztés </span> alatt...✌️ </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> Az itt látható képek csak teszt jellegel vannak használva❗️ </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1 ">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web1} />
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web2} />
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web3} />
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web4} />
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web5} />
                </div>
                <div className="basis-1/3 flex-1">
                    <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web6} />
                </div>
            </div>
        </section>
    </main>
</div> ); }
