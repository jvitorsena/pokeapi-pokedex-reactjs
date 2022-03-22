import AsideBar from "./AsideBar"

export default function Home() {
    return (
        <div className='flex h-screen w-screen'>
            <AsideBar />
            <div className={`flex flex-col items-center justify-center w-full h-full p-7`}>
                {/* Conteudo */}
                <img className="w-2/3" src="/pokemon-logo.png"></img>
            </div>
        </div>
    )
}