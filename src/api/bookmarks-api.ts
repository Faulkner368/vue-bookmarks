/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.6.2.0 (NJsonSchema v10.1.23.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class Api {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    private apiKey: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(apiKey: string, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.apiKey = apiKey ? apiKey : "";
        this.baseUrl = baseUrl ? baseUrl : "";
    }


    // BOOKMARKS

    /**
     * Bookmarks
     * @return Bookmark[]
     */
    bookmarks(): Promise<Bookmark[]> {
        let url_ = this.baseUrl + "bookmarks";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBookmarks(_response);
        });
    }

    protected processBookmarks(response: Response): Promise<Bookmark[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Bookmark.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Bookmark[]>(<any>null);
    }

    /**
     * Get bookmark with Id
     * @return Bookmark
     */
    getBookmarkWithId(id: number): Promise<Bookmark> {
        let url_ = this.baseUrl + "bookmark/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetBookmarkWithId(_response);
        });
    }

    protected processGetBookmarkWithId(response: Response): Promise<Bookmark> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Bookmark.fromJS(resultData200);
            return result200;
            });
        } else if (status === 422) {
            return response.text().then((_responseText) => {
            let result422: any = null;
            let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result422 = HTTPValidationError.fromJS(resultData422);
            return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Bookmark>(<any>null);
    }

    /**
     * Deletes bookmark with given ID and returns deleted bookmark id
     * @param bookmark.id number
     * @return IApiResponse
     */
    deleteBookmarkWithId(id: number): Promise<IApiResponse> {
        let url_ = this.baseUrl + "bookmark/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteBookmarkWithId(_response);
        });
    }

    protected processDeleteBookmarkWithId(response: Response): Promise<IApiResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Bookmark.fromJS(resultData200);
            return result200;
            });
        } else if (status === 422) {
            return response.text().then((_responseText) => {
            let result422: any = null;
            let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result422 = HTTPValidationError.fromJS(resultData422);
            return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IApiResponse>(<any>null);
    }

    /**
     * Updates bookmark with given ID and returns updated object
     * @param bookmark
     * @return Bookmark
     */
    updateBookmarkWithId(id: number, bookmark: Bookmark): Promise<Bookmark> {
        let url_ = this.baseUrl + "bookmark/update/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateBookmarkWithId(_response);
        });
    }

    protected processUpdateBookmarkWithId(response: Response): Promise<Bookmark> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Bookmark.fromJS(resultData200);
            return result200;
            });
        } else if (status === 422) {
            return response.text().then((_responseText) => {
            let result422: any = null;
            let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result422 = HTTPValidationError.fromJS(resultData422);
            return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Bookmark>(<any>null);
    }

    /**
     * Add a new bookmark and returns the added bookmark
     * @param bookmark Bookmark
     * @return Bookmark
     */
    addBookmark(bookmark: Bookmark): Promise<Bookmark> {
        let url_ = this.baseUrl + "bookmarks";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAddBookmark(_response);
        });
    }

    protected processAddBookmark(response: Response): Promise<Bookmark> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Bookmark.fromJS(resultData200);
            return result200;
            });
        } else if (status === 422) {
            return response.text().then((_responseText) => {
            let result422: any = null;
            let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result422 = HTTPValidationError.fromJS(resultData422);
            return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Bookmark>(<any>null);
    }

    /**
     * Search for bookmarks with title containing searh term,
     * case insensitive
     * @param searchTerm 
     * @return Bookmark[]
     */
    searchBookmarkByTitle(searchTerm: string): Promise<Bookmark[]> {
        let url_ = this.baseUrl + "bookmarks/search/{searchTerm}";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSearchBookmarkByTitle(_response);
        });
    }

    protected processSearchBookmarkByTitle(response: Response): Promise<Bookmark[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Bookmark.fromJS(resultData200);
            return result200;
            });
        } else if (status === 422) {
            return response.text().then((_responseText) => {
            let result422: any = null;
            let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result422 = HTTPValidationError.fromJS(resultData422);
            return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Bookmark[]>(<any>null);
    }

    /**
     * Search Bookmarks with tags having a title containing the search term,
     * case insensitive
     * @param searchTerm 
     * @return Bookmark[]
     */
    searchBookmarkByTagTitle(searchTerm: string): Promise<Bookmark[]> {
        let url_ = this.baseUrl + "bookmarks/search/by-tag/{searchTerm}";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSearchBookmarkByTagTitle(_response);
        });
    }

    protected processSearchBookmarkByTagTitle(response: Response): Promise<Bookmark[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Bookmark.fromJS(resultData200);
            return result200;
            });
        } else if (status === 422) {
            return response.text().then((_responseText) => {
            let result422: any = null;
            let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result422 = HTTPValidationError.fromJS(resultData422);
            return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Bookmark[]>(<any>null);
    }

    /**
     * Get Bookmarkw with Tags associated with the given tag ID.
     * @param searchTerm 
     * @return Bookmark[]
     */
    searchBookmarkByTagId(tagId: number): Promise<Bookmark[]> {
        let url_ = this.baseUrl + "bookmarks/search/by-tag-id/{tagId}";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSearchBookmarkByTagId(_response);
        });
    }

    protected processSearchBookmarkByTagId(response: Response): Promise<Bookmark[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Bookmark.fromJS(resultData200);
            return result200;
            });
        } else if (status === 422) {
            return response.text().then((_responseText) => {
            let result422: any = null;
            let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result422 = HTTPValidationError.fromJS(resultData422);
            return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Bookmark[]>(<any>null);
    }


    // TAGS

    /**
     * Returns tags
     * @return Tag[]
     */
    tags(): Promise<Tag[]> {
        let url_ = this.baseUrl + "tags";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTags(_response);
        });
    }

    protected processTags(response: Response): Promise<Tag[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Tag.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Tag[]>(<any>null);
    }

    /**
     * Returns tags containing the search term, case insensitive
     * @param tagTitle
     * @return Tag[]
     */
    tagSearchByTitle(searchTerm: string): Promise<Tag[]> {
        let url_ = this.baseUrl + "tag/search/{searchTerm}";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTagSearchByTitle(_response);
        });
    }

    protected processTagSearchByTitle(response: Response): Promise<Tag[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Tag.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Tag[]>(<any>null);
    }

    /**
     * Adds the given tag object to list of tags
     * @param tag
     * @return Tag
     */
    addTag(tag: Tag): Promise<Tag> {
        let url_ = this.baseUrl + "tag/add";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAddTag(_response);
        });
    }

    protected processAddTag(response: Response): Promise<Tag> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Tag.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Tag>(<any>null);
    }

    /**
     * Updates given tag using the tags ID
     * @param tag
     * @return Tag
     */
    updateTag(tag: Tag): Promise<Tag> {
        let url_ = this.baseUrl + "tag/update/{tag.id}";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateTag(_response);
        });
    }

    protected processUpdateTag(response: Response): Promise<Tag> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Tag.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Tag>(<any>null);
    }

    /**
     * Deletes given tag by its ID and returns ID to confirm
     * @param tag
     * @return Tag
     */
    deleteTag(tag: Tag): Promise<IApiResponse> {
        let url_ = this.baseUrl + "tag/delete/{tag.id}";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiKey
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteTag(_response);
        });
    }

    protected processDeleteTag(response: Response): Promise<IApiResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Tag.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IApiResponse>(<any>null);
    }
    // path('tag/add', views.add_tag, name="add_tag"),
    // path('tag/update/<str:tag_id>', views.update_tag_by_id, name="update_tag_by_id"),
    // path('tag/delete/<str:tag_id>', views.delete_tag_by_id, name="delete_tag_by_id")
}

