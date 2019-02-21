export interface Experience {
  experience_order: number;
  experience_description: string;
  position_title: string;
  company_name: string;
  company_link: string;
  company_logo: string;
  company_description?: string;
  experience_start_date: Date;
  experience_end_date?: Date;
  experience_modified_at: Date;
  company_modified_at: Date;
  position_modified_at: Date;
}

export interface Response {
  response: Array<Experience>;
}
