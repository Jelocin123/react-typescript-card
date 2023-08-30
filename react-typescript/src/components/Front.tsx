import { mArray } from "../types/types";

interface mIndex {
    dataIndex:number;
}

const Front = (props: (mIndex & mArray))=> {

    return(
        <>
            <div id="headline">{props.data[props.dataIndex].name}</div>
            <div id="imagecon">
            <img id="showImg" src={"assets/images/" + props.data[props.dataIndex].img} />
            </div>
            <div id="content">{props.data[props.dataIndex].text}</div>

        </>

    )
}

export default Front;