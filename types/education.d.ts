export interface Education {
  education_order: number;
  education_degree: string;
  education_field: string;
  education_cgpa?: number;
  school_name: string;
  school_link: string;
  school_logo?: string;
  education_start_date: Date;
  education_end_date: Date;
  education_modified_at: Date;
  school_modified_at: Date;
}

export interface Response {
  response: Array<Education>;
}
