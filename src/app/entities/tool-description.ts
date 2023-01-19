export class Description {
  constructor(description: string) {
    const isDescriptionLengthValid =
      this.validateDescriptionLength(description);

    if (!isDescriptionLengthValid) {
      throw new Error(
        'Content description length error, min 10 characters and max 240',
      );
    }
    this.description = description;
  }

  private readonly description: string;

  private validateDescriptionLength(description: string): boolean {
    return description.length >= 10 && description.length <= 240;
  }

  get value(): string {
    return this.description;
  }
}
