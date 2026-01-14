import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Prose } from '@/components/content/prose'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AI FileSense Privacy Policy. Learn how we protect your data and respect your privacy.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Last Updated: January 2025"
      />

      <Section spacing="lg">
        <Container size="sm">
          <Prose>
            <div className="not-prose p-6 bg-secondary/10 rounded-xl mb-8">
              <h2 className="text-lg font-semibold text-secondary mb-2">Summary</h2>
              <p className="text-foreground/70">
                <strong>Your files stay on your computer.</strong> AI FileSense is a local-first application. We do not upload, store, or have access to your files.
              </p>
            </div>

            <p>
              AI FileSense (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how our desktop application handles your information.
            </p>

            <h2>What Data We Process</h2>

            <h3>Local Processing (On Your Computer)</h3>
            <ul>
              <li><strong>File metadata:</strong> Filenames, file sizes, dates, and folder locations</li>
              <li><strong>File content snippets:</strong> Small text excerpts (first ~500 characters) for AI classification</li>
              <li><strong>Organization history:</strong> Records of file movements for undo functionality</li>
            </ul>
            <p>
              All of this data is stored <strong>locally</strong> in a SQLite database on your computer at:<br />
              <code>%APPDATA%/com.aifilesense.app/filesense.db</code>
            </p>

            <h3>Data Sent to AI Providers</h3>
            <p>When you use AI-powered features, the following is sent to your configured AI provider (Anthropic):</p>
            <ul>
              <li>Filenames</li>
              <li>File extensions</li>
              <li>Small text snippets (for document classification)</li>
            </ul>

            <p><strong>We never send:</strong></p>
            <ul>
              <li>Full file contents</li>
              <li>Personal identification information</li>
              <li>File paths containing usernames (paths are anonymized)</li>
            </ul>

            <h2>Third-Party Services</h2>

            <h3>Anthropic API</h3>
            <p>
              AI FileSense uses the Anthropic API for document classification. When you use AI features:
            </p>
            <ul>
              <li>You provide your own API key</li>
              <li>Data is sent directly from your computer to Anthropic</li>
              <li>Anthropic&apos;s privacy policy applies: <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/privacy</a></li>
            </ul>
            <p>We do not have access to your API key or the data you send to Anthropic.</p>

            <h2>Data Storage</h2>

            <h3>Local Storage Only</h3>
            <ul>
              <li>All file indexes are stored locally on your computer</li>
              <li>Organization plans and history are stored locally</li>
              <li>Settings (including your API key) are stored locally and encrypted</li>
            </ul>

            <h3>No Cloud Storage</h3>
            <ul>
              <li>We do not operate servers that store your data</li>
              <li>We do not have user accounts or cloud sync</li>
              <li>Your data never passes through our systems</li>
            </ul>

            <h2>Data Retention</h2>
            <ul>
              <li>All data is stored locally until you delete it</li>
              <li>Uninstalling the application removes all local data</li>
              <li>You can delete the database file at any time</li>
            </ul>

            <h2>Your Rights</h2>
            <p>You have complete control over your data:</p>
            <ul>
              <li><strong>Access:</strong> All data is stored locally and accessible to you</li>
              <li><strong>Deletion:</strong> Delete the app data folder to remove all data</li>
              <li><strong>Portability:</strong> The SQLite database can be exported or backed up</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              AI FileSense is not intended for children under 13. We do not knowingly collect information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last Updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: privacy@aifilesense.com</li>
              <li>Website: <a href="/support/contact">https://aifilesense.com/support/contact</a></li>
            </ul>

            <hr />

            <p>
              <strong>Key Takeaway:</strong> AI FileSense is designed with privacy at its core. Your files never leave your computer, and you maintain complete control over your data at all times.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  )
}
