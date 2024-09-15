import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs ,getDoc,doc} from "firebase/firestore";
import { db ,firestore} from "./firebase/config";


export default function DocumentComponent() {
const [computersData,setcomputersData]=useState()   

useEffect(() => {
    
    const fetchComputersData = async () => {
        try {
          const collectionRef = firestore.collection('updateDoc')
          const snapshot  = await collectionRef.get();
          const fetchedData = snapshot.docs.map(doc => doc.data());
          setcomputersData(fetchedData);
          console.log(fetchedData);
          // console.log(fetchedData);
  
  
        } catch (error) {
          console.error('Error fetching data from Firestore:', error);
        }finally{
        }
      };
    fetchComputersData()
   


  }, []);

  return (
    <div>
        {computersData?(computersData.map((computer,i)=>{
                return(
                    <div>
                        <img src={computer.image_url} alt="not found" className="w-3/4 mx-auto mt-12"/>
                        <div className="w-3/4 mx-auto mt-12 text-2xl">#1 {computer.field_1}</div>
                        <div className="w-3/4 mx-auto mt-12 text-2xl">#2 {computer.field_2}</div>
                    </div>
                )})):(<div></div>)}
    </div>
  )
}
