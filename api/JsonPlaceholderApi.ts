import { APIRequestContext, APIResponse } from "@playwright/test";
import { apiPayloads } from "../utils/apiPayloads";

export class JsonPlaceholderApi {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getPosts(postId: number = 1): Promise<APIResponse> {
    return await this.request.get(`/posts/${postId}`);
  }

  async createPost(): Promise<APIResponse> {
    return await this.request.post(`/posts`, {
      data: apiPayloads.createPost,
    });
  }

  async updatePost(postId: number = 1): Promise<APIResponse> {
    return await this.request.put(`/posts/${postId}`, {
      data: apiPayloads.updatePost,
    });
  }

  async patchPost(postId: number = 1): Promise<APIResponse> {
    return await this.request.patch(`/posts/${postId}`, {
      data: apiPayloads.patchPost,
    });
  }

  async deletePost(postId: number = 1): Promise<APIResponse> {
    return await this.request.delete(`/posts/${postId}`);
  }
}
