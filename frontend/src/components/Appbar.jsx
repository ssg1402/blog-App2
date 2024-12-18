import { Button } from "./Button"
export const Appbar = () => {
    return <div className="w-screen h-14 shadow-lg flex justify-between items-center px-4 bg-slate-100 text-black">
        <div className="flex flex-col justify-center h-full ml-4">
            Blog App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                <Button 
                label={"Sign-In"}
                />
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}