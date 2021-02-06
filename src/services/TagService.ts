import { Api, Bookmark, Tag, IApiResponse } from "@/api/bookmarks-api";

export default class TagService {
    private api: Api = new Api(process.env.VUE_APP_API_KEY, process.env.VUE_APP_API_BASE_URI);

    /**
     * Returns all tags as Tag[]
     */
    public async tags(): Promise<Tag[]> {
        return await this.api.tags();
    }
}
