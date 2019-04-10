function howMuchILoveYou(nbPetals) {
 let whatToSay = ['I love you','a little','a lot','passionately','madly','not at all'];
 while (nbPetals>0){
   if(nbPetals<=whatToSay.length){
     return whatToSay[(nbPetals-1)];
   } else {
     return whatToSay[(nbPetals-1)%6];
   }
 }
}




//Another solution 


const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]