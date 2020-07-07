/**
 * This interface has been moved to its own files since
 * its used in both MaterialTable and MaterialRow
 */
export interface Material {
  id: string;
  name: string;
  volume: number;
  deliverDate: Date;
  color: string;
  cost: number;
}
