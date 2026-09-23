export type TerminalType =
  | "International"
  | "Regional"
  | "Premium";

export interface Terminal {
  id: string;
  code: string;
  name: string;
  type: TerminalType;
  description: string;
  gates: number;
  airlines: number;
  capacity: string;
  location: string;
  facilities: string[];
  featured?: boolean;
}