### Требования
1. Node.js >=14.18.0  
2. Lerna (`npm i --global lerna`)  

### Установка
1. `git cone https://github.com/xzdwq/winestyle-lerna.git`  
2. `cd winestyle-lerna`  
3. `npm run initialize`  

### Запуск
1. Клиент WineStyle: `npm run dev` - (`http://localhost:3000`)  
    - (или запуск через lerna: `npm run dev:ws`)  
2. Storybook: `npm run storybook` - (`http://localhost:6006`)  

### Структура проекта
```bush
.storybook/         # Конфигурации Storybook
app/                # Директория приложений
    winestyle/      # Клиентское приложение WineStyle
libs/               # Директория библиотек
stories/            # Директория компонентов Vue, Storybook и глобальных стилей
    components/     # Директория компонентов Vue и Storybook
    globals/        # Директория глобальных стилевых примитивов
tailwind.config.js  # Конфигурация Tailwind
```