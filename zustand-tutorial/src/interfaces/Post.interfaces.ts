export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Posts {
  posts: Post[];
}
