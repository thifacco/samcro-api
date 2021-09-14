/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Crew } from 'src/crew/shared/crew';
import { Person } from '../shared/person';

export const PersonSchema = new mongoose.Schema({
   firstName: String,
   middleName: String,
   lastName: String,
   nickName: String,
   image: String,
   birthDate: Date,
   deathDate: Date,
   parents: [{
      person: Person,
      parentType: String,
   }],
   bio: String,
   affiliations: [{
      crew: Crew,
      ride: Boolean,
      vote: Boolean,
      badges: [String]
   }],
   motorcycles: [String],
   murders: [{
      person: Person,
      reason: String
   }]
})