// Interface is a contractual relationship with some the behaviors you are contracting with
// By default interfaces are abstract
export interface GpsListener {
  location(): void;
}
