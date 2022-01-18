import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import config from "./config.js";

const app = initializeApp(config);
const db = getFirestore(app);

//get Materials Data from FireStore
async function getMaterials(db) {
  const matCol = collection(db, "materials");
  const matSnapshot = await getDocs(matCol);
  const matList = matSnapshot.docs.map((doc) => doc.data());
  return matList;
}
//Resolve the promise
const resolveGetMaterials = getMaterials(db).then((dat) => {
  return dat;
});
//Push data to array to later use
const materialsArray = [];
const printMaterials = async () => {
  const result = await resolveGetMaterials;
  return materialsArray.push(result);
};
printMaterials();

//get Materials Data from FireStore
async function getPoints(db) {
  const pointCol = collection(db, "points");
  const pointSnapshot = await getDocs(pointCol);
  const pointList = pointSnapshot.docs.map((doc) => doc.data());
  return pointList;
}
//Resolve the promise
const resolveGetPoints = getPoints(db).then((dat) => {
  return dat;
});
//Push data to array to later use
const pointsArray = [];
const printPoints = async () => {
  const result = await resolveGetPoints;
  return pointsArray.push(result);
};
printPoints();

//Export the Data to the App
const materials = materialsArray
const points = pointsArray
const baseimg =
  "https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844";

export { baseimg };
