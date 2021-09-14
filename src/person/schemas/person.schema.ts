/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Crew } from 'src/crew/shared/crew';
import { Person } from '../shared/person';

export const PersonSchema = new mongoose.Schema({
   firstName: String,
   middleName: String,
   lastName: String,
   nickName: String,
   gender: String,
   image: String,
   birthYear: String,
   deathYear: String,
   causeOfDeath: String,
   // familyTree: [{
   //    person: Person,
   //    relationship: String,
   // }],
   bio: String,
   // affiliations: [{
   //    crew: Crew,
   //    ride: Boolean,
   //    vote: Boolean,
   //    titles: [String]
   // }],
   ocuppations: [String],
   motorcycles: [String],
   // murders: [{
   //    person: Person,
   //    reason: String
   // }],
   favoriteGuns: [String],
   portrayed: String
})