import { BackboneElementCommunication } from './backbone-element-comm.model';
import { BackboneElementContact } from './backbone-element-contact.model';
import { Address } from './address.model';
import { ContactPoint } from './contact-point.model';
import { HumanHame } from './human-name.model';
import { Identifier } from './identifier.model';
import { BackboneElementLink } from './backbone-element-link.model';

export interface Patient {
  id: string,
  identifier?: Identifier[],
  active?: boolean,
  name?: HumanHame[]
  telecom?: ContactPoint[],
  gender?: string,
  birthDate?: Date,
  address?: Address
  maritalStatus?: string,
  photo?: string,
  contact?: BackboneElementContact[],
  communication?: BackboneElementCommunication[]
  generalPractitioner?: string[],
  managingOrganization?: string,
  link?: BackboneElementLink[],
  infection: string
}
