export interface ISkillGroup {
  skill_group_id: number;
  skill_group_name: string;
  skill_group_order: number;
  skill_group_modified_at: Date;
}

export interface ISkill {
  skill_id: number;
  skill_name: string;
  skill_level: number;
  skill_order: number;
  skill_skill_group_id: number;
  skill_modified_at: Date;
}

export interface ISkillResponse {
  skill_group: ISkillGroup;
  skill: ISkill[];
}

export interface SkillResponse {
  response: ISkillResponse[];
}
