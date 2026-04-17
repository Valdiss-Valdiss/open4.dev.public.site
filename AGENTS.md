# AGENTS.md - Инструкции для AI-агентов

## Общие правила

### Структура проекта

```
open4.dev/
├── site/                    # Текущая версия сайта
│   ├── index.html
│   ├── work.html
│   ├── services.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   └── work/
│       └── [case study pages]
├── temp/                    # Временные файлы (мусор)
├── backup/                  # История бэкапов
│   ├── YYYY-MM-DD_HH-MM-SS.zip
│   ├── history.md
│   └── n8n/
│       ├── *.json
│       └── n8n_history.md
├── AGENTS.md               # Этот файл
├── CURRENT_STATE.md
└── TECHNICAL_SPEC.md
```

---

## Workflow изменений

### Перед любым изменением (ОБЯЗАТЕЛЬНО)

1. **Создать бэкап:**
   - Папка: `C:\projects\opencode\open4.dev\backup`
   - Имя: `YYYY-MM-DD_HH-MM-SS.zip`
   - Архивировать ВСЮ папку `site/`

2. **Записать в history.md** (внутри backup/):
   ```markdown
   ## Change #N - YYYY-MM-DD_HH-MM-SS

   **Command:** [полный текст команды пользователя]

   **Action:** [что именно сделано]

   **Files:** [список изменённых файлов]

   **Archive:** YYYY-MM-DD_HH-MM-SS.zip
   ```

3. **Выполнить изменения локально в site/**

4. **Пуш на GitHub** — ТОЛЬКО после подтверждения пользователя

---

## GitHub репозиторий

### Информация
- **URL:** https://github.com/Valdiss-Valdiss/open4.dev.public.site
- **Branches:** main (активная)
- **Назначение:** GitHub Pages хостинг сайта open4.dev

### Креденшналы
Токен для доступа (Personal Access Token):
- Файл: `C:\projects\opencode\meetsu_on_python\.git\config`
- Паттерн: `github_pat_*`

### Как пушить через GitHub API
```powershell
$headers = @{
    'Authorization' = 'Bearer <ваш_токен_из_meetsu_on_python\.git\config>'
    'X-GitHub-Api-Version' = '2022-11-28'
}

# 1. Получить SHA файла
GET https://api.github.com/repos/Valdiss-Valdiss/open4.dev.public.site/contents/[path]

# 2. Загрузить файл (токен см. в C:\projects\opencode\meetsu_on_python\.git\config)
PUT https://api.github.com/repos/Valdiss-Valdiss/open4.dev.public.site/contents/[path]
Body: { message, content (base64), sha }
```

### Готовые скрипты (в temp/)
- `upload_all.ps1` — загружает все файлы из site/
- После успешного пуша — удалить скрипт из temp/

---

## Правила работы с файлами

### Временные файлы и архивы

**Проверка архивов/бэкапов:**
- Открыл архив "just чтобы посмотреть" → мусор в `temp/`
- После проверки: удалить разархивированное из `temp/`

**Легитимное восстановление:**
- Если пользователь просит восстановить проект → файлы идут в `site/`
- Это замена текущего состояния, а не "проверка"

**Скрипты для загрузки:**
- Все временные скрипты (.ps1, .py и т.д.) → только в `temp/`
- После успешного пуша — удалить скрипт из `temp/`

### Создание файлов в корне проекта

- ❌ НЕ удалять и НЕ перезаписывать файлы в корне проекта без явной команды пользователя
- ❌ НЕ создавать новые файлы/папки в корне без явной команды пользователя
- ✅ Исключение: папка `temp/` для временных файлов

---

## Правила работы с n8n через MCP

### Идентификация workflows
Все workflows проекта open4.dev содержат "open4" (без учета регистра) в имени.

### Версионирование
При изменении workflow через MCP:
- Текущая версия: open4 Lead Bot v5
- Следующая версия: open4 Lead Bot v6
- Каждая версия = новое имя workflow в n8n

### Бэкап перед изменениями (ОБЯЗАТЕЛЬНО)
Перед КАЖДЫМ изменением workflow через MCP:
1. Получить текущую версию workflow через `n8n_get_workflow`
2. Сохранить JSON в `C:\Projects\opencode\open4.dev\backup\n8n\[Current_Name].json`
3. Добавить запись в `C:\Projects\opencode\open4.dev\backup\n8n\n8n_history.md`
4. ТОЛЬКО ПОСЛЕ бэкапа - выполнять изменения

### Подтверждение пользователя
Любые изменения workflow требуют явного подтверждения пользователем.

---

## Workflow (кратко)

1. Получить команду от пользователя
2. Сделать бэкап site/ + запись в history.md
3. Выполнить изменения локально
4. Пуш на GitHub — после подтверждения
5. Удалить временные файлы из temp/
6. Сообщить пользователю о результате