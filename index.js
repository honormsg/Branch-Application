const data = {
    resident: 3,
    exteriorMaterial: "brick",
    roofShape: "gable",
    firePlace: 1,
    homeUse: "primary",
    homeQuality: "standard",
    construction: "frame",
    roofYear: 1993,
    basementType: "unfinished",
    woodStoves: 0,
    homePurchaseDate: "08/21/2021",
    homeType: "Single Home",
    homeAddress: "100 Beatrice Dr, Drayton, OH 45484",
};

  document.getElementById('resident').innerHTML = data.resident;
  document.getElementById('exterior').innerHTML = data.exteriorMaterial;
  document.getElementById('roofshape').innerHTML = data.roofShape;
  document.getElementById('fireplace').innerHTML = data.firePlace;
  document.getElementById('homeUse').innerHTML = data.homeUse;
  document.getElementById('homeQuality').innerHTML = data.homeQuality;
  document.getElementById('construction').innerHTML = data.construction;
  document.getElementById('roofYear').innerHTML = data.roofYear;
  document.getElementById('basementType').innerHTML = data.basementType;
  document.getElementById('woodStoves').innerHTML = data.woodStoves;
  document.getElementById('purchaseDate').innerHTML = data.homePurchaseDate;
  document.getElementById('homeType').innerHTML = data.homeType;
  document.getElementById('address').innerHTML = data.homeAddress;
