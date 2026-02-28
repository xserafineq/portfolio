import Link from "next/link";
import { Github } from 'lucide-react';
import {Rocket} from "lucide-react";
import Squares from './Squares';
import Card from '../components/ui/Card';
import './globals.css';

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
            <div className={"projects-section bg-[url('/projects-bg.svg')] bg-cover  flex flex-col w-full items-center"}>
                <div className={"wavetop w-full h-[150px]"}>
                    <svg id="visual" viewBox="0 0 1920 600" width="1920" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 101L45.7 97C91.3 93 182.7 85 274.2 80.5C365.7 76 457.3 75 548.8 79.5C640.3 84 731.7 94 823 97.5C914.3 101 1005.7 98 1097 96.8C1188.3 95.7 1279.7 96.3 1371.2 93C1462.7 89.7 1554.3 82.3 1645.8 83.3C1737.3 84.3 1828.7 93.7 1874.3 98.3L1920 103L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#161616" stroke-linejoin="miter"></path></svg>
                </div>
                <p id={"projekty"} className={"text-7xl text-[#7ae376] font-medium flex flex-row gap-3 [text-shadow:_5px_-4px_0px_#32802E] tracking-widest"}>Projekty</p>
                <div className={"projects flex flex-wrap w-3/4 h-auto bg-red mt-20 mb-20 gap-20 justify-center"}>
                    <Card title={"dietetyk+"}
                          description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                          stack={["JS", "TS","C#"]} repo={"https://github.com/xserafineq/dietetykplus"}></Card>
                </div>
            </div>
            <footer>
            </footer>
        </div>
    );
}