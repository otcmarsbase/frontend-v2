import {
  AuthSignInCommand,
  AuthSignInGenerateMessageCommand,
  TestHelloCommand,
} from './Commands';
import { FindLotsQuery, FindOffersQuery } from './Queries';

export type Schema = {
  auth: {
    signInGenerateMessage(
      payload: AuthSignInGenerateMessageCommand.Payload,
    ): AuthSignInGenerateMessageCommand.Result;
    signIn(payload: AuthSignInCommand.Payload): AuthSignInCommand.Result;
  };
  test: {
    hello(payload: TestHelloCommand.Payload): TestHelloCommand.Result;
  };
  offer: {
    find(payload: FindOffersQuery.Payload): FindOffersQuery.Result;
  };
  lot: {
    find(payload: FindLotsQuery.Payload): FindLotsQuery.Result;
  };
};
