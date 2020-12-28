# Open Pull Request Chatwork Notifier  javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `chatwork-api-token`

**Required**  
Chatwork authentication token.  

### `chatwork-room-id`

**Required**  
Chatwork room id.  

### `github-token`

The GitHub token used to create an authenticated client.  

## Example usage

```yml
uses: actions/hello-world-javascript-action@v1.1
with:
who-to-greet: 'Mona the Octocat'
```