export class Bookmark implements IBookmark {
    id?: number;
    title!: string;
    description!: string;
    tags: Tag[] = [];
    url!: string;
    date_created?: string;

    constructor(data?: IBookmark) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    public getId(): string {
        return `${this.id}`;
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.description = _data["description"];
            if (Array.isArray(_data["tags"])) {
                this.tags = [] as Tag[];
                for (let item of _data["tags"])
                    this.tags!.push(item);
            }
            this.url = _data["url"];
            this.date_created = _data["date_created"];
        }
    }

    static fromJS(data: any): Bookmark {
        data = typeof data === 'object' ? data : {};
        let result = new Bookmark();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["description"] = this.description;
        if (Array.isArray(this.tags)) {
            data["tags"] = [];
            for (let item of this.tags)
                data["tags"].push(item);
        }
        data["url"] = this.url;
        data["date_created"] = this.date_created;
        return data; 
    }
}

export class Tag implements ITag {
    id?: number;
    title!: string;
    description!: string;

    constructor(data?: ITag) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    public getId(): string {
        return `${this.id}`;
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.description = _data["description"];
        }
    }

    static fromJS(data: any): Tag {
        data = typeof data === 'object' ? data : {};
        let result = new Tag();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["description"] = this.description;
        return data; 
    }
}

