import { db } from "./DBconfig";
import { collection, addDoc, updateDoc, doc, where, getDocs, query, getDoc, deleteDoc } from 'firebase/firestore';


export const addProject = async ( data )=> {

    var date = new Date();
    var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
    
    try {
      await addDoc(collection(db, 'projects'), {
        pname : data.pname,
        area : data.area,
        region : data.region,
        address : data.address,
        sndphone : data.sndphone,
        createdAt : time,
        modifiedAt : time,
        uid: sessionStorage.getItem('uid')
      })
      return true

    } catch (error) {  return false  }
}



export const UpdateProject = async ( pid , data )=> {

    try {  
      const projectRef = doc(db, "projects", pid);
      var date = new Date();
      var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
    
      await updateDoc(projectRef, {
        pname : data.pname,
        area : data.area,
        region : data.region,
        address : data.address,
        sndphone : data.sndphone,
        modifiedAt : time,
      });
      return true

    } catch (error) {  return false  }
}


export const getProjects = async ()=>{ 
    const data = [];
    const request = query( collection(db, "projects"), where("uid", "==", sessionStorage.getItem('uid')) );
    const querySnapshot = await getDocs(request);
    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), pid: doc.id })
    })
    return data
}


export const getProjectById = async ( pid ) => {

    try {
      const docRef = doc( db, 'projects', pid );
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {  return docSnapshot.data()  } 
      else {  return null  }

    } catch (error) {
      console.error("Error fetching document:", error);
      throw error;
    }
};


export const delProject = async ( pid )=>{
    await deleteDoc(doc(db, "projects", pid));
  }