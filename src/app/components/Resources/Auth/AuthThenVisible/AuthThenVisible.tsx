import { AuthThen } from './AuthThen';

export interface AuthThenVisibleProps {
  renderLoading?: () => React.ReactNode;
  children: React.ReactNode;
}

export function AuthThenVisible({ renderLoading, children }: AuthThenVisibleProps) {
  return (
    <AuthThen>
      {({ isAuthorized, isLoading }) =>
        isLoading && renderLoading ? renderLoading() : isAuthorized && !isLoading ? children : void 0
      }
    </AuthThen>
  );
}
