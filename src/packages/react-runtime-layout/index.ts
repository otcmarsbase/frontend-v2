import { overrideDev } from './overrideDev';
import { overrideProd } from './overrideProd';
import './extension.d';

export function override() {
  if (process.env.NODE_ENV === 'production') {
    overrideProd();
  } else {
    overrideDev();
  }
}
