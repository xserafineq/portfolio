import Link from "next/link";
import { Github } from 'lucide-react';
import {Rocket} from "lucide-react";
import Squares from './Squares';
import Card from '../components/ui/Card';
export default function Home() {
    return (
        <div>
            <header className="h-[800px] bg-[] bg-dark flex relative flex-col bg-[#1c1e22] overflow-hidden shadow-xl shadow-[#0c0c0c]">
                <div className="absolute inset-0 z-0">
                    <Squares
                        speed={0.29}
                        squareSize={40}
                        hoverFillColor='#222'
                        direction="diagonal"
                        borderColor="#271E37"
                    />
                </div>
                <nav className="w-full flex relative z-10 flex-row gap-6 justify-end p-8 text-lg font-medium">
                    <Link href="/">Projekty</Link>
                    <Link href="/">Kontakt</Link>
                    <Link href="/">O Mnie</Link>
                </nav>
                <div className={"about-me relative z-10 w-full h-[300px] mt-[20px] flex flex-col text-center justify-center items-center gap-8"}>
                    <p className={"text-5xl font-medium"}>{"<MATEUSZ SERAFIN/>"}</p>
                    <span className={"p-4"}>
                        <p className={"text-2xl tracking-widest"}>Jestem studentem Informatyki na <Link href={"https://www.ur.edu.pl/pl/strona-glowna"} className={"text-[#78df71]"}>Uniwersytecie Rzeszowskim</Link></p>
                        <p className={"text-xl tracking-widest"}>Tworzę projekty, które zamieniają pomysły w działający kod.</p>
                    </span>
                </div>
                <div className={"buttons relative z-10 flex flex-row w-full h-[80px]  items-center justify-center gap-8 text-2xl font-medium"}>
                    <Link target={"_blank"}  href="https://github.com/xserafineq" className={"bg-[#78df71] text-2xl w-[160px] items-center justify-center flex flex-row p-3 rounded-[25px] gap-1"}><Rocket size={24}/>Projekty</Link>
                    <Link target={"_blank"} href={"https://github.com/xserafineq"} className={"text-[#78df71] text-2xl w-[140px] border-3 flex flex-row justify-center border-[#78df71] p-3 items-center rounded-[20px] gap-1"}><Github size={24} /> Github</Link>
                </div>
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-[160px] bg-[#7ae376] opacity-30 blur-[100px] rounded-[100%]"></div>
            </header>
            <div className={"projects-section bg-[#131313] flex flex-col w-full items-center pt-20"}>
                    {/*<p className={"text-6xl text-[#7ae376] font-medium flex flex-row gap-3 [text-shadow:_5px_-4px_0px_#32802E]"}><Rocket className={"pt-1"} size={60}/>Projekty</p>*/}
                <p className={"text-6xl text-[#7ae376] font-medium flex flex-row gap-3 [text-shadow:_5px_-4px_0px_#32802E] tracking-widest"}>Projekty</p>
                <div className={"projects flex flex-wrap w-3/4 h-auto bg-red mt-20 mb-20 gap-20 justify-center"}>
                    <Card title={"dietetyk+"}></Card>
                    <Card title={"dietetyk+"}></Card>
                    <Card title={"dietetyk+"}></Card>
                    <Card title={"dietetyk+"}></Card>
                    <Card title={"dietetyk+"}></Card>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}