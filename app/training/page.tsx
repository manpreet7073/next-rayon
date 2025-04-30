import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Clock, Users, BookOpen, Award, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TrainingRegistrationForm } from "@/components/training-registration-form"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Training Programs - RayonWeb",
  description: "Explore our web development and digital skills training programs",
}

export default function TrainingPage() {
  const trainingPrograms = [
    {
      title: "Web Development Fundamentals",
      description: "Learn the basics of HTML, CSS, and JavaScript to build responsive websites from scratch.",
      duration: "8 weeks",
      level: "Beginner",
      features: [
        "HTML5 & CSS3 fundamentals",
        "JavaScript basics",
        "Responsive design principles",
        "Introduction to web accessibility",
        "Building your first website",
      ],
      image: "/placeholder.svg?height=300&width=600",
      price: "$499",
      startDate: "June 15, 2025",
    },
    {
      title: "Advanced React Development",
      description: "Master React.js and build complex, state-driven applications with modern best practices.",
      duration: "10 weeks",
      level: "Intermediate",
      features: [
        "React hooks and context API",
        "State management with Redux",
        "Performance optimization",
        "Testing React applications",
        "Building a full-stack application",
      ],
      image: "/placeholder.svg?height=300&width=600",
      price: "$799",
      startDate: "July 10, 2025",
    },
    {
      title: "Full-Stack Development Bootcamp",
      description: "Comprehensive training covering both frontend and backend development with modern technologies.",
      duration: "16 weeks",
      level: "Intermediate to Advanced",
      features: [
        "Frontend with React & Next.js",
        "Backend with Node.js & Express",
        "Database design with MongoDB",
        "Authentication & authorization",
        "Deployment & DevOps basics",
      ],
      image: "/placeholder.svg?height=300&width=600",
      price: "$1,299",
      startDate: "August 5, 2025",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn essential cybersecurity concepts and practices to protect digital assets and systems.",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      features: [
        "Security fundamentals and principles",
        "Threat detection and prevention",
        "Network security",
        "Ethical hacking basics",
        "Security compliance and best practices",
      ],
      image: "/placeholder.svg?height=300&width=600",
      price: "$899",
      startDate: "September 1, 2025",
    },
  ]

  const testimonials = [
    {
      name: "David Wilson",
      role: "Former Student, now Frontend Developer",
      quote:
        "The training program at RayonWeb completely changed my career trajectory. The hands-on approach and expert guidance helped me land my first developer job within weeks of completing the course.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Lisa Chen",
      role: "UX Designer & Program Graduate",
      quote:
        "As a designer looking to expand my technical skills, this program was perfect. I now have the confidence to collaborate more effectively with developers and even build my own prototypes.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Training Programs
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Level Up Your <span className="text-primary">Digital Skills</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Comprehensive training programs designed to help you master web development and digital skills. Learn
                from industry experts and advance your career.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#programs">Explore Programs</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#registration">Register Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl opacity-70" />
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Training Programs"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Training That Makes a Difference</h2>
            <p className="text-foreground/80">
              Our training programs are designed with a focus on practical skills and real-world applications. Learn
              from industry experts and get the support you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Expert Instructors",
                description: "Learn from professionals with years of industry experience.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Practical Curriculum",
                description: "Focus on real-world projects and applicable skills.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Flexible Schedule",
                description: "Balance learning with your other commitments.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Career Support",
                description: "Get help with job placement and career advancement.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Programs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Training Programs</h2>
            <p className="text-foreground/80">
              Choose from our range of comprehensive training programs designed to help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card
                key={index}
                className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{program.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">{program.startDate}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-2xl font-bold">{program.price}</div>
                  <Button asChild>
                    <a href="#registration">Enroll Now</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Registration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enroll in a Training Program</h2>
            <p className="text-foreground/80">
              Fill out the form below to register for one of our training programs. Our team will contact you with more
              information.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <TrainingRegistrationForm programs={trainingPrograms.map((program) => program.title)} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Students Say</h2>
            <p className="text-foreground/80">
              Hear from our graduates about how our training programs have helped them advance their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-foreground/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="text-foreground/80 italic">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Enroll in one of our training programs today and take the first step towards advancing your career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#programs">Browse Programs</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#registration">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
