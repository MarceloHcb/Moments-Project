export interface Moment {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;
  comments?: [text: string, username: string];
}
