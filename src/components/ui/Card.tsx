"use client"
import React from "react";
import ProjectModal from "@/components/ui/ProjectModal";


export default function Card({title,description,stack,repo}:{title:string, description:string, stack: string[],repo: string}) {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className={"card max-w-md flex flex-col bg-[#0F0F0F] pb-2 rounded-b-[15px] rounded-t-[15px]"}>
            <img className={"flex w-[250px] border-3 border-[#78df71] rounded-t-[15px]"}
                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhE-TIneks3x_lUbEJW-BuYJr7XN_hdI56A&s"}>
            </img>
            <div className={"title w-full text-xl font-medium text-center text-[#EDEDED] p-3"}>{title.charAt(0).toUpperCase() + "" + title.substring(1,title.length)}</div>
            <ProjectModal title={title} description={description} stack={stack} repo={"https://github.com/xserafineq/dietetykplus"}/>
            <div className={"technologies flex w-full mt-4 p-2 gap-2 justify-end text-gray-400"}>
                <i className="devicon-react-original-wordmark text-2xl"></i>
                <i className="devicon-typescript-plain text-2xl"></i>
                <i className="devicon-csharp-plain text-2xl"></i>
            </div>
        </div>
    )
}