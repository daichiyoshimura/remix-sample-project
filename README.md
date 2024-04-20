# Sample app made by remix + vite

## Technical Stack

| Content           | Description |
| ----------------- | ----------- |
| language          | typescript  |
| framework         | remix       |
| library           | react       |
| css library       | tailwind    |
| build tool        | vite        |
| unit test         | vitest      |
| component catalog | storybook   |
| linter            | eslint      |
| formatter         | prettier    |

## Roles of Each Directory

| Directory   | Description                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| actions/    | The directory where Remix action functions are placed.                                                                                                                         |
| api/        | The directory containing functions responsible for communication from the Remix server-side to other backends.                                                                 |
| components/ | The directory containing generic React components.                                                                                                                             |
| features/   | The directory containing React components with domain-specific knowledge mixed in.　                                                                                           |
| hooks/      | The directory for placing React hooks.　                                                                                                                                       |
| loaders/    | The directory where Remix loader functions are placed.　                                                                                                                       |
| routes/     | The directory for organizing pages based on the Remix framework.                                                                                                               |
| util/       | The directory for placing utility functions. Especially, those that should only be used on the server-side or client-side should be placed in /server or /client respectively. |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
