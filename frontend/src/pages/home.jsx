import {Button} from "../components/Button"
import {Heading} from "../components/Heading"
import {Appbar} from "../components/Appbar"
import {SubHeading} from "../components/SubHeading"
export const Home = () =>{
    return (
        <div>
          <Appbar />
        <div className="min-h-screen w-screen flex flex-col items-center justify-center"style={{ background: 'linear-gradient(135deg,rgb(70, 212, 165),rgb(212, 113, 113))' }}>
        <Heading label="Publish your passions, your way" />
        <SubHeading label="Create a unique and beautiful blog easily." />
        <Button label="Create Your Blog" />
        {/* Optionally, you can add images, more content here */}
        </div>

      </div>
    );

}

