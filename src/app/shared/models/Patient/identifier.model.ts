export interface Identifier {
  origin: number,
  period: number,
  factor?: number,
  lowerLimit?: number,
  upperLimit?: number,
  dimensions: number,
  data?: string
}
