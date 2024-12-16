import { Appbar } from "../components/Appbar"
import { Blogview } from "../components/Blogview"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Blogview value={"1000"} />
       
        </div>
    </div>
}