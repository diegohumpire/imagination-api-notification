# Imagination Notification API

Azure Function App that uses the [Imagination API](https://github.com/diegohumpire/imagination-api)

## Introduction
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

## Requeriments
- NodeJS 20

## Environment Variables

Make a copy of the `local.settings.json.example` file and rename it to `local.settings.json`. Fill in the values for the environment variables.

```json
{
    "IsEncrypted": false,
    "Values": {
        "FUNCTIONS_WORKER_RUNTIME": "node",
        "AzureWebJobsFeatureFlags": "EnableWorkerIndexing",
        "FUNCTIONS_EXTENSION_VERSION": "~4",
        "AzureWebJobsStorage": "UseDevelopmentStorage=true",
        "NODE_ENV": "local|development",
        "SENDGRID_API_KEY": "",
        "MAILTRAP_USERNAME": "",
        "MAILTRAP_PASSWORD": ""
    }
  }

```
## Install dependencies

```bash
npm install
```

## Run local

```bash
npm run start
```

## Debugging

To debug the Azure Function App, you can use the `NodeJS: Attach to Remote Container` configuration in VSCode. This will attach the debugger to the running container.

Press F5 to start debugging on VS code.

## TODO
- Add more unit tests...
- Saved mails grouped by projects. Ex: Project1 -> 3 mails saved, Project2 -> 2 mails saved and findBy SavedId and ProjectId
- Notifications by collections. Send a Push and Mail at sametime
- Schedule notifications
- Push Notifications
- SMS
- More providers
- Mail HTML text supports
- Mail HTML with variable supports