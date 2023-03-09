import { Mentor } from "./Mentor";

export interface Person {
  name: string | null;
  title: string | null;
  mentors: Mentor[],
}