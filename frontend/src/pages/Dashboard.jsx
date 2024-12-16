import { Appbar } from "../components/Appbar";
import {Blogview} from "../components/Blogview"
import {User} from "../components/User"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Blogview value={"10,000"} />
            <User />
        </div>
    </div>
}