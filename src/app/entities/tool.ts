import { randomUUID } from 'crypto';

export interface ToolProps {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export class Tool {
  constructor(props: ToolProps) {
    this.props = props;
    this._id = randomUUID();
  }

  private _id: string;
  private props: ToolProps;

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this.props.title;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get link(): string {
    return this.props.link;
  }

  public set link(link: string) {
    this.props.link = link;
  }

  public get description(): string {
    return this.props.description;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get tags(): string[] {
    return this.props.tags;
  }

  public set tags(tags: string[]) {
    this.props.tags = tags;
  }
}
