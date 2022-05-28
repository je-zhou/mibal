import { ReactElement } from "react"

export default interface LinkMenu{
    title: string,
    links: LinkItem[]

  }
  
 interface LinkItem{
    name: string,
    path: string,
    icon: ReactElement
}