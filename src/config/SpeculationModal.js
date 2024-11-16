import { db } from "./DBconfig";
import { collection, addDoc, updateDoc, doc, orderBy, getDocs, query, where, getDoc, deleteDoc } from 'firebase/firestore';
import { rdb } from "./DBconfig";
import { ref, set } from 'firebase/database';


export const addSpeculation = async ( pid, data, duration, endAt )=> {

    var date = new Date();
    var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
    
    try {
      const docRef = await addDoc(collection(db, 'speculations'), {
        sname : data.sname,
        flow : data.flow,
        soiltype : data.soiltype,
        area : data.area,
        startAt :  data.startAt,
        duration : duration,
        endAt :  endAt,
        device : [],
        pid: pid,
        uid: sessionStorage.getItem('uid'),
        createdAt : time,
        modifiedAt : time
      })
      return docRef.id

    } catch (error) {  return false  }
}



export const getSpeculations = async ({ pid })=>{ 

  const data = [];
  const request = query( collection(db, "speculations"), where("pid", "==", pid) );
  const querySnapshot = await getDocs(request);
  querySnapshot.forEach((doc) => {
    data.push({...doc.data(), sid: doc.id })
  })
  return data
}


export const findAllSpeculations = async ( pid )=>{ 

  const data = [];
  const request = query( collection(db, "speculations"), where("pid", "==", pid) );
  const querySnapshot = await getDocs(request);
  querySnapshot.forEach((doc) => {
    data.push({...doc.data(), sid: doc.id })
  })
  return data
}



export const getSpeculationById = async ( sid ) => {

  try {
    const docRef = doc( db, 'projects', sid );
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {  return docSnapshot.data()  } 
    else {  return null  }

  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};


export const UpdateSpeculation = async ( sid , data )=> {

  try {  
    const speculationRef = doc(db, "speculations", sid);
    var date = new Date();
    var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
  
    await updateDoc(speculationRef, {
      flow : data.flow,
      soiltype : data.soiltype,
      modifiedAt : time,
    });
    return true

  } catch (error) {  return false  }
}


export const delSpeculation = async ( sid )=>{
  await deleteDoc(doc(db, "speculations", sid));
}

  // ************************************  * REALTIME DATABESE CODE  *  *******************************************


  export async function addToCalendars( sid, sname, startAt, duration, endAt, args ){
   
      const data = {
            calendar : args ,
            sname : sname,
            startAt: startAt,
            endAt : endAt,
            duration : duration
          }
      // console.log(data)
      try {
          const deviceRef = ref(rdb, `Calendars/${ sid }`);
          await set(deviceRef, data);
          console.log("Realtime database ( Calendars collection ) added successfully!");

      } catch (error) { console.error("Error adding document: ", error); }

}
