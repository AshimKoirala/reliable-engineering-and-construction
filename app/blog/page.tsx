import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog.jpg?height=300&width=1600"
            alt="Blog"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Our Blog</h1>
            <p className="text-xl text-gray-200">
              Insights, news, and expertise from the world of engineering and construction
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h3 className="text-xl font-bold text-foreground">{post.title}</h3>
                  </Link>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">{post.author.name}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="text-primary">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest industry insights, project showcases, and company news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-brand-teal hover:bg-brand-teal/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
