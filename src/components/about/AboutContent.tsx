
/*

interfaces are essentially a means of describing the shapes of data, like an object. 
types are definitions of data types.

*/


type mNum = {
    myid: number;
    name:string;
} 


/*
interface mNum {
    myid: number
}
*/

const AboutContent = (props: mNum) => {

    console.log(typeof (props.myid));

    return (

        <>myid: {props.myid}</>
    )
}

export default AboutContent;