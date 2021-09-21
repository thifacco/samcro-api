/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CrewDocument = Crew & Document & any;

@Schema({ collection: 'crews' })
export class Crew {
   _id: String;
   
   @Prop({ required: true })
   name: String;
}

export const CrewSchema = SchemaFactory.createForClass(Crew);