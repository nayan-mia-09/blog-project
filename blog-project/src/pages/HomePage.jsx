import { useEffect, useState } from "react"
import BlogList from "../components/BlogList"
import Layout from "../layout/Layout"
import { postLatest } from "../api/ApiRequest";
import Loader from "../components/Loader";


const HomePage = () => {

  let [list, setList] = useState(null);

  useEffect(()=>{
    (async()=>{
      let res = await postLatest();
      setList(res)

    })()
  },[])




  return (
    <Layout>
      {
        list===null?<Loader/>:<BlogList list={list}/>
      }
    </Layout>
  )
}

export default HomePage
