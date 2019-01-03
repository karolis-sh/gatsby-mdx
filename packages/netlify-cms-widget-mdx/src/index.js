import React from 'react';
import { MarkdownControl as MdxControl } from 'netlify-cms-widget-markdown';
import MdxPreview from './MdxPreview';

export const setupPreview = mdxProps => props => <MdxPreview mdx={mdxProps} {...props} />;

export { MdxControl, MdxPreview };
