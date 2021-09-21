/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Crew } from 'src/crew/shared/crew';
import { type } from 'os';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PersonDocument = Person & Document & any;

@Schema({ collection: 'persons' })
export class Person extends Document {
   _id: String;

   @Prop({ required: true })
   firstName: String;

   @Prop()
   middleName: String;

   @Prop()
   lastName: String;

   @Prop()
   nickName: String;

   @Prop()
   gender: String;

   @Prop()
   image: String;

   @Prop()
   birthYear: String;

   @Prop()
   deathYear: String;

   @Prop()
   causeOfDeath: String;
   
   // familyTree: [{
   //    person: Person,
   //    relationship: String,
   // }],

   @Prop()
   bio: String;

   // affiliations: [{
   //    crew: Crew,
   //    ride: Boolean,
   //    vote: Boolean,
   //    titles: [String]
   // }],
   
   @Prop()
   ocuppations: [String];

   @Prop()
   motorcycles: [String];

   // murders: [{
   //    person: Person,
   //    reason: String
   // }],

   @Prop()
   favoriteGuns: [String];

   @Prop()
   portrayed: String

}

export const PersonSchema = SchemaFactory.createForClass(Person);
