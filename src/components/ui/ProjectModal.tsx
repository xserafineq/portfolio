import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from "react";
import Link from "next/link";
import icon from "../../features/icons";


export default function ProjectModal({title,description,stack,repo}: {title: string; description: string,stack: string[],repo: string}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={"show mx-auto flex p-2 border-3 w-3/4 h-[40px] border-[#78df71] text-[#78df71] font-medium items-center justify-center rounded-lg hover:bg-[#78df71] hover:text-[#EDEDED] ease-in-out duration-500"}>Sprawdź</button>
            </DialogTrigger>
            <DialogContent className={"bg-[#0F0F0F] p-6 "}>
                <DialogHeader className={"#1c1e22"}>
                    <DialogTitle className={"text-xl text-gray-200"}>{"PROJEKT / " +  title.toUpperCase()}</DialogTitle>
                    <DialogDescription>
                        <img src={"https://zapodaj.net/images/91df5790c8012.png"} className={"w-full"}/>
                        <div className={"mt-2 text-justify"}>
                            {description.toUpperCase()}
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div className={"w-full font-medium pt-2 text-gray-400"}>
                        {stack.map((item, i) => (
                            <i key={i} className={icon.get(item) + " mr-4 text-4xl"} />
                        ))}
                    </div>
                    <DialogClose asChild>
                        <Button className={"p-6 hover:bg-[white] duration-500 hover:text-[black]"} variant="outline">Zamknij</Button>
                    </DialogClose>
                    <Link target={"_blank"} href={repo} className={"flex items-center text-md justify-center font-medium text-center text-[#78df71] p-2 border-solid border-2 " +
                        "border-[#78df71] rounded-md hover:bg-[#78df71] duration-500 hover:text-[black]"}>
                        <i className="pr-1 devicon-github-original"/>
                        Repozytorium</Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
