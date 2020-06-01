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
  <summary>Example stream</summary>
  
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
  <summary>Example stream</summary>
  
  ~~~json
  {
     "kind":"youtube#searchResult",
     "etag":"0zkQb93jCg8yy0Q5yXZiUPBmazo",
     "id":{
        "kind":"youtube#video",
        "videoId":"tdYDqmOdolg"
     },
     "snippet":{
        "publishedAt":"2020-05-30T03:03:17Z",
        "channelId":"UCmQK52xYtdeg7EYiQhqEeZA",
        "title":"Relaxing Sleep Music 24/7, Calming Music, Insomnia, Sleep, Meditation, Zen, Study, Deep Sleep Music",
        "description":"Relaxing Sleep Music 24/7, Calming Music, Insomnia, Sleep, Meditation, Zen, Study, Deep Sleep Music - Are you looking for calming music, relax music or ...",
        "thumbnails":{
           "default":{
              "url":"https://i.ytimg.com/vi/tdYDqmOdolg/default_live.jpg",
              "width":120,
              "height":90
           },
           "medium":{
              "url":"https://i.ytimg.com/vi/tdYDqmOdolg/mqdefault_live.jpg",
              "width":320,
              "height":180
           },
           "high":{
              "url":"https://i.ytimg.com/vi/tdYDqmOdolg/hqdefault_live.jpg",
              "width":480,
              "height":360
           }
        },
        "channelTitle":"Body Mind Zone",
        "liveBroadcastContent":"live",
        "publishTime":"2020-05-30T03:03:17Z"
     },
     "liveStreamingDetails":{
        "actualStartTime":"2020-05-30T03:05:12.000Z",
        "scheduledStartTime":"2020-05-30T03:03:17.000Z",
        "concurrentViewers":"2195",
        "activeLiveChatId":"Cg0KC3RkWURxbU9kb2xnKicKGFVDbVFLNTJ4WXRkZWc3RVlpUWhxRWVaQRILdGRZRHFtT2RvbGc"
     }
  }
  ~~~
</details>

## Mixer
https://dev.mixer.com/rest/index.html
<details>
  <summary>Example stream</summary>
  
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
