import { Period } from './period.model';
export interface ContactPoint {
  system: string,
  value: string,
  use: string,
  rank: number,
  period: Period
}
