import type { Metadata } from 'next'
import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Disclaimer | 121212.community',
  description: 'Disclaimer for 121212.community, the city hub subdomain marketplace.',
}

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. General Disclaimer">
        <p>
          The information provided on 121212.community (the &ldquo;Platform&rdquo;) is for general informational and cultural purposes only. While MCM Enterprises, an unregistered DBA of SlateRiver LLC, a New Mexico LLC, strives to keep the information on the Platform accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Platform or the information, products, services, or related content contained on the Platform.
        </p>
        <p>
          Any reliance you place on information obtained through the Platform is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such information by you, any other visitor to the Platform, or anyone who may be informed of its contents.
        </p>
      </LegalSection>

      <LegalSection title="2. Hub Content">
        <p>
          City hub content is created and managed by independent curators who are licensed to operate their respective subdomains. MCM Enterprises does not author, endorse, verify, or guarantee the accuracy of content published by curators on their hubs. The views, opinions, and information expressed in hub content are those of the individual curators and do not necessarily reflect the views of MCM Enterprises or SlateRiver LLC.
        </p>
        <p>
          Curators are responsible for the accuracy and legality of the content they publish. MCM Enterprises monitors hub content for compliance with our Terms of Service but does not independently verify each piece of content. If you encounter content that you believe is inaccurate, misleading, or in violation of our policies, please report it to our support team.
        </p>
      </LegalSection>

      <LegalSection title="3. Third-Party Links">
        <p>
          The Platform may contain links to third-party websites, services, and resources that are not owned or controlled by MCM Enterprises. These links are provided for your convenience and do not signify our endorsement of such websites or their content. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        </p>
        <p>
          You acknowledge and agree that MCM Enterprises shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods, or services available on or through any third-party websites or services linked from the Platform.
        </p>
      </LegalSection>

      <LegalSection title="4. No Professional Advice">
        <p>
          Nothing on the Platform constitutes professional advice of any kind, including but not limited to legal, financial, investment, business, real estate, or tax advice. The Platform is a cultural content and community marketplace, and the information presented should not be interpreted as a substitute for consultation with qualified professionals in any relevant field.
        </p>
        <p>
          Before making any decisions based on information found on the Platform, including decisions related to bidding on city hubs, entering into license agreements, or engaging in any commercial activity, you should consult with appropriate professional advisors who can evaluate your specific circumstances.
        </p>
      </LegalSection>

      <LegalSection title="5. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, MCM Enterprises, SlateRiver LLC, and their respective officers, directors, employees, agents, and affiliates shall not be liable for any loss or damage of any kind arising from your use of the Platform. This includes, without limitation, direct, indirect, incidental, punitive, and consequential damages, as well as damages for loss of profits, goodwill, data, or other intangible losses.
        </p>
        <p>
          This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if MCM Enterprises has been advised of the possibility of such damage. Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>
          If you have questions about this Disclaimer or believe any content on the Platform requires correction, please contact us at{' '}
          <a href="mailto:support@121212.community" className="text-purple-light hover:text-purple transition-colors duration-300">
            support@121212.community
          </a>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
