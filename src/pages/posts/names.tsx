import { useRouter } from "next/router";
import Link from "next/link";


const about = ()=> {

    const router = useRouter();
    const {id} = router.query;

    return (
        <>
        <div>Names</div>
        <div>{id}</div>
        <div> <Link href="/">Tilbage</Link></div>

        </>
    );

}
export default about;