// TODO: Пока тестовый тип для проверки работы `rootStore`, но в дальнейшем
// пригодится, когда будем реализовывать авторизацию
export type ProfileType = {
  username: string;
  meta: { token: string };
};
