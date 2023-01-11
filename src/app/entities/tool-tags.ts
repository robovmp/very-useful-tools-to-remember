export class Tags {
  constructor(tags: string[]) {
    const isTagsLengthValid = this.validateTagsLength(tags);

    if (!isTagsLengthValid) {
      throw new Error('Content length error');
    }
    this.tags = tags;
  }

  private readonly tags: string[];

  private validateTagsLength(tags: string[]): boolean {
    return tags.length >= 1 && tags.length <= 10;
  }

  get value(): string[] {
    return this.tags;
  }
}
