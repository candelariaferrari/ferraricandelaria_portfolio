export type StackGroupId = 'frontend' | 'backend' | 'data' | 'cloud' | 'quality'

export const stackGroups: { id: StackGroupId; items: string[] }[] = [
  { id: 'frontend', items: ['React', 'Angular', 'TypeScript', 'Ionic', 'Tailwind CSS', 'SCSS', 'Vite'] },
  { id: 'backend', items: ['Node.js', 'Express', 'REST APIs', 'JWT · auth', 'Swagger / OpenAPI'] },
  { id: 'data', items: ['PostgreSQL', 'Firestore', 'Firebase Auth'] },
  { id: 'cloud', items: ['Vercel · Serverless', 'Railway', 'AWS S3', 'AWS SES', 'Netlify'] },
  { id: 'quality', items: ['Figma · design tokens', 'Illustrator · Photoshop', 'Vitest · RTL', 'Git flow · PRs', 'Scrum · Trello'] },
]
