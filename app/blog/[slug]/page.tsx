import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPost, getBlogPosts } from "@/lib/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-200">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readingTime} min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{post.author.name}</h4>
                    <p className="text-muted-foreground">{post.author.bio}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <Button asChild variant="outline" className="mb-8">
                  <Link href="/blog" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>

                {/* <h3 className="text-2xl font-bold mb-6 text-foreground">Share this article</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    Email
                  </Button>
                </div> */}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Categories</h3>
                  <ul className="space-y-2">
                    {post.categories.map((category) => (
                      <li key={category}>
                        <Link
                          href={`/blog/category/${category.toLowerCase().replace(/ /g, "-")}`}
                          className="text-primary hover:underline"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Related Posts</h3>
                  <ul className="space-y-4">
                    {post.relatedPosts.map((relatedPost) => (
                      <li key={relatedPost.slug} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:underline">
                          <h4 className="font-medium text-foreground">{relatedPost.title}</h4>
                        </Link>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
