import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  order: number;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function parseFrontmatter(raw: string): {
  meta: Record<string, string | string[]>;
  body: string;
} {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return { meta: {}, body: raw };

  const meta: Record<string, string | string[]> = {};
  fmMatch[1].split("\n").forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      meta[key] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""));
    } else {
      meta[key] = value.replace(/^["']|["']$/g, "");
    }
  });

  return { meta, body: fmMatch[2] };
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]+?<\/li>)/g, "<ul>$1</ul>")
    .split(/\n\n+/)
    .map((block) => {
      if (/^<[h|u|b|li]/.test(block.trim())) return block.trim();
      return `<p>${block.trim()}</p>`;
    })
    .join("\n");
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".txt"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(md|txt)$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { meta } = parseFrontmatter(raw);

      return {
        slug,
        title: (meta.title as string) || slug,
        date: (meta.date as string) || "",
        excerpt: meta.excerpt as string | undefined,
        tags: meta.tags as string[] | undefined,
        order: meta.order !== undefined ? parseInt(meta.order as string, 10) : 9999,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = [".md", ".txt"];
  let raw: string | null = null;

  for (const ext of extensions) {
    const filePath = path.join(POSTS_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      raw = fs.readFileSync(filePath, "utf-8");
      break;
    }
  }

  if (!raw) return null;

  const { meta, body } = parseFrontmatter(raw);
  const contentHtml = markdownToHtml(body);

  return {
    slug,
    title: (meta.title as string) || slug,
    date: (meta.date as string) || "",
    excerpt: meta.excerpt as string | undefined,
    tags: meta.tags as string[] | undefined,
    contentHtml,
  };
}

