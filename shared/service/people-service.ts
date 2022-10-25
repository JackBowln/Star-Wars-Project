import type { People } from '../types/people';
import HttpClient from './index';

export class PeopleApi extends HttpClient {
  private static classInstance?: PeopleApi;
  private constructor() {
    super("https://swapi.dev/api/");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new PeopleApi();
    }

    return this.classInstance;
  }

  
  public getPeople = () => this.instance.get<People>(`/people`);
}
