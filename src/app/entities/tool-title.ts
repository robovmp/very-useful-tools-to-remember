export class Title {
  constructor(title: string) {
    const isTitleLengthValid = this.validateDescriptionLength(title);

    if (!isTitleLengthValid) {
      throw new Error('Content title length error, min 5 character and max 50');
    }
    this.title = title;
  }

  private readonly title: string;

  private validateDescriptionLength(title: string): boolean {
    return title.length >= 5 && title.length <= 50;
  }

  get value(): string {
    return this.title;
  }
}
