import { useState,useEffect} from 'react';

const useRWD=()=>{
    const [mobile,setMobile] = useState("");

    const handleRWD=()=>{
        if(window.innerWidth>=821)
            setMobile("PC");
        else 
            setMobile("tablet");
    }

    useEffect(()=>{
    
        window.addEventListener('resize',handleRWD);
        handleRWD();
        
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return mobile;
}

export default useRWD;