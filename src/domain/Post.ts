class Post {

  constructor(
    public readonly id: number = 0,
    public readonly title: string = '',
    public readonly content: string = '',
    public readonly featuredImage: string = '',
    public readonly date: string = '',
    public readonly excerpt: string = '',
    public readonly slug: string = '',
  ) {}
}

export default Post;
