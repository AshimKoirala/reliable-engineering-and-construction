import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getRandomBlogPosts } from "@/lib/blog"

export default function BlogPreview() {
  const posts = getRandomBlogPosts(3)

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Latest from Our Blog</h2>
        <div className="w-20 h-1 bg-brand-teal my-4"></div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Insights and expertise from our engineering and construction professionals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.slug} className="border-border bg-card overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                <h3 className="text-xl font-bold text-foreground line-clamp-2">{post.title}</h3>
              </Link>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" size="sm" className="text-primary">
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-background-secondary">
          <Link href="/blog">View All Articles</Link>
        </Button>
      </div>
    </div>
  )
}
