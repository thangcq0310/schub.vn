import { Routes, Route, Navigate } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { Home } from "@/pages/Home"
import { Articles } from "@/pages/Articles"
import { ArticleDetail } from "@/pages/ArticleDetail"
import { Books } from "@/pages/Books"
import { ProductDetail } from "@/pages/ProductDetail"
import { Tools } from "@/pages/Tools"
import { Services } from "@/pages/Services"
import { Solutions } from "@/pages/Solutions"
import { SolutionDetail } from "@/pages/SolutionDetail"
import { Resources } from "@/pages/Resources"
import { Checklist } from "@/pages/Checklist"
import { About } from "@/pages/About"
import { Learning } from "@/pages/learning/Learning"
import { LearningSupplyChainFoundation } from "@/pages/learning/LearningSupplyChainFoundation"
import { LearningDemandAnalysis } from "@/pages/learning/LearningDemandAnalysis"
import { LearningDemandManagement } from "@/pages/learning/LearningDemandManagement"
import { LearningForecasting } from "@/pages/learning/LearningForecasting"
import { LearningSOP } from "@/pages/learning/LearningSOP"
import { LearningOperationsPlanningControl } from "@/pages/learning/LearningOperationsPlanningControl"
import { AdminGuard } from "@/components/AdminAuth"
import { AdminBlog } from "@/pages/AdminBlog"

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Articles />} />
          <Route path="blog/:slug" element={<ArticleDetail />} />
          <Route path="articles" element={<Navigate to="/blog" replace />} />
          <Route path="articles/:slug" element={<Navigate to="/blog" replace />} />
          <Route path="books" element={<Navigate to="/solutions/products" replace />} />
          <Route path="books/:slug" element={<Navigate to="/solutions/products" replace />} />
          <Route path="tools" element={<Navigate to="/solutions/tools" replace />} />
          <Route path="services" element={<Navigate to="/solutions/services" replace />} />
          <Route path="checklist" element={<Navigate to="/solutions/checklist" replace />} />
          <Route path="learning" element={<Learning />} />
          <Route path="learning/supply-chain-foundation" element={<LearningSupplyChainFoundation />} />
          <Route path="learning/demand-analysis" element={<LearningDemandAnalysis />} />
          <Route path="learning/demand-management" element={<LearningDemandManagement />} />
          <Route path="learning/forecasting" element={<LearningForecasting />} />
          <Route path="learning/sop" element={<LearningSOP />} />
          <Route path="learning/operations-planning-control" element={<LearningOperationsPlanningControl />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/resources" element={<Resources />} />
          <Route path="solutions/products" element={<Books />} />
          <Route path="solutions/products/:slug" element={<ProductDetail />} />
          <Route path="solutions/tools" element={<Tools />} />
          <Route path="solutions/services" element={<Services />} />
          <Route path="solutions/checklist" element={<Checklist />} />
          <Route path="solutions/:slug" element={<SolutionDetail />} />
          <Route path="about" element={<About />} />
          <Route path="scm" element={<Navigate to="/" replace />} />
          <Route path="scm/*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/admin/blog" element={<AdminGuard><AdminBlog /></AdminGuard>} />
      </Routes>
    </HelmetProvider>
  )
}

export default App