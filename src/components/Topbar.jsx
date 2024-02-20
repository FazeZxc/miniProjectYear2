export function Topbar(){
    return <div className="bg-black flex flex-row gap-4 px-4 h-8">
        <div className="text-white hover:bg-white hover:text-black flex justify-center items-center px-2 border-b-4 ">For <h1 className="font-bold px-2">Students</h1> </div>
        <div className="text-white  hover:bg-white hover:text-black flex justify-center items-center px-2 ">For <h1 className="font-bold px-1"></h1> Teachers</div>
        <div className="text-white  hover:bg-white hover:text-black flex justify-center items-center px-2 ">For <h1 className="font-bold px-1"></h1> Governments</div>
    </div>
}