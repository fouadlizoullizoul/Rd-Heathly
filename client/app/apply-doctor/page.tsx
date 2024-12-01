import Docotorform from "../components/Docotorform"
import Layout from "../components/home/Layout"


const DocotorPage = ()=>{
    return(
        <Layout>
            <h1 className='text-2xl font-semibold text-green-900 mb-10'>Apply Docotor</h1> 
           <Docotorform/>
        </Layout>
    )
}
export default DocotorPage