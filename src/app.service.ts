import { Injectable } from '@nestjs/common';
import {
  getPersonalAccessTokenHandler,
  WebApi,
  IWebApiRequestSettings,
} from 'azure-devops-node-api';
import { GitPullRequest } from 'azure-devops-node-api/interfaces/GitInterfaces';

@Injectable()
export class AppService {
  handleDevOpsRequest(devOpsBody: GitPullRequest) {
    const collectionURL = process.env.COLLECTIONURL;
    const token = process.env.TOKEN;

    const authHandler = getPersonalAccessTokenHandler(token);
    const connection = new WebApi(collectionURL, authHandler);

    const vstsGit = connection.getGitApi().then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      },
    );

    return true;
  }
}
