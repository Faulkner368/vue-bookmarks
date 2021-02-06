<template>
  <section>
    <header class="header">
      <h1>{{ PageTitle }}</h1>

      <div class="filter-bookmarks">
        <!-- Url -->
        <p>
          <input type="text" name="filter" id="filter" v-model="filter" placeholder="Categories" />
          <button v-show="false" @click="filterBookmarks()">Filter</button>
        </p>
      </div>

      <div class="add-bookmark">
        <!-- Trigger/Open The Modal -->
        <button @click="openModal()">Add Bookmark</button>
      </div>
    </header>

    <!-- The Modal -->
    <div id="bookmarkModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span @click="closeModal()" class="close">&times;</span>
        <!-- Title -->
        <p>
          <label for="title">Title</label>:
          <input type="text" name="title" id="title" v-model="addBookmark.title" />
        </p>

        <!-- Url -->
        <p>
          <label for="url">Url</label>:
          <input type="text" name="url" id="url" v-model="addBookmark.url" />
        <p>

        <!-- Description -->
        <p>
          <label for="description">Description</label>:
          <input type="text" name="description" id="description" v-model="addBookmark.description" />
        </p>
        
        <!-- Tags -->
        <p>
          <label for="tags">Tags</label>:
          <input type="text" name="tags" id="tags" placeholder="tag1, tag2, tag3" v-model="addBookmarkTags" />
        </p>

        <!-- Send -->
        <button v-show="updatingBookmark" @click="updateBookmark()">Save</button>
        <button v-show="!updatingBookmark" @click="addNewBookmark()" >Add bookmark</button>
        <button @click="cancelAddBookmark()" >Cancel</button>
        <p v-show="showAddBookmarkFeedback" id="bookmark-warning">Failed to add bookmark, make sure it is valid input</p>
      </div>
    </div>

    <!-- bookmarks -->
    <div class="box">
      <div class="bookmark" v-for="bookmark in filterBookmarks()" :key="bookmark.id">
        <h3>{{ bookmark.title }} ({{ bookmark.id }})</h3>
        <p class="bm-link"><a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a></p>
        <p class="bm-description">{{ bookmark.description }}</p>
        <div class="tags">
          <span class="tag" v-for="tag in bookmark.tags" :key="tag.id
          ">{{ tag.title }} </span>
        </div>

        <div class="bookmark-btns">
          <button @click="deleteBookmark(bookmark.id)">Delete</button>
          <button @click="editBookmark(bookmark)">Edit</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Bookmarks.ts"></script>
