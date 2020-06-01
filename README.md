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
- [twitch_client_id](https://dev.twitch.tv/console/apps)
- [youtube_api_key](https://console.cloud.google.com/apis/credentials?project=substreams)


# Providers

## Twitch
https://dev.twitch.tv/docs/v5
<details>
  <summary>Example data</summary>
  
  ~~~json
  {
     "_id":38414053200,
     "game":"League of Legends",
     "broadcast_platform":"live",
     "community_id":"",
     "community_ids":[
  
     ],
     "viewers":21862,
     "video_height":1080,
     "average_fps":60,
     "delay":0,
     "created_at":"2020-06-01T08:01:48Z",
     "is_playlist":false,
     "stream_type":"live",
     "preview":{
        "small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_dopa2 -80x45.jpg",
        "medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_dopa2 -320x180.jpg",
        "large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_dopa2 -640x360.jpg",
        "template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_dopa2 -{width}x{height}.jpg"
     },
     "channel":{
        "mature":false,
        "status":"Dopa 도파 롤 1위 등반중",
        "broadcaster_language":"ko",
        "broadcaster_software":"",
        "display_name":"dopa24",
        "game":"League of Legends",
        "language":"ko",
        "_id":536083731,
        "name":"dopa24",
        "created_at":"2020-05-27T01:26:10.249119Z",
        "updated_at":"2020-06-01T11:45:12.857338Z",
        "partner":false,
        "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/4a35691a-b -40f8-af90-72cc31d295d6-profile_image-300x300.png",
        "video_banner":null,
        "profile_banner":null,
        "profile_banner_background_color":"",
        "url":"https://www.twitch.tv/dopa24",
        "views":282273,
        "followers":103261,
        "broadcaster_type":"",
        "description":"신입 스트리머 도파입니다",
        "private_video":false,
        "privacy_options_enabled":false
     }
  }
  ~~~
</details>

## Youtube
https://developers.google.com/youtube/v3/docs/search/list
<details>
  <summary>Example data</summary>
  
  ~~~json
  {
     "kind":"youtube#searchResult",
     "etag":"NJ_iG25etJE-pNY8yol8fIbvQjs",
     "id":{
        "kind":"youtube#video",
        "videoId":"0b0o1ZPiejk"
     },
     "snippet":{
        "publishedAt":"2020-05-30T00:33:08Z",
        "channelId":"UCJMemx7yz_1QwXjHG_rXRhg",
        "title":"💀 Nonstop Horror Radio 💀 | 24/7 CreepyPasta and Bedtime Stories for Nightmares",
        "description":"Sit back and Enjoy some creepy pasta Horror. Great Halloween Horror Creepypasta stories, Reddit Nosleep stories, and Audiobooks From MrCreepyPasta for ...",
        "thumbnails":{
           "default":{
              "url":"https://i.ytimg.com/vi/0b0o1ZPiejk/default_live.jpg",
              "width":120,
              "height":90
           },
           "medium":{
              "url":"https://i.ytimg.com/vi/0b0o1ZPiejk/mqdefault_live.jpg",
              "width":320,
              "height":180
           },
           "high":{
              "url":"https://i.ytimg.com/vi/0b0o1ZPiejk/hqdefault_live.jpg",
              "width":480,
              "height":360
           }
        },
        "channelTitle":"MrCreepyPasta",
        "liveBroadcastContent":"live",
        "publishTime":"2020-05-30T00:33:08Z"
     },
     "liveStreamingDetails":{
        "actualStartTime":"2020-05-30T00:33:37Z",
        "concurrentViewers":"252",
        "activeLiveChatId":"EiEKGFVDSk1lbXg3eXpfMVF3WGpIR19yWFJoZxIFL2xpdmUqJwoYVUNKTWVteDd5el8xUXdYakhHX3JYUmhnEgswYjBvMVpQaWVqaw"
     },
     "channel":{
        "title":"MrCreepyPasta",
        "description":"CreepyPasta Story Time is a collection of terrifying stories that are brought to life by MrCreepyPasta! These Horror stories are posted Everyday.\nBe warned, these stories feature mature themes such as horror and the occult. Viewer Discretion is Advised.\n\nClick to Subscribe to MCP! http://bit.ly/SubMrCreepyPasta\nHorror Isn't \"Ad-Friendly\": https://www.patreon.com/MrCreepyPasta\n\nCheck out my New BOOK! A Collection of Creepy Pastas compiled by some of my all time favorite authors and friends. \nVolume 1: http://a.co/iNqTwRZ\nVolume 2: http://a.co/i0O9zks\n\nDownload Free MP3s\nhttps://soundcloud.com/mrcreepypasta\n\nLike me on Facebook & Twitter\nhttp://www.facebook.com/mrcreepypasta\nTwitter: @MrCreepyPasta0\n\nBe sure to submit a story to\nhttp://www.creepypasta.com\n\nTo request a story. Send me an email! mrcreepypasta@gmail.com\n\nVisit the store\nhttp://mrcreepypasta.spreadshirt.com",
        "publishedAt":"2011-01-04T08:19:55Z",
        "thumbnails":{
           "default":{
              "url":"https://yt3.ggpht.com/a/AATXAJzvwh-oPWBDq0pOLoHOiZrYxtEEIt-WoZl_Og=s88-c-k-c0xffffffff-no-rj-mo",
              "width":88,
              "height":88
           },
           "medium":{
              "url":"https://yt3.ggpht.com/a/AATXAJzvwh-oPWBDq0pOLoHOiZrYxtEEIt-WoZl_Og=s240-c-k-c0xffffffff-no-rj-mo",
              "width":240,
              "height":240
           },
           "high":{
              "url":"https://yt3.ggpht.com/a/AATXAJzvwh-oPWBDq0pOLoHOiZrYxtEEIt-WoZl_Og=s800-c-k-c0xffffffff-no-rj-mo",
              "width":800,
              "height":800
           }
        },
        "defaultLanguage":"en",
        "localized":{
           "title":"MrCreepyPasta",
           "description":"CreepyPasta Story Time is a collection of terrifying stories that are brought to life by MrCreepyPasta! These Horror stories are posted Everyday.\nBe warned, these stories feature mature themes such as horror and the occult. Viewer Discretion is Advised.\n\nClick to Subscribe to MCP! http://bit.ly/SubMrCreepyPasta\nHorror Isn't \"Ad-Friendly\": https://www.patreon.com/MrCreepyPasta\n\nCheck out my New BOOK! A Collection of Creepy Pastas compiled by some of my all time favorite authors and friends. \nVolume 1: http://a.co/iNqTwRZ\nVolume 2: http://a.co/i0O9zks\n\nDownload Free MP3s\nhttps://soundcloud.com/mrcreepypasta\n\nLike me on Facebook & Twitter\nhttp://www.facebook.com/mrcreepypasta\nTwitter: @MrCreepyPasta0\n\nBe sure to submit a story to\nhttp://www.creepypasta.com\n\nTo request a story. Send me an email! mrcreepypasta@gmail.com\n\nVisit the store\nhttp://mrcreepypasta.spreadshirt.com"
        },
        "country":"US"
     }
  }
  ~~~
</details>

## Mixer
https://dev.mixer.com/rest/index.html
<details>
  <summary>Example data</summary>
  
  ~~~json
  {
     "id":14804231,
     "name":"Ламповые посиделки ",
     "online":true,
     "viewersCurrent":2952,
     "token":"EtoZheSavior",
     "userId":19734341,
     "interactive":false,
     "hosteeId":null,
     "costreamId":null,
     "type":{
        "id":552673,
        "name":"Fallout 76",
        "parent":"Games",
        "description":null,
        "source":"player:57943",
        "viewersCurrent":2951,
        "coverUrl":"https://gameart.mixer.com/art/552673/cover.jpg?locked",
        "backgroundUrl":"https://gameart.mixer.com/art/552673/background.jpg?locked",
        "online":27,
        "availableAt":null
     }
  }
  ~~~
</details>
