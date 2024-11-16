import { db } from "./DBconfig";
import { setDoc, doc, getDoc } from 'firebase/firestore';


export const addITK = async ( sid, sname, desc, fertilizer, phyto )=> {

    var date = new Date();
    var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
    const collectionName = "itks";
    const customID = sid; // Replace with your desired ID
    const inputs = {
        desc : desc,
        fertilizer : fertilizer,
        phyto : phyto,
        sname : sname,
        createdAt : time,
        modifiedAt : time,
    };
    try {
        await setDoc(doc(db, collectionName, customID), inputs);
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error writing document: ", error);
      }
}



export const getITKById = async ( sid ) => {

    try {
      const docRef = doc( db, 'itks', sid );
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {  return docSnapshot.data()  } 
      else {  return null  }

    } catch (error) {
      console.error("Error fetching document:", error);
      throw error;
    }
};