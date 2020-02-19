import firebase from "../config/fbConfig";

const db = firebase.firestore();

export function updateAuctionEndDate(endTime) {
  db.collection("auctionInformation")
    .doc("waterAid")
    .update({
      endTime: firebase.firestore.Timestamp.fromDate(new Date(endTime))
    })
    .then(function(auction) {
      console.log(auction);
    })
    .catch(function(e) {
      console.log(e);
    });
}

export function getAuctionEndDate() {
  return db.collection("auctionInformation").doc("waterAid");
}
