import app from "./DBconfig";

const db = app.firestore();


export const addDocument = (collection, data) => {
    return db.collection(collection).add(data);
  };
  
  // Example: Get All Documents from a Collection
  export const getDocuments = (collection) => {
    return db.collection(collection).get();
  };
  
  // Example: Update a Document
  export const updateDocument = (collection, docId, data) => {
    return db.collection(collection).doc(docId).update(data);
  };
  
  // Example: Delete a Document
  export const deleteDocument = (collection, docId) => {
    return db.collection(collection).doc(docId).delete();
  };
  