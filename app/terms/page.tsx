import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Prose } from '@/components/content/prose'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AI FileSense Terms of Service. Read our terms for using the desktop application.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Last Updated: January 2025"
      />

      <Section spacing="lg">
        <Container size="sm">
          <Prose>
            <p className="lead">
              Welcome to AI FileSense! These Terms of Service (&quot;Terms&quot;) govern your use of the AI FileSense desktop application (&quot;Service&quot;). By using our Service, you agree to these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using AI FileSense, you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              AI FileSense is a desktop application that helps you organize and find files on your Windows computer using AI-powered classification. The Service:
            </p>
            <ul>
              <li>Runs locally on your computer</li>
              <li>Requires your own Anthropic API key for AI features</li>
              <li>Moves and organizes files based on your instructions</li>
            </ul>

            <h2>3. Free Tier and Credits</h2>
            <h3>Free Usage</h3>
            <p>AI FileSense offers a free tier that includes:</p>
            <ul>
              <li>Unlimited local file scanning and indexing</li>
              <li>AI classification for up to <strong>1,000 files</strong> using your own API key</li>
              <li>Full organization and search features</li>
            </ul>

            <h3>API Costs</h3>
            <p>AI features require an Anthropic API key. You are responsible for:</p>
            <ul>
              <li>Obtaining your own API key from Anthropic</li>
              <li>Any costs associated with API usage</li>
              <li>Compliance with Anthropic&apos;s terms of service</li>
            </ul>

            <h2>4. User Responsibilities</h2>
            <h3>Your Files</h3>
            <ul>
              <li>You are responsible for backing up your files before using organization features</li>
              <li>You understand that file organization involves moving files on your computer</li>
              <li>You agree to use the preview and undo features to verify changes</li>
            </ul>

            <h3>API Key Security</h3>
            <ul>
              <li>Keep your API key secure and confidential</li>
              <li>Do not share your API key with others</li>
              <li>You are responsible for all usage under your API key</li>
            </ul>

            <h3>Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for illegal purposes</li>
              <li>Attempt to reverse engineer or modify the application</li>
              <li>Use the Service to process files you do not have rights to</li>
            </ul>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              <strong>THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND.</strong>
            </p>
            <p>We do not warrant that:</p>
            <ul>
              <li>The Service will be error-free or uninterrupted</li>
              <li>File classification will be 100% accurate</li>
              <li>The Service will meet your specific requirements</li>
            </ul>

            <h3>File Operations</h3>
            <p>While we implement safeguards (staging, undo, preview):</p>
            <ul>
              <li>File operations carry inherent risks</li>
              <li>Always maintain backups of important files</li>
              <li>Review organization plans before executing</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong></p>
            <ul>
              <li>We are not liable for any data loss or file corruption</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability is limited to the amount you paid for the Service (if any)</li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <h3>Our Rights</h3>
            <p>
              AI FileSense and its original content, features, and functionality are owned by us and protected by intellectual property laws.
            </p>

            <h3>Your Rights</h3>
            <ul>
              <li>You retain all rights to your files</li>
              <li>Organization plans and file indexes on your computer are yours</li>
              <li>You may export or delete your data at any time</li>
            </ul>

            <h2>8. Third-Party Services</h2>
            <h3>Anthropic API</h3>
            <p>The Service integrates with Anthropic&apos;s API. Your use of AI features is also subject to:</p>
            <ul>
              <li>Anthropic&apos;s Terms of Service</li>
              <li>Anthropic&apos;s Privacy Policy</li>
              <li>Anthropic&apos;s Acceptable Use Policy</li>
            </ul>
            <p>We are not responsible for Anthropic&apos;s services or policies.</p>

            <h2>9. Updates and Changes</h2>
            <h3>Application Updates</h3>
            <ul>
              <li>We may release updates to improve functionality</li>
              <li>Updates may change features or requirements</li>
              <li>You can choose whether to install updates</li>
            </ul>

            <h3>Terms Updates</h3>
            <ul>
              <li>We may modify these Terms at any time</li>
              <li>Continued use after changes constitutes acceptance</li>
              <li>Material changes will be communicated via the application</li>
            </ul>

            <h2>10. Termination</h2>
            <h3>By You</h3>
            <p>You may stop using the Service at any time by uninstalling the application.</p>

            <h3>By Us</h3>
            <p>We reserve the right to terminate or suspend access for:</p>
            <ul>
              <li>Violation of these Terms</li>
              <li>Illegal or harmful activities</li>
              <li>At our discretion with reasonable notice</li>
            </ul>

            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by applicable law. Any disputes shall be resolved in the appropriate jurisdiction.
            </p>

            <h2>12. Contact Information</h2>
            <p>For questions about these Terms:</p>
            <ul>
              <li>Email: legal@aifilesense.com</li>
              <li>Website: https://aifilesense.com/support/contact</li>
            </ul>

            <h2>13. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and AI FileSense regarding the Service and supersede any prior agreements.
            </p>

            <hr />

            <p>
              <strong>Summary:</strong> AI FileSense is a local-first tool to help organize your files. We provide the software; you provide the files and API key. Back up your files, review before organizing, and enjoy a cleaner desktop!
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  )
}