export interface ITag {
    id?: number;
    title: string;
    description: string;
}

export interface IBookmark {
    id?: number;
    title: string;
    description: string;
    tags: Tag[];
    url: string;
    date_created?: string;
}

export interface ISearchResponse {
    quantity?: number;
    bookmarks?: Bookmark[];
    tags?: Tag[];
}

export class SearchResponse implements ISearchResponse {
    bookmarks?: Bookmark[];
    tags?: Tag[];
    quantity?: number;

    constructor(data?: ISearchResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.quantity = _data["quantity"];

            if (Array.isArray(_data["tags"])) {
                this.tags = [] as Tag[];
                for (let item of _data["tags"])
                    this.tags!.push(item);
            }

            if (Array.isArray(_data["bookmarks"])) {
                this.bookmarks = [] as Bookmark[];
                for (let item of _data["bookmarks"])
                    this.bookmarks!.push(item);
            }

        }
    }

    static fromJS(data: any): SearchResponse {
        data = typeof data === 'object' ? data : {};
        let result = new SearchResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["quantity"] = this.quantity;

        if (Array.isArray(this.tags)) {
            data["tags"] = [];
            for (let item of this.tags)
                data["tags"].push(item);
        }

        if (Array.isArray(this.bookmarks)) {
            data["bookmarks"] = [];
            for (let item of this.bookmarks)
                data["bookmarks"].push(item);
        }

        return data; 
    }
}

export interface IApiResponse {
    bookmark_deleted: number;
}

export class HTTPValidationError implements IHTTPValidationError {
    detail?: ValidationError[];

    constructor(data?: IHTTPValidationError) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["detail"])) {
                this.detail = [] as any;
                for (let item of _data["detail"])
                    this.detail!.push(ValidationError.fromJS(item));
            }
        }
    }

    static fromJS(data: any): HTTPValidationError {
        data = typeof data === 'object' ? data : {};
        let result = new HTTPValidationError();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.detail)) {
            data["detail"] = [];
            for (let item of this.detail)
                data["detail"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IHTTPValidationError {
    detail?: ValidationError[];
}

export class ValidationError implements IValidationError {
    loc!: string[];
    msg!: string;
    type!: string;

    constructor(data?: IValidationError) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.loc = [];
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["loc"])) {
                this.loc = [] as any;
                for (let item of _data["loc"])
                    this.loc!.push(item);
            }
            this.msg = _data["msg"];
            this.type = _data["type"];
        }
    }

    static fromJS(data: any): ValidationError {
        data = typeof data === 'object' ? data : {};
        let result = new ValidationError();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.loc)) {
            data["loc"] = [];
            for (let item of this.loc)
                data["loc"].push(item);
        }
        data["msg"] = this.msg;
        data["type"] = this.type;
        return data; 
    }
}

export interface IValidationError {
    loc: string[];
    msg: string;
    type: string;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}