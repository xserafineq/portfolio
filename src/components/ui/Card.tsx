export default function Card({title}:{title:string}) {
    return(
        <div className={"card max-w-md flex flex-col bg-[#0F0F0F] pb-2 rounded-b-[15px]"}>
            <img className={"flex w-[250px] border-3 border-[#78df71] rounded-t-[15px]"}
                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhE-TIneks3x_lUbEJW-BuYJr7XN_hdI56A&s"}>
            </img>
            <div className={"title w-full text-xl font-medium text-center text-[#EDEDED] p-3"}>{title.charAt(0).toUpperCase() + "" + title.substring(1,title.length)}</div>
            <button className={"show mx-auto flex p-2 border-3 w-3/4 h-[40px] border-[#78df71] text-[#78df71] font-medium items-center justify-center rounded-lg hover:bg-[#78df71] hover:text-[#EDEDED] ease-in-out duration-500"}>Sprawdź</button>
            <div className={"technologies flex w-full mt-4 p-2 gap-2 justify-end text-[#EDEDED]"}>
                <i className="devicon-react-original-wordmark text-2xl"></i>
                <i className="devicon-typescript-plain text-2xl"></i>
                <i className="devicon-csharp-plain text-2xl"></i>
            </div>
        </div>
    )
}