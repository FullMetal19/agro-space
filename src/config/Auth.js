import { auth, db } from "./DBconfig";
import { doc, getDoc, setDoc, updateDoc, } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

 
export const Authentication = async( data ) => {
    const res = await signInWithEmailAndPassword( auth, data.email, data.pswd);
    console.log(res)
    return res
};
  
 
export const SignOut = async () => {
    sessionStorage.clear();
    const res = await auth.signOut();
    return res
};
  

export const UserRegistration = async ( data ) => {
    try {                         
      const userCredential = await createUserWithEmailAndPassword( auth, data.email , data.pswd);
      const userId = userCredential.user.uid;
      var date = new Date();
      var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 

      await setDoc(doc(db, 'users', userId), {
        fname: data.fname,
        lname: data.lname,
        sex: data.sex,
        email: data.email,
        phone: data.phone,
        createdAt: time,
        modifiedAt: time,
      });
      return true; 

    } catch (error) {   return false  }
};


export const getUserById = async ( userId ) => {

    try {
      const docRef = doc( db, 'users', userId );
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {  return docSnapshot.data()  } 
      else {  return null  }

    } catch (error) {
      console.error("Error fetching document:", error);
      throw error;
    }
};


export const UpdateUser = async ( data )=> {

  try {  
    const userRef = doc(db, "users", sessionStorage.getItem('uid') );
    
    var date = new Date();
    var time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
  
    await updateDoc(userRef, {
      fname: data.fname,
      lname: data.lname,
      sex: data.sex,
      phone: data.phone,
      modifiedAt : time,
    });
    return true

  } catch (error) {  return false  }
}

  