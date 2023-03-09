import { Mentor } from "../model/Mentor";
import { Person } from "../model/Person";

export const personReducer = (person: Person, action: any) => {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor: Mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        })
      };
    }
    case 'added': {
      const { targetName, targetTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: targetName, title: targetTitle }]
      }
    }
    case 'deleted': {
      const { target } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor: Mentor) => {
          return mentor.name !== target;
        })
      };
    }
    default:
      throw new Error("알 수 없는 액션 타입이다.")
      break;
  }
}