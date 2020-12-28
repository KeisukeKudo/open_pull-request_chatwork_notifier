# Open Pull Request Chatwork Notifier  javascript action

Post the opened pull request to chatwork.  
Works only with the open action of the pull request event.  

## Inputs

### `chatwork-api-token`

**Required**  
Chatwork authentication token.  

### `chatwork-room-id`

**Required**  
Chatwork room id.   

## Example usage

```yml
name: example
on:
  pull_request:
    types: [opened]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Open Pull Requests Chatwork Notifier
        uses: KeisukeKudo/open_pull-request_chatwork_notifier@v1
        with:
          chatwork-api-token: ${{ secrets.CHATWORK_API_TOKEN }}
          chatwork-room-id: ${{ secrets.CHATWORK_ROOM_ID }}
```
