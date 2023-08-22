export namespace User {
  export interface User {
    resource: 'user';
    id: string;

    created_at: number;
    profile: UserProfile;
  }

  export interface UserProfile {
    resource: 'user_profile';

    nickname: string;
  }
}
