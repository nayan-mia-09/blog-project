import { useParams } from "react-router-dom"
import Layout from "../layout/Layout"
import { useEffect, useState } from "react"
import { postByCategory } from "../api/ApiRequest"
import Loader from "../components/Loader"
import BlogList from "../components/BlogList"


const ByCategoryPage = () => {
  let {categoryID}=useParams();

    let [list,SetList]=useState(null);

    useEffect(()=>{
        (async ()=>{
            let res= await postByCategory(categoryID);
            SetList(res);
        })()

    },[categoryID])

  return (
    <Layout>
      {
        list===null?<Loader/>:<BlogList list={list}/>
      }
    </Layout>
  )
}

export default ByCategoryPage
