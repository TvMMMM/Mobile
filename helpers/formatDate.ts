import { format } from 'date-fns'

export const formatDate= (date:string) => {
  const formatedDate = format(new Date(date), "dd/MM/yyyy")
  return formatedDate
}
