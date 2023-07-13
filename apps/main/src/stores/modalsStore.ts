import {makeAutoObservable} from 'mobx';
import {ReactNode} from "react";
export class ModalsStore {
  public show = false;
  public children: ReactNode | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  public showModal(body:ReactNode | null) {
    this.show = true;
    this.children = body;
  }

  public closeModal() {
    this.show = false;
    this.children = null;
  }
}
