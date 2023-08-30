import {mArray} from "../types/types";
import { MouseEvent, useState } from "react";
import ShowActors from "./ShowActors";

 
const Card = ({ data }: mArray) => {

    const [index, setIndex] = useState<number>(0);

    const [defaultData, setDefaultData] = useState<Boolean>(true);



    const getData = (event:MouseEvent<HTMLElement>)=> {

        setDefaultData(false)

        setIndex(Number(event.currentTarget.dataset.index))

    }

    return(

        <>
        
        <nav id="menuContainer">

            <ul id="menuItemContainer">

                {

                    data.map( (names:any, index:number)=>(

                        <li
                        data-index={index}
                        onClick={getData}
                        key={index}
                        >{names.name}
                        </li>

                    ))

                }

            </ul>

        </nav>

        <ShowActors dataIndex={index} data={data} defaultdata={defaultData}/>

        </>
    )
}
export default Card;