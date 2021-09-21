/* eslint-disable prettier/prettier */
export class Person {
   firstName: string;
   middleName: string;
   lastName: string;
   nickName: string;
   gender: string;
   image: string;
   birthYear: string;
   deathYear: string;
   causeOfDeath: string;
   relationships?: [{
      _personId: String,
      relationship: string;
   }];
   bio: string;
   affiliations?: [{
      _crewId: String,
      ride: boolean,
      vote: boolean,
      titles: string[]
   }];
   ocuppations: string[];
   motorcycles: string[];
   murders?: [{
      _personId: String,
      reason: string
   }];
   favoriteGuns: string[];
   portrayed: string;
}