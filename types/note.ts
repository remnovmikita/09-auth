export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: Tags
}
export type Tags = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';
