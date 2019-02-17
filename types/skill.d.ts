export interface ISkillGroup {
  skill_group_id: number;
  skill_group_name: string;
  skill_group_order: number;
  skill_group_modified_at: Date;
}

export interface ISkillItem {
  skill_item_id: number;
  skill_item_name: string;
  skill_item_level: number;
  skill_item_order: number;
  skill_item_skill_group_id: number;
  skill_item_modified_at: Date;
}

export interface ISkillResponse {
  skill_group: ISkillGroup;
  skill_item: ISkillItem[];
}

export interface SkillResponse {
  response: ISkillResponse[];
}
