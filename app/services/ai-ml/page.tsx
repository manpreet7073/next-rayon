import ServiceDetailHero from "@/components/services/service-detail-hero"
import ServiceFeatures from "@/components/services/service-features"
import ServiceProcess from "@/components/services/service-process"
import ServiceCaseStudies from "@/components/services/service-case-studies"
import ServiceFAQ from "@/components/services/service-faq"
import ServiceCTA from "@/components/services/service-cta"
import { Brain, Cpu, Database, Code, Bot, Eye, Sparkles } from "lucide-react"

export default function AIMLPage() {
    const serviceData = {
    title: "AI & Machine Learning",
    description: "Drive business innovation with cutting-edge AI and ML solutions tailored to your needs — from LLMs to computer vision, recommendation engines, and chatbots.",
    icon: "Smartphone",
    color: "from-indigo-500 to-purple-500",
  }
  const features = [
    {
      title: "Hugging Face Models & Applications",
      description: "Leverage state-of-the-art pre-trained models from Hugging Face for NLP, computer vision, and more.",
      icon: <Code className="h-12 w-12" />,
      link: "/services/ai-ml/hugging-face-models",
    },
    {
      title: "LLM Development with Langchain",
      description: "Build powerful applications with Large Language Models using the Langchain framework.",
      icon: <Brain className="h-12 w-12" />,
      link: "/services/ai-ml/llm-development",
    },
    {
      title: "Custom AI Model Training",
      description: "Develop tailored AI models specifically designed for your unique business challenges.",
      icon: <Cpu className="h-12 w-12" />,
      link: "/services/ai-ml/custom-model-training",
    },
    {
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities into your existing applications and systems.",
      icon: <Database className="h-12 w-12" />,
      link: "/services/ai-ml/ai-integration",
    },
    {
      title: "Computer Vision Solutions",
      description: "Implement powerful image and video analysis capabilities for automation and insights.",
      icon: <Eye className="h-12 w-12" />,
      link: "/services/ai-ml/computer-vision",
    },
    {
      title: "Conversational AI & Chatbots",
      description: "Create intelligent conversational experiences that engage users and provide support.",
      icon: <Bot className="h-12 w-12" />,
      link: "/services/ai-ml/conversational-ai",
    },
  ]

  const process = [
      "Discovery & Assessment",
      "Solution Design",
      "Data Strategy",
      "Model Development",
      "Integration & Deployment",
      "Testing & Validation",
      "Monitoring & Optimization",
      "Knowledge Transfer"
    ]

  const caseStudies = [
    {
      title: "E-commerce Product Recommendation Engine",
      description:
        "Developed a sophisticated recommendation system that increased average order value by 28% and improved customer engagement.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Machine Learning", "Recommendation Systems", "E-commerce"],
    },
    {
      title: "Healthcare Document Processing System",
      description:
        "Created an AI-powered system that automatically extracts and categorizes information from medical documents, reducing processing time by 75%.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["NLP", "Document Processing", "Healthcare"],
    },
    {
      title: "Intelligent Customer Support Chatbot",
      description:
        "Implemented a conversational AI solution that handles 65% of customer inquiries without human intervention, improving response times and customer satisfaction.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Conversational AI", "Customer Support", "LLMs"],
    },
  ]

  const faqs = [
    {
      question: "What types of AI solutions do you develop?",
      answer:
        "We develop a wide range of AI solutions including natural language processing applications, computer vision systems, predictive analytics models, recommendation engines, conversational AI and chatbots, document processing systems, and custom machine learning models tailored to specific business needs.",
    },
    {
      question: "Do I need a large amount of data to implement AI solutions?",
      answer:
        "While having more high-quality data generally improves AI model performance, we can work with various data situations. For organizations with limited data, we can employ techniques like transfer learning, data augmentation, and leveraging pre-trained models. We'll assess your specific situation and recommend the most appropriate approach.",
    },
    {
      question: "How long does it take to develop and deploy an AI solution?",
      answer:
        "The timeline for AI projects varies based on complexity, data availability, and integration requirements. Simple implementations might take 1-2 months, while more complex enterprise solutions can take 3-6 months or more. During our initial consultation, we'll provide a more specific timeline based on your project requirements.",
    },
    {
      question: "How do you ensure the quality and reliability of AI models?",
      answer:
        "We implement a comprehensive approach to quality assurance including rigorous testing across diverse datasets, continuous monitoring of model performance, regular retraining to prevent drift, explainability techniques to understand model decisions, and human oversight for critical applications. We also establish clear metrics for success and regularly evaluate models against these benchmarks.",
    },
    {
      question: "Can you integrate AI capabilities into our existing systems?",
      answer:
        "Yes, we specialize in integrating AI capabilities into existing systems and workflows. We can develop APIs that connect AI models with your current applications, implement middleware solutions that bridge legacy systems with modern AI capabilities, and design architectures that allow for gradual adoption of AI without disrupting your operations.",
    },
  ]

  return (
    <div className="flex flex-col gap-0">
      <ServiceDetailHero
              title={serviceData.title}
              description={serviceData.description}
              icon={serviceData.icon}
              color={serviceData.color}
            />
      <ServiceFeatures features={features} />
    <ServiceProcess steps={process} />
      <ServiceCaseStudies caseStudies={caseStudies} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA />
    </div>
  )
}
