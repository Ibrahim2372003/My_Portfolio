// `group` only controls how skills are arranged on the page.
export const skillsData = [
  { name: 'Figma', icon: '/skills/figma.png', group: 'Design' },
  { name: 'Photoshop', icon: '/skills/photoshop.png', group: 'Design' },
  { name: 'Blender', icon: '/skills/blender.png', group: 'Design' },
  { name: 'VS Code', icon: '/skills/vscode.png', group: 'Tools' },
  { name: 'HTML', icon: '/skills/html.png', group: 'Development' },
  { name: 'CSS', icon: '/skills/css.png', group: 'Development' },
  { name: 'JavaScript', icon: '/skills/js.png', group: 'Development' },
  { name: 'TailwindCSS', icon: '/skills/tailwind.png', group: 'Development' },
  { name: 'Vite', icon: '/skills/vite.png', group: 'Development' },
  { name: 'ReactJS', icon: '/skills/react.png', group: 'Development' },
  { name: 'TypeScript', icon: '/skills/ts.png', group: 'Development' },
  { name: 'AI', icon: '/skills/ai.png', group: 'Design' },
  { name: 'Framer Motion', icon: '/skills/framer.png', group: 'Development' },
  { name: 'ThreeJS', icon: '/skills/threejs.png', group: 'Development' },
  { name: 'NextJS', icon: '/skills/nextjs.png', group: 'Development' },
  { name: 'NodeJS', icon: '/skills/nodejs.png', group: 'Development' },
  { name: 'MongoDB', icon: '/skills/mongodb.png', group: 'Development' },
  { name: 'GitHub', icon: '/skills/github.png', group: 'Tools' },
]

export const skillGroups = ['Development', 'Design', 'Tools'].map((title) => ({
  title,
  items: skillsData.filter((skill) => skill.group === title),
}))
