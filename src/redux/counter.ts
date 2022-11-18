import { atom } from "recoil";
import { ICounter, IDrafts } from "../types";



export const counterState = atom<ICounter[]>({
  key: "counterState",
  default: [{
    id: "1",
    count: ""
  }]
})

export const draftState = atom<IDrafts[]>( {
  key: "draftState",
  default: [{
    id: "1",
    text: "",
    createdAt: "",
    scheduledAt: ""
  }]
})

