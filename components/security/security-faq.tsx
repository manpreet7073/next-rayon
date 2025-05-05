"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SecurityFAQ() {
  const faqs = [
    {
      question: "How do you protect my data from unauthorized access?",
      answer:
        "We implement multiple layers of security including encryption, access controls, and continuous monitoring. All data is encrypted both in transit and at rest using industry-standard protocols. We enforce strict access controls based on the principle of least privilege, and all access attempts are logged and monitored for suspicious activity.",
    },
    {
      question: "What security certifications does Rayon Web Solutions maintain?",
      answer:
        "We maintain several industry-leading certifications including ISO 27001, SOC 2 Type II, and are compliant with regulations such as GDPR, HIPAA, and PCI DSS where applicable. These certifications are regularly audited by third-party assessors to ensure ongoing compliance.",
    },
    {
      question: "How often do you perform security assessments?",
      answer:
        "We conduct regular security assessments including vulnerability scanning, penetration testing, and code reviews. Automated vulnerability scanning occurs daily, while comprehensive penetration tests are performed quarterly by independent security firms. Additionally, we perform security code reviews during each development cycle.",
    },
    {
      question: "What happens in case of a security incident?",
      answer:
        "We have a comprehensive incident response plan in place. Our security team is available 24/7 to respond to alerts. In case of an incident, we immediately contain the threat, investigate the root cause, remediate the vulnerability, and notify affected parties as required by regulations and contracts. We also conduct post-incident reviews to prevent similar issues in the future.",
    },
    {
      question: "How do you handle data backups and disaster recovery?",
      answer:
        "We maintain regular backups of all critical data, with incremental backups performed daily and full backups weekly. All backups are encrypted and stored in geographically distributed locations. Our disaster recovery plan is tested quarterly to ensure we can restore operations quickly in case of any disruption.",
    },
    {
      question: "Do you conduct security training for your employees?",
      answer:
        "Yes, all employees undergo mandatory security awareness training upon joining and refresher courses quarterly. Specialized training is provided for developers, system administrators, and other technical roles. We also conduct regular phishing simulations and other security exercises to test and reinforce security awareness.",
    },
    {
      question: "How do you ensure third-party vendors meet your security standards?",
      answer:
        "We have a rigorous vendor assessment process that evaluates the security posture of all third-party vendors before engagement. This includes reviewing their security certifications, conducting security questionnaires, and in some cases, performing on-site assessments. We also include security requirements in all vendor contracts and perform regular reassessments.",
    },
    {
      question: "What physical security measures do you have in place?",
      answer:
        "Our data centers and offices implement comprehensive physical security controls including 24/7 security personnel, biometric access controls, CCTV surveillance, and environmental monitoring. Access to server areas is strictly limited to authorized personnel and all access is logged and monitored.",
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Security <span className="gradient-text">FAQ</span>
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our security practices and how we protect your data.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-700/30 transition-all text-left">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
