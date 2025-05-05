export interface Comment {
  id: string;
  text: string;
  date: Date;
  year: number;
  month: number;
  day: number;
}

// Example comments data
export const comments: Comment[] = [
  {
    id: '1',
    text: 'First milestone reached!',
    date: new Date('2023-04-15'),
    year: 2023,
    month: 4,
    day: 15
  },
  {
    id: '2',
    text: 'Big improvement this month',
    date: new Date('2024-02-20'),
    year: 2024,
    month: 2,
    day: 20
  },
  {
    id: '3',
    text: 'New record!',
    date: new Date('2025-07-10'),
    year: 2025,
    month: 7,
    day: 10
  }
]; 