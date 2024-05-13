export const LoginDeviceType = ['PC', 'ANDROID', 'IOS'] as const;
export type LoginDeviceType = (typeof LoginDeviceType)[number];
