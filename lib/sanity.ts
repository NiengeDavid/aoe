// Sanity client configuration and data fetching functions
// In a real implementation, you would install @sanity/client and configure it properly

interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
}

// Mock Sanity client for demonstration
class MockSanityClient {
  private config: SanityConfig;

  constructor(config: SanityConfig) {
    this.config = config;
  }

  async fetch(query: string) {
    // In a real implementation, this would make actual API calls to Sanity
    // For now, we'll return mock data
    console.log("Sanity query:", query);
    return null;
  }
}

const client = new MockSanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function getHomePageData() {
  try {
    const data = await client.fetch(`
        *[_type == "homePage"][0]{
          heroText,
          heroSubtext,
          heroImage
        }
      `);
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

export async function getAboutPageData() {
  try {
    const data = await client.fetch(`
        *[_type == "aboutPage"][0]{
          content
        }
      `);
    return data;
  } catch (error) {
    console.error("Error fetching about page data:", error);
    return null;
  }
}

export async function getWorksPageData() {
  try {
    const data = await client.fetch(`
        *[_type == "worksPage"][0]{
          projects[]{
            title,
            description,
            image
          }
        }
      `);
    return data;
  } catch (error) {
    console.error("Error fetching works page data:", error);
    return null;
  }
}

export async function getDirectorsPageData() {
  try {
    const data = await client.fetch(`
        *[_type == "directorsPage"][0]{
          lena{
            bio,
            image
          },
          artem{
            bio,
            image
          }
        }
      `);
    return data;
  } catch (error) {
    console.error("Error fetching directors page data:", error);
    return null;
  }
}

export async function getContactsPageData() {
  try {
    const data = await client.fetch(`
        *[_type == "contactsPage"][0]{
          email,
          phone,
          address,
          description
        }
      `);
    return data;
  } catch (error) {
    console.error("Error fetching contacts page data:", error);
    return null;
  }
}
