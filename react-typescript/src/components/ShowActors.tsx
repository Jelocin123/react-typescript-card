import { useEffect, useRef, useState } from "react"
import { mArray } from "../types/types"
import { gsap } from "gsap"
import Back from "./Back"
import Front from "./Front"

interface mIndex{
    dataIndex:number
    defaultdata:Boolean;
}


const ShowActors = (props:(mIndex & mArray))=> {

    

    const cc= useRef<HTMLDivElement>(null);

    useEffect( ()=>{

            if(!props.defaultdata){

                gsap.to(cc.current, {
                    duration:0.05,
                    scaleX:-1,
                    alpha:0,
                    repeat:3,
                    yoyo:true
                })
            }
        

    },)


    return(

        <section ref={cc} id="cardContainer">
            <div id="card">
                { props.defaultdata ? (

                    <Back/>

                ):(

                    <Front 
                    dataIndex={props.dataIndex} 
                    data={props.data}/>

                )

                }
            </div>
        </section>

    )

}

export default ShowActors