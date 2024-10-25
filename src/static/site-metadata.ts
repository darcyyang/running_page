interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'DarcyYang Running Page',
  siteUrl: 'https://dreamforce.tech',
  logo: 'https://dreamforce.tech/wp-content/uploads/2024/04/cropped-Designer-logo-192x192.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://dreamforce.tech',
    },
    {
      name: 'About',
      url: 'https://dreamforce.tech/messages',
    },
  ],
};

export default data;
