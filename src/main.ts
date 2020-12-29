import * as core from '@actions/core';
import {context} from '@actions/github';
import ChatworkApi from 'chatwork-api-client';

process.on('unhandledRejection', handleError);
main().catch(handleError);

async function main(): Promise<void> {
  const eventName = context.eventName ?? '';
  const payload = context.payload ?? {};
  const action = payload.action ?? '';
  if (eventName !== 'pull_request' || action !== 'opened') {
    throw new Error('Valid only if you open a pull request');
  }
  const pullRequest = payload.pull_request;
  const title = pullRequest?.title ?? '';
  const body = pullRequest?.body ?? '';
  const url = pullRequest?.html_url ?? '';
  const message = `[info]
[title]${title}[/title]
${body}
[hr]
${url}
[/info]
`;

  const chatworkApiToken = core.getInput('chatwork-api-token');
  const api = new ChatworkApi(chatworkApiToken);
  const chatworkRoomId = core.getInput('chatwork-room-id');
  await api.postRoomMessage(chatworkRoomId, {body: message});
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(err: any): void {
  console.error(err);
  core.setFailed(`Unhandled error: ${err}`);
}
