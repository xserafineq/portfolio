import icon from "../../features/icons";


export default function StackCard({type,language}:{type:string,language:string[]}) {
    return (
        <div className={"stack-card bg-[#161616] hover:scale-125 duration-500 flex flex-col w-[220px] h-auto border-2 border-solid border-gray-500 items-center justify-center rounded-3xl p-4"}>
            <div className={"stack-type font-bold mb-4 text-2xl text-[#78df71]"}>{type.toUpperCase()}</div>
            <div className={"stack flex flex-wrap justify-center gap-4 text-gray-300"}>
                {
                    language.map(language=>(<i key={language} className={icon.get(language) + " text-6xl"}/>))
                }
            </div>
        </div>
    );
}