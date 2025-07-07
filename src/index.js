import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

async function bootstrap() {
  try {
    await initMongoConnection(); // ⬅️ Спочатку підключаємося до бази
    await setupServer(); // ⬅️ Потім запускаємо сервер
  } catch (err) {
    console.error('❌ Помилка під час запуску:', err.message);
    process.exit(1); // аварійне завершення, якщо не вдалося зʼєднатися
  }
}

bootstrap();
