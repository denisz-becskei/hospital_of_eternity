import { Patient } from './patient.model';
export interface BackboneElementLink {
  other: Patient,
  type: string
}
