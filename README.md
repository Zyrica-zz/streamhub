# Stream Hub
- `npm i` - to install all dependencies
- `npm run dev:server` - to start the node backend server @:31337
- `npm run dev:client` - to start the frontend dev server @:1337

The frontend dev server uses a proxy to route:
- `http://localhost:1337/api` -> `http://localhost:31337`

# Environment variables
- Create a `.env` file in root dir
- Each line represent a environment variable with the following syntaax `variable=value`
## Variables
- `twitch_client_id` used to access twitch
