import { request, APIRequestContext } from "@playwright/test";

export class UsersApi {

  private apiContext!: APIRequestContext;

  async init() {
    this.apiContext = await request.newContext({
      baseURL: "https://reqres.in",
      extraHTTPHeaders: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json"
      }
    });
  }

  async getUsers() {
    const response = await this.apiContext.get("/api/users?page=2");
    return response;
  }

  async createUser(name: string, job: string) {
    const response = await this.apiContext.post("/api/users", {
      data: {
        name,
        job
      }
    });

    return response;
  }
}