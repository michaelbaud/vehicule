var Vehicule = function(modele, km, premium) {
self = this;
  this.modele = modele;
  this.km = km;
  this.couleur = "gris";
  this.moteur = "V6";
  
  if(premium) {
    this.couleur = "platinium";
    this.moteur = "V12";
  }
  
  self.addTrip = function(newKm) {
    if(newKm > 0) {
      this.km += newKm;
    }
  }
  
};

var twingo = new Vehicule("renault", 20, false);

twingo.addTrip(500)

console.log(twingo)