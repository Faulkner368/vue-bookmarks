import { Component, Vue } from "vue-property-decorator";
import BookmarkService from "@/services/BookmarkService";
import TagService from "@/services/TagService";
import { Bookmark, Tag } from "@/api/bookmarks-api";

@Component({
  components: {
  },
})
export default class Bookmarks extends Vue {
  private bookmarkService: BookmarkService = new BookmarkService();
  private tagsService: TagService = new TagService();
  private pageTitle: string;
  private bookmarks: Bookmark[] = [];
  private tags: Tag[] = [];
  public addBookmark: Bookmark = new Bookmark();
  public addBookmarkTags = "";
  public showAddBookmarkFeedback = false;
  public updatingBookmark = false;
  public filter = "";

  constructor() {
    super();
    this.pageTitle = "Bookmarks";
  }

  public async mounted() {
    this.bookmarks = await this.bookmarkService.bookmarks();
    this.tags = await this.tagsService.tags();
  }

  /**
   * Returns pageTitle property
   */
  get PageTitle() {
      return this.pageTitle;
  }

  public filterBookmarks(): Bookmark[] {
    if (this.filter === "") {
      return this.bookmarks;
    } else {
      const bookmarks: Bookmark[] = [];
      for (const bookmark of bookmarks) {
        bookmark.tags?.forEach(tag => tag.title === this.filter.toLowerCase() ? bookmarks.push(bookmark) : null);
      }
      return bookmarks;
    }
  }

  public openModal() {
    const element = document.getElementById("bookmarkModal");

    if (element !== null) {
      element.style.display = "block";
    }
  }

  public reset() {
    this.updatingBookmark = false;
    this.addBookmark = new Bookmark();
  }

  public closeModal() {
    const element = document.getElementById("bookmarkModal");

    if (element !== null) {
      element.style.display = "none";
    }

    this.reset();
  }

  public async addNewBookmark() {
    this.addBookmark.tags = [];
    this.addBookmarkTags.split(/[ ,]+/).forEach(tag => this.addBookmark.tags.push({ "title": tag.trim().toLowerCase(), "description": "" } as Tag));
    // console.log(`${JSON.stringify(this.addBookmark.toJSON())}`);
    const response: boolean = confirm(`Are you sure you want to add bookmark: ${this.addBookmark.title}`)

    if (response) {
      const newBookmark = await this.bookmarkService.addBookmark(this.addBookmark);
      this.bookmarks.push(newBookmark);
      this.closeModal();
      return newBookmark;
    }
    this.showAddBookmarkFeedback = true;
    this.reset();
  }

  public cancelAddBookmark() {
    this.reset();
    this.closeModal();
  }

  public async deleteBookmark(bookmarkId: number) {
    const response: boolean = confirm("Are you sure you want to delete this bookmark?");
    if (response) {
      this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== bookmarkId);
      return await this.bookmarkService.deleteBookmarkWithId(bookmarkId);
    } 
  }

  public editBookmark(bookmark: Bookmark) {
    this.addBookmark = bookmark;

    // these need to be the ACTUAL Tag objects, so use get tags endpoint and create a dropdown for them
    this.addBookmarkTags = "";
    bookmark.tags?.forEach(tag => this.addBookmarkTags += `${tag.title},`);
    // remove last comma
    this.addBookmarkTags = this.addBookmarkTags.substr(0, this.addBookmarkTags.length -1);

    this.updatingBookmark = true;
    this.openModal();
  }

  public async updateBookmark() {
    this.addBookmark.tags = [];

    // These tags need to ne actual tag objects or their id, so need to call tags endpoint and use dropdown
    // this.addBookmarkTags.split(/[ ,]+/).forEach(tag => this.addBookmark.tags!.push(tag.trim().toLowerCase()));
    
    const updatedBookmark = await this.bookmarkService.updateBookmarkWithId(this.addBookmark);

    // this.bookmarks.forEach(bookmark => bookmark.bookmarkId === updatedBookmark.bookmarkId ? bookmark = updatedBookmark : null);
    // this.bookmarks.push(updatedBookmark);
    this.closeModal();
    this.reset();
    return updatedBookmark;
  }
}