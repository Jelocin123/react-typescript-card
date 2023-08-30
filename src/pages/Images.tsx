import Image from "next/image";
import Ninja from '../../assets/t7RYYVuC_400x400.jpg';
import { useRouter } from "next/router";

const Images = ()=>{

    const router = useRouter();

    const mFunc = ()=>{

        router.push('/anotherPage')

    }

    return(
        <>

        <Image
        alt="poul"
        src={Ninja}
        
        />

        <button
        type="button"
        onClick={mFunc}
        >
        Click me
        </button>
        </>
    )
};
export default Images;