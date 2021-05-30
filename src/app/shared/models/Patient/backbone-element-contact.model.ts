import { Period } from './period.model';
import { Address } from './address.model';
import { ContactPoint } from './contact-point.model';
import { HumanHame } from './human-name.model';
export interface BackboneElementContact {
  relationship?: string[],
  name?: HumanHame,
  telecom?: ContactPoint[],
  address?: Address,
  gender?: string,
  organization?: string,
  period?: Period
}
