import { Model } from "./model.js";

const minX = document.querySelector(".minusx");
const plusX = document.querySelector(".plusx");
const minY = document.querySelector(".minusy");
const plusY = document.querySelector(".plusy");
const rotMin = document.querySelector(".rotminus");
const rotPlus = document.querySelector(".rotplus");

const target = document.querySelector(".main-grid");

const objsArr = [];
for (let i = 0; i < 12; i++) {
  objsArr.push(new Model());
}
objsArr.forEach((m) => {
  target.insertAdjacentHTML(m.render().place, m.render().style);
});

var objid = null;
const allObjs = document.querySelectorAll(".obj");
const allMods = document.querySelectorAll(".mod");
allMods.forEach((ms) => {
  ms.addEventListener("click", () => {
    objid = ms.id;
    console.log(objid);
  });
});

minX.addEventListener("click", offminusX);
plusX.addEventListener("click", offplusX);
minY.addEventListener("click", offminusY);
plusY.addEventListener("click", offplusY);
rotMin.addEventListener("click", rotmin);
rotPlus.addEventListener("click", rotplus);

function offminusX() {
  console.log("clicked offminusx");
  allObjs[objid].style.transform = objsArr[objid].updatePosRot(-100, 0, 0);
}

function offplusX() {
  allObjs[objid].style.transform = objsArr[objid].updatePosRot(100, 0, 0);
}

function offminusY() {
  allObjs[objid].style.transform = objsArr[objid].updatePosRot(0, -100, 0);
}

function offplusY() {
  allObjs[objid].style.transform = objsArr[objid].updatePosRot(0, 100, 0);
}

function rotmin() {
  allObjs[objid].style.transform = objsArr[objid].updatePosRot(0, 0, -45);
}

function rotplus() {
  allObjs[objid].style.transform = objsArr[objid].updatePosRot(0, 0, 45);
}
