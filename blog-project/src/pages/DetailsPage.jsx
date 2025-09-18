import { useParams, } from "react-router-dom"
import { useEffect, useState } from "react"
import Layout from "../layout/Layout"
import { postDetails } from "../api/ApiRequest";
import Loader from "../components/Loader";
import BlogDetailsPage from "../components/BlogDetailsPage"


const DetailsPage = () => {

  let {postID} = useParams();
 let [list, SetList] = useState(null);
  
      useEffect(()=>{
          (async ()=>{
              let res= await postDetails(postID);
              SetList(res);
          })()
  
      },[postID])

  return (
    <Layout>
    {list === null?<Loader/>:<BlogDetailsPage list={list}/>}
    </Layout>
  )
}

export default DetailsPage
