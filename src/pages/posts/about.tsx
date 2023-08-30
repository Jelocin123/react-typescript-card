import { useRouter } from "next/router";
import Link from "next/link";
import AboutContent from "@/components/about/AboutContent";


const about = ()=> {

    //const router = useRouter();
    //const {id} = router.query;

    const router = useRouter();
    const query = router.query;
    const idStr = query.id as string;
    const id = parseInt(idStr);

    //const testID = parseInt(router.query.id as string)


    return (

        <>

        <AboutContent myid={id} name="poul"/>
        <div>about</div>
        {/*<div>{id}</div> */}
        

        </>
    );

}
export default about;