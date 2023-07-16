export async function onAppLoad() {
  console.log('app load start');
  await new Promise((resolve) => setTimeout(resolve, 200));
  console.log('app loaded');
  // Здесь первоначальная прогрузка приложения
}
