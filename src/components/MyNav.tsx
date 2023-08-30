import mMenu from '@/styles/menu.module.scss';
import Link from 'next/link';

const MyNav = ()=>{

    const alias = ["Alien Scum", "Death Smokie", "Ping Pong"]

    return(

        <nav id={mMenu.menuContainer}>
            <ul>
                
                  {
                    alias.map( (ar, index)=>(

                        <li key={index}>
                            <Link href={{
                                pathname:'/Enemies',
                                query:{data:index}
                            }}
                           //as={ar}
                            >
                                {ar}
                            </Link>
                        </li>

                    ))
                  }
                
            </ul>
        </nav>

    );
}
export default MyNav;