// global.d.ts
declare module "*.mdx" {
  import * as React from "react";

  const MDXComponent: React.ComponentType<any>;

  // Optional meta export
  export const meta: {
    title: string;
    description: string;
    [key: string]: any; // allow extra fields
  };

  export default MDXComponent;
}
