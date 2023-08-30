interface info {
    strength: number;
    lives: number;
}

interface mTypes {
    name: string;
    img: string;
    information: info;
    text: string;

}

type mArray = {
    data: Array< info | mTypes>
}


export type { mArray }