import { Types } from './types';

export class User {
    id!: string;
    timestamp!: string;
    goalName!: string;
    goalType!: string;
    frequency!: number;
    duration!: number;
    checkin!: number;    
    isDeleting: boolean = false;}