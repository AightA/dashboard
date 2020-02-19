import firebase from "../config/fbConfig";

const db = firebase.firestore();
const storage = firebase.storage();

export function getAllLotsByCurrentBidder(userID){
    return db.collection("lots").where("currentBidder","==", userID).get()
}

export function getLots() {
    return db.collection("lots").orderBy('lotName');
}

export function getLotById(lotId) {
    return db.collection("lots").doc(lotId);
}

export function getImageForLot(lotID, imageID) {
    return storage.ref().child('images/lots/' + lotID + '/' + imageID + '.jpg')
}


