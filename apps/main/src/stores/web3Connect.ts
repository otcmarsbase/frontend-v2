import { makeAutoObservable } from 'mobx';
import {IExtensionAccount} from "@/widgets/web3modal/types";


export class Web3ConnectStore {
  public public_key: string | undefined = undefined;
  public extensionState: IExtensionAccount | undefined = undefined;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  public setPuclicKey(new_public_key: string) {
    this.public_key = new_public_key;
  }
  public setExtensionState(newExtensionState: IExtensionAccount | undefined) {
    this.extensionState = newExtensionState;
  }
}
