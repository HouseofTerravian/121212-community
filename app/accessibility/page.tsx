import type { Metadata } from 'next'
import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Accessibility Statement | 121212.community',
  description: 'Accessibility Statement for 121212.community, the city hub subdomain marketplace.',
}

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Our Commitment">
        <p>
          MCM Enterprises, an unregistered DBA of SlateRiver LLC, is committed to ensuring that 121212.community is accessible to all users, including individuals with disabilities. We believe that access to digital cultural platforms is a fundamental right, and we strive to create an inclusive experience for every visitor regardless of their abilities or the assistive technologies they use.
        </p>
        <p>
          Accessibility is not an afterthought for us &mdash; it is woven into the design and development process from the ground up. We continuously evaluate and improve the Platform to remove barriers and provide an equitable experience for all members of the 121212 community.
        </p>
      </LegalSection>

      <LegalSection title="2. Standards">
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level, as published by the World Wide Web Consortium (W3C). These guidelines define how to make web content more accessible to people with a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
        </p>
        <p>
          While WCAG 2.1 AA is our target standard, we recognize that accessibility is an ongoing process. We are committed to monitoring and updating the Platform regularly to maintain and improve compliance as standards and technologies evolve.
        </p>
      </LegalSection>

      <LegalSection title="3. Features">
        <p>
          The Platform incorporates a number of accessibility features designed to improve usability for all visitors. These include semantic HTML markup for proper content structure and navigation; keyboard navigability throughout all interactive elements and pages; sufficient color contrast ratios between text and background elements; descriptive alt text for images and meaningful link text; responsive design that adapts to various screen sizes and zoom levels; and consistent, predictable navigation patterns.
        </p>
        <p>
          We also design our forms and interactive elements with clear labels, error messaging, and focus indicators to ensure they are usable with screen readers and other assistive technologies. Our content is structured with proper heading hierarchy and landmarks to facilitate efficient navigation.
        </p>
      </LegalSection>

      <LegalSection title="4. Feedback">
        <p>
          We welcome feedback from our users regarding the accessibility of 121212.community. If you encounter any accessibility barriers or have suggestions for improvement, please let us know. Your input is invaluable in helping us identify and address issues that may affect your ability to use the Platform.
        </p>
        <p>
          When reporting an accessibility issue, please include as much detail as possible, such as the page URL, a description of the issue, the assistive technology you are using (if applicable), and any steps to reproduce the problem. This information helps us diagnose and resolve issues more quickly.
        </p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>
          For accessibility-related feedback, questions, or to report an issue, please contact us at{' '}
          <a href="mailto:support@121212.community" className="text-purple-light hover:text-purple transition-colors duration-300">
            support@121212.community
          </a>. We aim to respond to all accessibility inquiries within 5 business days and to resolve reported issues as promptly as possible.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
