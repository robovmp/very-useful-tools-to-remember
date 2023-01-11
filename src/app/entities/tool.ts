import { Tags } from './tool-tags';
import { Description } from './tool-description';
import { Title } from './tool-title';
import { randomUUID } from 'crypto';

export interface ToolProps {
  title: Title;
  link: string;
  description: Description;
  tags: Tags;
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

  public get title(): Title {
    return this.props.title;
  }

  public set title(title: Title) {
    this.props.title = title;
  }

  public get link(): string {
    return this.props.link;
  }

  public set link(link: string) {
    this.props.link = link;
  }

  public get description(): Description {
    return this.props.description;
  }

  public set description(description: Description) {
    this.props.description = description;
  }

  public get tags(): Tags {
    return this.props.tags;
  }

  public set tags(tags: Tags) {
    this.props.tags = tags;
  }
}
