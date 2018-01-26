import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MOCKUSER } from '../interfaces/users.mock';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = MOCKUSER;
    return {users};
  }
}
