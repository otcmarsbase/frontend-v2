import { AuthThen } from './AuthThen';

export interface AuthThenHiddenProps {
  renderLoading?: () => React.ReactNode;
  children: React.ReactNode;
}

export function AuthThenHidden({ renderLoading, children }: AuthThenHiddenProps) {
  return (
    <AuthThen>
      {({ isAuthorized, isLoading }) =>
        isLoading && renderLoading ? renderLoading() : !isAuthorized && !isLoading ? children : void 0
      }
    </AuthThen>
  );
}
