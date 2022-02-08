import { Persona } from './persona';

export interface JwtResponse {
  headers: any;
  token: string;
  expirationDate: number;
  user: Persona;
}
