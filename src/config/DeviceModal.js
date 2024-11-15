import { db } from "./DBconfig";
import { doc, updateDoc, arrayUnion, arrayRemove, serverTimestamp, getDoc} from 'firebase/firestore';

// FOR REALTIME DATABSE

import { rdb } from "./DBconfig";
import { ref, set } from 'firebase/database';


export async function addDeviceToSpeculation ( input ) {
    
    var date = new Date();
    var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 

    const docRef = doc(db, "speculations", input.sid);

    const updatedData = {
        device: arrayUnion(input.did),
        modifiedAt: time
    };
    try {
        await updateDoc(docRef, updatedData);
        console.log("Document updated successfully!");
    }   catch (error) {
        console.error("Error updating document: ", error);
    }
    
};




export async function removeDeviceFromSpeculation (sid, did ) {

    var date = new Date();
    var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
    
    try {
      const docRef = doc(db, 'speculations', sid);
  
      await updateDoc(docRef, {
        device: arrayRemove( did ),
        modifiedAt : time
      });
      return true

    } catch (error) { return false }
  }




  // ************************************  * REALTIME DATABESE CODE  *  *******************************************


export async function addDeviceToRealtimeDB( pid, input ){
   
    // console.log( input )

    const docRef = doc(db, "speculations", input.sid); // Replace "yourCollectionName" with your actual collection name
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data().flow);
      const flow = docSnap.data().flow
      const sname = docSnap.data().sname
      const data = {
            flow : flow,
            sid : input.sid,
            pid : pid,
            sname : sname,
            startAt: 0,
            endAt : 0, 
            state : 0
          }
      // console.log(data)
      try {
          const deviceRef = ref(rdb, `Devices/${ input.did}`);
          await set(deviceRef, data);
          console.log("Realtime database ( Devices Collection ) added successfully!");

      } catch (error) { console.error("Error adding document: ", error); }
  
    } else {
      console.log("No such document!");
      
    }
}





