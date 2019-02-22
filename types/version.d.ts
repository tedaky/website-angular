export interface Version {
  version_name: string;
  version_image: string;
  version_link: string;
  version_order: number;
  version_modified_at: Date;
}

export interface Response {
  response: Array<Version>;
}
