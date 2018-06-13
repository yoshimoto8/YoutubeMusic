import firebase from "firebase";

export default function fetchArtistAPI() {
  const db = firebase.firestore();
  const fetchData = db
    .collection("artists")
    .get()
    .then(Snapshot => {
      const artistLists = [];
      Snapshot.forEach(doc => {
        artistLists.push({ ...doc.data(), key: doc.id });
      });
      return artistLists;
    });
  return fetchData;
}
