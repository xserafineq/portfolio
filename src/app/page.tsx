import Link from "next/link";
import { Github } from 'lucide-react';
import {Rocket} from "lucide-react";
import Squares from './Squares';
import Card from '../components/ui/Card';
import './globals.css';
import StackCard from "@/components/ui/stackCard";

export default function Home() {
    return (
        <div>
            <header className="h-screen flex relative flex-col bg-[#1c1e22] overflow-hidden shadow-xl ">
                <div className="absolute inset-0 z-0">
                    <Squares
                        speed={0.29}
                        squareSize={40}
                        hoverFillColor='#222'
                        direction="diagonal"
                        borderColor="#271E37"
                    />
                </div>
                <nav className="w-full flex relative z-10 flex-row gap-6 justify-end p-8 text-xl font-medium text-[#78df71]">
                    <Link href="/">Projekty</Link>
                    <Link href="/">Kontakt</Link>
                    <Link href="/">O Mnie</Link>
                </nav>
                <div className={"about-me relative z-10 w-full mt-55 flex flex-col text-center justify-center items-center gap-8"}>
                    <p className={"text-5xl font-medium"}>{"<MATEUSZ SERAFIN/>"}</p>
                    <span className={"p-4"}>
                        <p className={"text-2xl tracking-widest"}>Jestem studentem Informatyki na <Link target={"_blank"} href={"https://www.ur.edu.pl/pl/strona-glowna"} className={"text-[#78df71]"}>Uniwersytecie Rzeszowskim</Link></p>
                        <p className={"text-xl tracking-widest"}>Tworzę projekty, które zamieniają pomysły w działający kod.</p>
                    </span>
                </div>
                <div className={"buttons relative z-10 flex flex-row w-full h-[80px]  items-center justify-center gap-8 text-2xl font-medium"}>
                    <a href={"#projekty"}  className={"bg-[#78df71] text-2xl w-[160px] items-center justify-center flex flex-row p-3 rounded-[25px] gap-1"}><Rocket className={"pt-1"} size={32}/>Projekty</a>
                    <a target={"_blank"} href={"https://github.com/xserafineq"} className={"text-[#78df71] text-2xl w-[140px] border-3 flex flex-row justify-center border-[#78df71] p-3 items-center rounded-[20px] gap-1"}><Github size={24} /> Github</a>
                </div>
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-[160px] bg-[#7ae376] opacity-30 blur-[100px] rounded-[100%]"></div>
            </header>
            <div className={"projects-section bg-[url('/projects-bg.svg')] bg-cover flex flex-col w-full items-center"}>
                <div className={"wavetop w-full h-[150px]"}>
                    <svg id="visual" viewBox="0 0 1920 600" width="1920" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 101L45.7 97C91.3 93 182.7 85 274.2 80.5C365.7 76 457.3 75 548.8 79.5C640.3 84 731.7 94 823 97.5C914.3 101 1005.7 98 1097 96.8C1188.3 95.7 1279.7 96.3 1371.2 93C1462.7 89.7 1554.3 82.3 1645.8 83.3C1737.3 84.3 1828.7 93.7 1874.3 98.3L1920 103L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#161616"></path></svg>
                </div>

                <p id={"stack"} className={"text-5xl md:text-7xl text-[#7ae376] font-medium flex flex-row [text-shadow:_5px_-4px_0px_#32802E] tracking-widest"}>Technologie</p>
                <div className={"projects flex flex-wrap w-3/4 h-auto bg-red mt-20 mb-40 gap-30 justify-center"}>
                    <StackCard type={"frontend"} language={["REACT","TS","NEXT.js","TW"]}/>
                    <StackCard type={"backend"} language={["C#","EF","NETCORE"]}/>
                    <StackCard type={"bazy danych"} language={["MYSQL","POSTGRES","SQL"]}/>
                </div>
                <p id={"projects"} className={"text-5xl md:text-7xl text-[#7ae376] font-medium flex flex-row gap-3 [text-shadow:_5px_-4px_0px_#32802E] tracking-widest"}>Projekty</p>
                <div className={"projects-section flex flex-wrap w-3/4 h-auto bg-red mt-20 mb-20 gap-20 justify-center"}>
                    <Card title={"dietetyk"} description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                          stack={["JS", "TS","C#"]} repo={"https://github.com/xserafineq/dietetykplus"}/>
                </div>
                <svg id="visual" viewBox="0 0 960 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 43L26.7 45C53.3 47 106.7 51 160 51.8C213.3 52.7 266.7 50.3 320 50.8C373.3 51.3 426.7 54.7 480 52.8C533.3 51 586.7 44 640 43.7C693.3 43.3 746.7 49.7 800 53.2C853.3 56.7 906.7 57.3 933.3 57.7L960 58L960 101L933.3 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#161616"></path></svg>
            </div>
            <footer className="flex w-full bg-[#161616] min-h-[180px] p-2">
                <div className="flex flex-col author p-6 w-1/2  justify-start">
                    <div className={"font-medium text-gray-300 text-lg opacity-80"}>serafin24@gmail.com</div>
                    <div className={"text-gray-400  text-md opacity-80"}>{"© " + new Date().getFullYear() + " Mateusz Serafin"}</div>
                    <div className={"text-gray-400  text-md opacity-80"}>
                        <nav className={"flex mt-1 text-gray-600 gap-2 flex-wrap"}>
                            <Link href="/">Projekty</Link>
                            <Link href="/">Kontakt</Link>
                            <Link href="/">O Mnie</Link>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col contact p-6 w-1/2  items-end">
                    {/*<div className={"font-medium text-gray-300 text-lg opacity-80"}>serafin24@gmail.com</div>*/}
                    <div className={"text-gray-400  text-md opacity-80"}><i className={"devicon-github-original p-1 text-md"}/>xserafineq </div>
                    <div className={"flex text-gray-400  text-md opacity-80"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                             className="bi bi-discord p-1" viewBox="0 0 16 16">
                            <path
                                d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                        </svg>
                        serafineq
                    </div>
                </div>
            </footer>
        </div>
    );
}