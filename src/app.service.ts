import { Injectable } from '@nestjs/common';
import { getPersonalAccessTokenHandler, WebApi } from 'azure-devops-node-api';

@Injectable()
export class AppService {
  azureDevOps() {
    const collectionURL = process.env.COLLECTIONURL;
    const token = process.env.TOKEN;

    var authHandler = getPersonalAccessTokenHandler(token);
    var connection = new WebApi(collectionURL, authHandler);

    var vstsGit = connection.getGitApi().then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      },
    );
  }
}
