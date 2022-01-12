import { useParams} from "react-router-dom"

const Contact = (props)=>{
    let params = useParams()
    return( 
        <>
         { params.contactOP ==='gmail' && <h1>milad.kareem@gmail.com</h1>}
         { params.contactOP ==='twitter' && <h1>twitter.com/milad_a_kareem</h1>}
         { params.contactOP ==='facebook' && <h1>facebook.con/milad_a_kareem</h1>}
         { params.contactOP ==='instagram' && <h1>instagram.com/milad_a_kareem</h1>}
        </>
    )
}

export default Contact