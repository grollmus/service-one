import { Injectable } from '@nestjs/common';
import { getPersonalAccessTokenHandler, WebApi } from 'azure-devops-node-api';

@Injectable()
export class AppService {
  azureDevOps() {
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
  }
}
