import { HeroSectionNew } from '../components/HeroSectionNew';
import { StatsBar } from '../components/StatsBar';
import { ProblemSection } from '../components/ProblemSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { ProductsGridNew } from '../components/ProductsGridNew';
import { DashboardSectionEnterprise } from '../components/DashboardSectionEnterprise';
import { WorkflowAutomationEnterprise } from '../components/WorkflowAutomationEnterprise';
import { AuditTrailNew } from '../components/AuditTrailNew';
import { SecuritySection } from '../components/SecuritySection';
import { ClosingCTANew } from '../components/ClosingCTANew';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <HeroSectionNew />
      <StatsBar />
      <ProblemSection />
      <SocialProofSection />
      <ProductsGridNew />
      <DashboardSectionEnterprise />
      <WorkflowAutomationEnterprise />
      <AuditTrailNew />
      <SecuritySection />
      <ClosingCTANew />
    </div>
  );
}