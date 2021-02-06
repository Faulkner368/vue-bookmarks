import { Api, Bookmark, Tag, IApiResponse } from "@/api/bookmarks-api";

export default class BookmarkService {
    private api: Api = new Api(process.env.VUE_APP_API_KEY, process.env.VUE_APP_API_BASE_URI);

    /**
     * Returns all bookmarks as Bookmark[]
     */
    public async bookmarks(): Promise<Bookmark[]> {
        return await this.api.bookmarks();
    }

    /**
     * Returns bookmark with given ID
     * @param bookmarkId string
     */
    public async getBookmarkWithId(bookmarkId: number): Promise<Bookmark> {
        return await this.api.getBookmarkWithId(bookmarkId);
    }

    /**
     * Deletes bookmark with given ID and returns boolean
     * @param bookmarkId string
     */
    public async deleteBookmarkWithId(bookmarkId: number): Promise<IApiResponse> {
        return await this.api.deleteBookmarkWithId(bookmarkId);
    }

    /**
     * Updates bookmark with given ID, ID in given Bookmark object
     * and returns updated object
     * @param bookmark Bookmark
     */
    public async updateBookmarkWithId(bookmark: Bookmark): Promise<Bookmark> {
         return await this.api.updateBookmarkWithId(bookmark.id!, bookmark);
    }

    /**
     * Add a new bookmark and returns the added bookmark
     * @param bookmark Bookmark
     */
    public async addBookmark(bookmark: Bookmark): Promise<Bookmark> {
        return await this.api.addBookmark(bookmark);
    }
}
