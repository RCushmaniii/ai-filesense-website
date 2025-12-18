import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  draft?: boolean
  coverImage?: string
  content: string
}

export interface Work {
  slug: string
  title: string
  description: string
  date: string
  client?: string
  role?: string
  tech?: string[]
  coverImage?: string
  draft?: boolean
  content: string
}

/**
 * Get all blog posts
 */
export function getAllPosts(): Post[] {
  const blogDir = path.join(contentDirectory, 'blog')

  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(blogDir, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags,
        draft: data.draft || false,
        coverImage: data.coverImage,
        content,
      }
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(contentDirectory, 'blog', `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags,
    draft: data.draft || false,
    coverImage: data.coverImage,
    content,
  }
}

/**
 * Get all work/case studies
 */
export function getAllWork(): Work[] {
  const workDir = path.join(contentDirectory, 'work')

  if (!fs.existsSync(workDir)) {
    return []
  }

  const files = fs.readdirSync(workDir)
  const work = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(workDir, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        client: data.client,
        role: data.role,
        tech: data.tech,
        coverImage: data.coverImage,
        draft: data.draft || false,
        content,
      }
    })
    .filter((item) => !item.draft)
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return work
}

/**
 * Get a single work/case study by slug
 */
export function getWorkBySlug(slug: string): Work | null {
  const fullPath = path.join(contentDirectory, 'work', `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    client: data.client,
    role: data.role,
    tech: data.tech,
    coverImage: data.coverImage,
    draft: data.draft || false,
    content,
  }
}
