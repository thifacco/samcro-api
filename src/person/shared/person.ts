/* eslint-disable prettier/prettier */
import { Document } from "mongoose";
import { Crew } from "src/crew/shared/crew";

export class Person extends Document {
   firstName: string;
   middleName: string;
   lastName: string;
   nickName: string;
   image: string;
   birthYear: String;
   deathYear: String;
   // familyTree: [{
   //    person: Person,
   //    relationship: string;
   // }];
   bio: string;
   // affiliations: [{
   //    crew: Crew,
   //    ride: boolean,
   //    vote: boolean,
   //    titles: string[]
   // }];
   ocuppations: string[];
   motorcycles: string[];
   // murders: [{
   //    person: Person,
   //    reason: string
   // }];
   favoriteGuns: string[];
   portrayed: string;
}