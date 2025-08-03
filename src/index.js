import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
//async function bootstrap() {
//try {
//await initMongoConnection(); // ⬅️ Спочатку підключаємося до бази
//  await setupServer(); // ⬅️ Потім запускаємо сервер
// } catch (err) {
//   console.error('❌ Помилка під час запуску:', err.message);
//   process.exit(1); // аварійне завершення, якщо не вдалося зʼєднатися
// }
//}

const bootstrap = async () => {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
};

void bootstrap();
