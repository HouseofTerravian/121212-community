import type { Metadata } from 'next'
import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | 121212.community',
  description: 'Privacy Policy for 121212.community, the city hub subdomain marketplace.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Information We Collect">
        <p>
          When you use 121212.community (the &ldquo;Platform&rdquo;), operated by MCM Enterprises, an unregistered DBA of SlateRiver LLC, a New Mexico LLC, we may collect certain information from you. This includes information you provide directly, such as your name, email address, city of interest, and bid details when you submit a contact form or bid on a city hub.
        </p>
        <p>
          We also collect information automatically through your use of the Platform, including your IP address, browser type, operating system, referring URLs, pages visited, time spent on pages, and other standard web analytics data. This information helps us understand how users interact with the Platform and improve its functionality and content.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>
          We use the information we collect to operate, maintain, and improve the Platform; to process bids and manage curator licenses; to communicate with you regarding your account, bids, or inquiries; and to send you updates about the Platform and the broader 121212 ecosystem, if you have opted in to receive such communications.
        </p>
        <p>
          We may also use your information to detect, prevent, and address technical issues, security threats, and fraudulent activity. Additionally, we may use aggregated, anonymized data for research and analytical purposes to better understand our user base and improve our services.
        </p>
      </LegalSection>

      <LegalSection title="3. Data Retention">
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Contact form submissions and bid information are retained for the duration of any active license agreement plus a reasonable period thereafter.
        </p>
        <p>
          If you request deletion of your personal information, we will comply with your request within 30 days, subject to any legal obligations that require us to retain certain data. Anonymized and aggregated data may be retained indefinitely for analytical purposes.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies">
        <p>
          The Platform uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us remember your preferences, understand usage patterns, and deliver relevant content. We use both session cookies, which expire when you close your browser, and persistent cookies, which remain on your device until they expire or you delete them.
        </p>
        <p>
          You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of the Platform. By continuing to use the Platform without adjusting your browser settings, you consent to the use of cookies as described in this policy.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-Party Services">
        <p>
          We may use third-party services for analytics, hosting, payment processing, and email communication. These service providers may collect and process your information in accordance with their own privacy policies. Third-party services we currently use or may use include Vercel (hosting), Stripe (payment processing), and analytics providers.
        </p>
        <p>
          We are not responsible for the privacy practices of third-party services. We encourage you to review the privacy policies of any third-party services that you interact with through the Platform. We select our service providers carefully and require that they handle your data in a manner consistent with our privacy standards.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>
          Depending on your jurisdiction, you may have certain rights regarding your personal information, including the right to access, correct, delete, or port your data. You may also have the right to object to or restrict certain types of processing, and the right to withdraw consent where processing is based on consent.
        </p>
        <p>
          To exercise any of these rights, please contact us at the email address provided below. We will respond to your request within 30 days and will not discriminate against you for exercising any of your privacy rights.
        </p>
      </LegalSection>

      <LegalSection title="7. Children">
        <p>
          The Platform is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take immediate steps to delete that information.
        </p>
        <p>
          If you are a parent or guardian and believe your child has provided us with personal information, please contact us so that we can take appropriate action.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by posting the updated policy on the Platform with a revised &ldquo;Last Updated&rdquo; date and, where appropriate, by sending you a notification.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically. Your continued use of the Platform after any changes to this policy constitutes your acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          For questions or concerns about this Privacy Policy or our data practices, please contact us at{' '}
          <a href="mailto:support@121212.community" className="text-purple-light hover:text-purple transition-colors duration-300">
            support@121212.community
          </a>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
