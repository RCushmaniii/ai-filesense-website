import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about AI FileSense. Get answers to common questions about features, pricing, and privacy.',
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'General',
      faqs: [
        {
          q: 'What is AI FileSense?',
          a: 'AI FileSense is a Windows desktop application that uses AI to help you organize and find files on your computer. It scans your folders, classifies files using AI, and helps you organize them into a logical structure — all while keeping your files completely local and private.',
        },
        {
          q: 'Is AI FileSense free?',
          a: 'Yes! AI FileSense offers a free tier with 1,000 file classifications, unlimited local scanning, and all features. You only need to provide your own Anthropic API key for AI features (typically costs $0.50-1.00 per 1,000 files).',
        },
        {
          q: 'Does AI FileSense work offline?',
          a: 'Partially. Scanning, searching, and organizing already-classified files works completely offline. AI classification requires an internet connection to communicate with the Anthropic API.',
        },
        {
          q: 'What languages does AI FileSense support?',
          a: 'AI FileSense supports English and Spanish (Mexico). You can switch between languages in the settings.',
        },
      ],
    },
    {
      title: 'Privacy & Security',
      faqs: [
        {
          q: 'Are my files uploaded to the cloud?',
          a: 'No. Your files never leave your computer. AI FileSense only sends filenames and small text snippets (about 500 characters) to the AI for classification. Full file contents are never transmitted.',
        },
        {
          q: 'What data is sent to the AI?',
          a: 'Only filenames, file extensions, and small text snippets from documents. File paths are anonymized (your username is removed). We never send full file contents or personal information.',
        },
        {
          q: 'Where is my data stored?',
          a: 'All data is stored locally in a SQLite database on your computer at %APPDATA%/com.aifilesense.app/. We do not have user accounts, cloud sync, or any servers that store your data.',
        },
        {
          q: 'Is my API key secure?',
          a: 'Yes. Your API key is stored locally on your computer with encryption. It never leaves your machine except to authenticate directly with Anthropic.',
        },
      ],
    },
    {
      title: 'Features & Usage',
      faqs: [
        {
          q: 'How does the AI classification work?',
          a: 'AI FileSense sends filenames and small content snippets to Claude AI, which analyzes them to determine categories like Work, Medical, Finances, Personal, etc. The AI considers both the filename and content to make intelligent decisions.',
        },
        {
          q: 'Can I undo file organization?',
          a: 'Yes! AI FileSense keeps a full transaction log of all file movements. You can undo any organization with one click, going back to any previous state.',
        },
        {
          q: 'What file types are supported?',
          a: 'AI FileSense can scan and organize any file type. For AI classification, it works best with text-based documents (PDF, DOCX, TXT, RTF) but can classify any file based on its name and extension.',
        },
        {
          q: 'Can I customize the organization categories?',
          a: 'Currently, AI FileSense uses AI-determined categories based on your file content. Custom category support is planned for future releases.',
        },
      ],
    },
    {
      title: 'Pricing & API',
      faqs: [
        {
          q: 'What counts toward my file limit?',
          a: 'Only files that are processed by AI for classification count toward your limit. Local scanning and indexing is always unlimited. Files you\'ve already classified don\'t count again.',
        },
        {
          q: 'Why do I need my own API key?',
          a: 'Using your own Anthropic API key gives you full transparency and control over AI costs. It also means your data goes directly to Anthropic without any middleman, improving privacy.',
        },
        {
          q: 'How much does the AI cost?',
          a: 'Typically $0.50-1.00 per 1,000 files, depending on file types and content length. AI FileSense uses batch processing to minimize costs. A $5 API credit lasts most users several months.',
        },
        {
          q: 'What happens when I hit my file limit?',
          a: 'You can still use all features for files already classified. New files will need to wait until you upgrade (when paid tiers are available) or reset your count.',
        },
      ],
    },
    {
      title: 'Troubleshooting',
      faqs: [
        {
          q: 'AI FileSense won\'t start. What do I do?',
          a: 'Try running as Administrator, check that you meet the system requirements (Windows 10/11 64-bit, 4GB RAM), and ensure your antivirus isn\'t blocking the application.',
        },
        {
          q: 'AI classification is failing.',
          a: 'Check your API key is valid and has credit. Ensure you have an internet connection. Try classifying fewer files at once. Check the Anthropic status page for any outages.',
        },
        {
          q: 'Files weren\'t moved correctly.',
          a: 'Use the undo feature to reverse the organization. Check the preview carefully before applying future organizations. Some files may be locked by other applications.',
        },
        {
          q: 'The app is running slowly.',
          a: 'Large folders (10,000+ files) take time to scan initially. Subsequent scans are faster due to incremental indexing. Close other applications to free up memory.',
        },
      ],
    },
  ]

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about AI FileSense."
      />

      <Section spacing="lg">
        <Container size="md">
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-foreground/10">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="font-semibold mb-2">{faq.q}</h3>
                      <p className="text-foreground/70">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Still Need Help */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-foreground/70 mb-6">
              Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll help you out.
            </p>
            <NextLink href="/support/contact">
              <Button variant="primary">Contact Support</Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
