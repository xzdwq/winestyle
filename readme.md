### Требования

1. Node.js >=14.18.0

### Установка

1. `git cone https://github.com/xzdwq/winestyle.git`
2. `cd winestyle`
3. `npm run i`

### Запуск

1. Клиент WineStyle: `npm run dev` - (`http://localhost:3000`)
2. Storybook: `npm run storybook` - (`http://localhost:6006`)

### Структура проекта

```bush
.storybook/         # Конфигурации Storybook
src/                # Директория клинтского приложения
stories/            # Директория компонентов Vue, Storybook и глобальных стилей
    components/     # Директория компонентов Vue и Storybook
    globals/        # Директория глобальных стилевых примитивов
tailwind.config.js  # Конфигурация Tailwind
```
