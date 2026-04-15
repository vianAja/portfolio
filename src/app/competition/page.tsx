import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllCompetitions } from "@/lib/competition";

export const metadata = {
  title: "Competition | NAJWAN",
  description: "A record of competitions, results, and technical focus areas.",
};

function mapServiceName(raw: string): string {
  const normalized = raw.trim().toLowerCase();
  const serviceMap: Record<string, string> = {
    "vpc": "Amazon VPC",
    "route table (rtb)": "Route tables (Amazon VPC)",
    "route table": "Route tables (Amazon VPC)",
    "rtb": "Route tables (Amazon VPC)",
    "ec2": "Amazon EC2",
    "s3": "Amazon S3",
    "sg": "Security groups (Amazon VPC)",
    "security group (sg)": "Security groups (Amazon VPC)",
    "efs": "Amazon EFS",
    "codecommit": "AWS CodeCommit",
    "pipeline": "AWS CodePipeline",
    "codepipeline": "AWS CodePipeline",
    "rabbitmq": "Amazon MQ for RabbitMQ",
    "cloudfront": "Amazon CloudFront",
    "lambda": "AWS Lambda",
    "sns": "Amazon SNS",
    "sqs": "Amazon SQS",
    "core": "AWS IoT Core",
    "device management": "AWS IoT Device Management",
    "kinesis": "Amazon Kinesis Data Streams",
    "data stream": "Amazon Kinesis Data Streams",
    "sagemaker": "Amazon SageMaker",
    "iam": "AWS IAM",
    "elastic beanstalk": "AWS Elastic Beanstalk",
    "aws backup": "AWS Backup",
    "vault rds": "Amazon RDS",
    "rds": "Amazon RDS",
    "alb": "Application Load Balancer (ALB)",
    "dynamodb": "Amazon DynamoDB",
    "cloudformation": "AWS CloudFormation",
  };

  return serviceMap[normalized] ?? raw.trim();
}

function mapCloudFormationResource(raw: string): string {
  const normalized = raw.trim().toLowerCase();
  const resourceMap: Record<string, string> = {
    "bucket": "Amazon S3 bucket",
    "ec2": "Amazon EC2",
    "dynamodb": "Amazon DynamoDB",
    "sns": "Amazon SNS",
    "vpc": "Amazon VPC",
    "subnet": "Subnet",
    "rtb": "Route table",
  };

  return resourceMap[normalized] ?? raw.trim();
}

function parseOutline(outline: string[]): { services: string[]; cloudFormationResources: string[] } {
  const services = new Set<string>();
  const cloudFormationResources = new Set<string>();

  for (const item of outline) {
    const cleaned = item
      .replace(/^AWS Cloud Service:\s*/i, "")
      .replace(/^AWS IoT Service:\s*/i, "")
      .trim();

    const cloudformationMatch = cleaned.match(/^cloudformation\s*\((.+)\)$/i);
    if (cloudformationMatch) {
      services.add("AWS CloudFormation");
      const resources = cloudformationMatch[1].replace(/^build\s+/i, "").split(",");
      for (const resource of resources) {
        const mapped = mapCloudFormationResource(resource);
        if (mapped) cloudFormationResources.add(mapped);
      }
      continue;
    }

    services.add(mapServiceName(cleaned));
  }

  return {
    services: Array.from(services),
    cloudFormationResources: Array.from(cloudFormationResources),
  };
}

export default function CompetitionPage() {
  const competitions = getAllCompetitions();

  return (
    <>
      <NavBar active="Competition" />
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-8 mb-20 relative overflow-hidden">
          <ScrollReveal className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary mb-4 block">
                Achievement Track
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-none text-white">
                Competition<br />
                <span className="text-primary">Journey</span>
              </h1>
            </div>
            <p className="hidden lg:block max-w-sm text-on-surface-variant font-body text-sm leading-relaxed italic text-right">
              A focused timeline of competitions that shaped my practical cloud and engineering execution.
            </p>
          </ScrollReveal>
          <div className="absolute -bottom-10 -right-20 opacity-5 select-none pointer-events-none">
            <span className="font-headline text-[12rem] font-bold uppercase text-white">
              AWARDS
            </span>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {competitions.map((competition) => {
              const { services, cloudFormationResources } = parseOutline(competition.meta.outline);
              return (
              <ScrollReveal
                key={competition.meta.slug}
                id={competition.meta.slug}
                className="group rounded-2xl border border-outline-variant/15 bg-surface-container-high p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="font-label text-[0.625rem] uppercase tracking-[0.14em] text-outline-variant mb-2">
                      {competition.meta.level} • {competition.meta.year}
                    </p>
                    <h2 className="font-headline text-2xl font-bold text-white leading-tight">
                      {competition.meta.title}
                    </h2>
                    <p className="text-primary text-xs uppercase tracking-wider mt-1">
                      {competition.meta.organizer}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-md bg-primary/15 px-3 py-1.5 font-label text-[0.6875rem] uppercase tracking-wide text-primary">
                    {competition.meta.result}
                  </span>
                </div>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                  {competition.content}
                </p>

                {services.length > 0 && (
                  <div className="mb-4">
                    <p className="font-label text-[0.625rem] uppercase tracking-[0.12em] text-outline-variant mb-2">
                      Services
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <span
                          key={service}
                          className="bg-surface-container-highest px-2.5 py-1 rounded text-[0.625rem] font-label uppercase tracking-[0.08em] text-on-surface-variant"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {cloudFormationResources.length > 0 && (
                  <div className="mb-5">
                    <p className="font-label text-[0.625rem] uppercase tracking-[0.12em] text-outline-variant mb-2">
                      CloudFormation Resources
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cloudFormationResources.map((resource) => (
                        <span
                          key={resource}
                          className="bg-primary/10 px-2.5 py-1 rounded text-[0.625rem] font-label uppercase tracking-[0.08em] text-primary"
                        >
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {competition.meta.certificateFile ? (
                  <a
                    href={competition.meta.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-headline text-sm border-b-2 border-primary/20 pb-0.5 hover:border-primary transition-all"
                  >
                    View Certificate
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-outline text-sm">
                    Certificate not available
                  </span>
                )}
              </ScrollReveal>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
