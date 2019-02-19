export interface SkillGroup {
  skill_group_id: number;
  skill_group_name: string;
  skill_group_order: number;
  skill_group_modified_at: Date;
}

export interface SkillItem {
  skill_item_id: number;
  skill_item_name: string;
  skill_item_level: number;
  skill_item_order: number;
  skill_item_skill_group_id: number;
  skill_item_modified_at: Date;
}

export interface SkillGroupItem {
  skill_group: SkillGroup;
  skill_item: Array<SkillItem>;
}

export interface Response {
  response: Array<SkillGroupItem>;
}
