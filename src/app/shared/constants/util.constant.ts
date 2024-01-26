import { EScore } from "../enums/quiz.enum"

export const ROUTES = {
  HOME: 'home',
  QUIZ: 'quiz'
}

export const COURSES = [
  {
    code: 'B2',
    desc: 'First',
    score: EScore.LOW
  },
  {
    code: 'C1',
    desc: 'Advanced',
    score: EScore.LOW
  },
  {
    code: 'B2',
    desc: 'First for Schools',
    score: EScore.AVERAGE
  },
  {
    code: 'B1',
    desc: 'Preliminary for Schools',
    score: EScore.HIGH
  },
  {
    code: 'A2',
    desc: 'Key for Schools',
    score: EScore.HIGH
  },
]