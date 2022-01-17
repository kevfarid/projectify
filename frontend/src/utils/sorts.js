import { compareAsc, compareDesc } from 'date-fns'

const dateByAsc = (a, b) => compareAsc(new Date(a), new Date(b))

const dateByDesc = (a, b) => compareDesc(new Date(a), new Date(b))

export default {
  dateByAsc,
  dateByDesc,
}
