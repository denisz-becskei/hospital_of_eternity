import { Period } from "./period.model";

export interface HumanHame {
  use?: string,
  text?: string,
  family?: string,
  given?: string[],
  prefix?: string[],
  suffix?: string[],
  period?: Period
}
