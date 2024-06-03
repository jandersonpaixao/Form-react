import { ReactNode } from "react";

export type HeaderProps ={
  image:{
    src: string;
    alt: string;
  }
  children: ReactNode
}