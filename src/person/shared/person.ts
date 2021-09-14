/* eslint-disable prettier/prettier */
import { Document } from "mongoose";
import { Crew } from "src/crew/shared/crew";

export class Person extends Document {
   firstName: string;
   middleName: string;
   lastName: string;
   nickName: string;
   image: string;
   birthDate: Date;
   deathDate: Date;
   parents: [{
      person: Person,
      parentType: string;
   }];
   bio: string;
   affiliations: [{
      crew: Crew,
      ride: boolean,
      vote: boolean,
      badges: string[]
   }];
   motorcycles: string[];
   murders: [
      person: Person,
      reason: string
   ]
}