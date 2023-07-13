export interface Comment {
  id?: string;
  text: string;
  username: string;
  momentId: string;
  created_at?: Date;
  updated_at?: Date;
}