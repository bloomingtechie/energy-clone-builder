import heroSolar from "@/assets/hero-solar.jpg";

interface PageBannerProps {
  title: string;
  image?: string;
}

const PageBanner = ({ title, image }: PageBannerProps) => (
  <section className="page-banner" style={{ backgroundImage: `url(${image ?? heroSolar})` }}>
    <div className="section-container relative z-10">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{title}</h1>
    </div>
  </section>
);

export default PageBanner;
