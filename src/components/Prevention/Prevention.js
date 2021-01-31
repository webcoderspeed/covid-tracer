import React from 'react'
import InfoSection from '../InfoSection/InfoSection'
import Nav from '../NavBar/NavBar'
import {ObjOne, ObjTwo} from './Data'



const Prevention = () => {

    const bg = false;

    return (
     <>
     <Nav {...bg} />
     <InfoSection {...ObjOne} />
     <InfoSection {...ObjTwo} />
     <InfoSection {...ObjOne} />
     <InfoSection {...ObjTwo} />
     <InfoSection {...ObjOne} />
     <InfoSection {...ObjTwo} />
     </>
    )
}

export default Prevention
